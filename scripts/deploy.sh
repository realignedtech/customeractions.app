#!/usr/bin/env bash
# Build and deploy the Customer Actions static site to the Hetzner web host.
#
# This script owns only the customeractions-next image and service. It does not
# modify or deploy Traefik configuration.
#
# Usage:
#   npm run deploy
#
# Environment:
#   SSH_TARGET=core@windshift.sh       override the host
#   SSH_KEY=~/.ssh/id_rsa_hawaii       override the SSH key
#   VERIFY_ORIGIN=https://...          verify a non-production origin
#   VERIFY_ORIGIN=skip                 skip verification (pre-DNS-cut migration)

set -euo pipefail

ssh_target="${SSH_TARGET:-core@windshift.sh}"
ssh_key="${SSH_KEY:-$HOME/.ssh/id_rsa_hawaii}"
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
deploy_dir="$repo_root/deploy"
quadlet="$deploy_dir/customeractions-next.container"

name="customeractions-next"
image="localhost/${name}:1"
service="${name}.service"
context_dir="/tmp/${name}-ctx-$$"
archive="/tmp/${name}-$$.tar.gz"
remote_build="/tmp/${name}-build-$$"

SSH=(ssh -i "$ssh_key" -o IdentitiesOnly=yes)

step() { printf '\n=== %s\n' "$*"; }

cleanup() {
	rm -rf "$context_dir"
	rm -f "$archive"
}
trap cleanup EXIT

test -f "$ssh_key"                     || { echo "missing SSH key: $ssh_key"; exit 1; }
test -f "$deploy_dir/Containerfile"    || { echo "missing $deploy_dir/Containerfile"; exit 1; }
test -f "$deploy_dir/Caddyfile"        || { echo "missing $deploy_dir/Caddyfile"; exit 1; }
test -f "$quadlet"                     || { echo "missing $quadlet"; exit 1; }

step "Build $repo_root"
(
	cd "$repo_root"
	[ -d node_modules ] || npm ci
	npm run build
	test -f build/index.html || { echo "build produced no build/index.html"; exit 1; }
)

step "Stage container build context"
mkdir -p "$context_dir"
cp "$deploy_dir/Containerfile" "$context_dir/"
cp "$deploy_dir/Caddyfile" "$context_dir/"
cp -R "$repo_root/build" "$context_dir/build"
COPYFILE_DISABLE=1 tar -czf "$archive" -C "$context_dir" .

step "Build $image and restart $service on $ssh_target"
scp -i "$ssh_key" -o IdentitiesOnly=yes "$archive" "$ssh_target:/tmp/"
scp -i "$ssh_key" -o IdentitiesOnly=yes "$quadlet" "$ssh_target:/tmp/${name}.container"
"${SSH[@]}" "$ssh_target" "
	set -euo pipefail
	rm -rf '$remote_build'
	mkdir -p '$remote_build'
	tar -xzf '/tmp/$(basename "$archive")' -C '$remote_build'
	rm -f '/tmp/$(basename "$archive")'
	sudo podman build -t '$image' '$remote_build'
	rm -rf '$remote_build'
	sudo install -m 0644 -o root -g root '/tmp/${name}.container' \
		'/etc/containers/systemd/${name}.container'
	rm -f '/tmp/${name}.container'
	sudo systemctl daemon-reload
	sudo systemctl restart '$service'
	sudo systemctl is-active --quiet '$service'
	sudo podman image prune -f >/dev/null
"

step "Verify deployment"
(
	cd "$repo_root"
	# VERIFY_ORIGIN=skip during a migration whose DNS has not been cut yet:
	# production still answers on the old origin, so live verification runs
	# after the cutover instead (npm run verify:production).
	if [ "${VERIFY_ORIGIN:-}" = "skip" ]; then
		echo "verify skipped (VERIFY_ORIGIN=skip) — run verify:production after the DNS cutover"
	else
		node scripts/verify-production.mjs "${VERIFY_ORIGIN:-https://customeractions.app}"
	fi
)

step "Done: https://customeractions.app"
