# Customer Actions for Jira — SvelteKit

Static SvelteKit implementation of `customeractions.app`, using the Story Mapping site's shared Realigned architecture and the existing Customer Actions content and assets.

## Development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run check
npm run build          # also regenerates build/sitemap.xml
npm run verify:export  # acceptance checks against build/
```

The generated static site is written to `build/`.

## Deployment

Deploys run from CI. **Push to `main`** and
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds a
`linux/arm64` image, pushes it to GHCR, then runs one forced-command SSH key on
the host to pull that exact commit's tag and restart the service. Pushes to
other branches and pull requests do **not** deploy; use the workflow's manual
`workflow_dispatch` trigger to run it by hand.

- Site key `customeractions` · service `customeractions-next.service` · image
  `ghcr.io/realignedtech/customeractions`
- Host: `core@windshift.sh` (arm64). The CI key is a forced command: it may only
  run `realigned-deploy`, which accepts `<site> <tag>` and nothing else — no
  shell, no port forwarding.
- Rollback: `ssh core@windshift.sh 'realigned-deploy customeractions rollback-<timestamp>'`.
  Every deploy logs the rollback tag it created.
- Host-side setup (forced-command script + keys) lives in the infra repo:
  `hetzner/scripts/website-ci-deploy-setup.sh`, idempotent.

The manual path still works and builds on the host instead of GHCR: `deploy/`
and `scripts/deploy.sh` mirror the `storymapping-next` container route: Caddy
serving the prerendered export on :8077 behind Traefik. The deploy script
builds, ships the container to the web host, restarts the service, then runs
`scripts/verify-production.mjs` against https://customeractions.app.

## Open items

- **Analytics:** customeractions.app has no Umami website ID, so `src/app.html`
  ships no tracker and `deploy/Caddyfile` allows no analytics origin. Do not
  reuse the portfoliomapping.app property. When a property exists, add the
  script and allow its origin in the same change.
- **Traefik:** the router and certificate for `customeractions.app` live in the
  infra repo and are added at rollout (MA-91). The container port :8077 is a
  proposal until that router is confirmed.
