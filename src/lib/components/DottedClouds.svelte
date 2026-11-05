<script>
	let {
		opacity = 0.2,
		dotSpacing = 14,
		animated = false,
		waveFrequency = 1,    // Multiplier for wave frequency (higher = tighter waves)
		waveAmplitude = 1,    // Multiplier for wave amplitude (higher = bigger waves)
		ribbonWidth = 1,      // Multiplier for ribbon thickness
		bleedAmount = 0,      // Pixels to extend below section
		bleedColor = null     // RGB string for bleed zone dots (e.g., "200, 200, 200")
	} = $props();

	let canvas;
	let ctx;
	let dots = [];
	let animationId;
	let mouseX = 0;
	let mouseY = 0;
	let targetMouseX = 0;
	let targetMouseY = 0;
	let prefersReducedMotion = false;
	let time = 0;
	let sectionHeight = 0;  // Original section height (for bleed color transition)

	const LERP_SPEED = 0.06;

	// Performance optimization: batch dots by opacity level
	const OPACITY_BUCKETS = 10;
	let fillStyles = [];
	let bleedFillStyles = [];
	let dotBuckets = []; // Array of arrays, one per opacity bucket
	let bleedDotBuckets = []; // Separate buckets for bleed zone dots

	// Pre-compute fill styles for each opacity bucket
	function updateFillStyles() {
		fillStyles = Array.from({ length: OPACITY_BUCKETS }, (_, i) => {
			const bucketOpacity = opacity * (1 - (i / OPACITY_BUCKETS) * 0.7);
			return `rgba(255, 255, 255, ${bucketOpacity})`;
		});

		// Pre-compute bleed zone styles if needed
		if (bleedColor) {
			const [br, bg, bb] = bleedColor.split(',').map(c => parseInt(c.trim()));
			bleedFillStyles = Array.from({ length: OPACITY_BUCKETS }, (_, i) => {
				const bucketOpacity = opacity * (1 - (i / OPACITY_BUCKETS) * 0.7);
				return `rgba(${br}, ${bg}, ${bb}, ${bucketOpacity})`;
			});
		}
	}

	// Wave parameters for the ribbon shape
	function getWaveY(x, t, width, height) {
		const normalizedX = x / width;
		// Main wave - larger amplitude
		const wave1 = Math.sin(normalizedX * Math.PI * 1.5 * waveFrequency + t * 0.0002) * (height * 0.2 * waveAmplitude);
		// Secondary wave for complexity
		const wave2 = Math.sin(normalizedX * Math.PI * 3 * waveFrequency + t * 0.00015) * (height * 0.08 * waveAmplitude);
		// Slow undulation
		const wave3 = Math.sin(normalizedX * Math.PI * 0.6 * waveFrequency + t * 0.0001) * (height * 0.1 * waveAmplitude);

		return wave1 + wave2 + wave3;
	}

	// Ribbon thickness varies along the wave
	function getRibbonThickness(x, width, height) {
		const normalizedX = x / width;
		// Much thicker - covers more of the canvas
		const base = height * 0.5 * ribbonWidth;
		const variation = Math.sin(normalizedX * Math.PI * 2) * (height * 0.15 * ribbonWidth);
		const variation2 = Math.cos(normalizedX * Math.PI * 1.2) * (height * 0.1 * ribbonWidth);
		return Math.max(height * 0.2 * ribbonWidth, base + variation + variation2);
	}

	function generateDots(width, height) {
		dots = [];

		// The ribbon flows across the canvas
		const ribbonCenterY = height * 0.5; // Center vertically

		// Generate dots in a grid pattern, but only keep those within the ribbon
		for (let x = -50; x < width + 50; x += dotSpacing) {
			const waveOffset = getWaveY(x, 0, width, height);
			const thickness = getRibbonThickness(x, width, height);

			// Vertical range for this x position
			const centerY = ribbonCenterY + waveOffset;
			const topY = centerY - thickness;
			const bottomY = centerY + thickness + bleedAmount; // Extend into bleed zone

			for (let y = topY; y < bottomY; y += dotSpacing) {
				// Distance from ribbon center (0 = center, 1 = edge)
				const originalBottomY = centerY + thickness;
				const distFromCenter = y > originalBottomY
					? 1 + (y - originalBottomY) / (bleedAmount || 1) * 0.5 // Gradually fade in bleed zone
					: Math.abs(y - centerY) / thickness;

				// Fade out toward edges (less aggressive for bleed zone)
				const fadeThreshold = y > originalBottomY ? 0.1 : 0.3;
				if (Math.random() > distFromCenter * fadeThreshold) {
					// Add slight randomness to position for organic feel
					const jitterX = (Math.random() - 0.5) * 4;
					const jitterY = (Math.random() - 0.5) * 4;

					const cappedDistFromCenter = Math.min(distFromCenter, 1);
					const opacityBucket = Math.floor(cappedDistFromCenter * (OPACITY_BUCKETS - 1));

					dots.push({
						baseX: x + jitterX,
						baseY: y + jitterY,
						distFromCenter: cappedDistFromCenter,
						// Size varies: larger in center, smaller at edges
						size: 1 + (1 - cappedDistFromCenter) * 2,
						// Store original ribbon position for animation
						ribbonX: x,
						// Cache base wave offset to avoid recalculating per frame
						baseWaveOffset: waveOffset,
						// Pre-compute opacity bucket for batched rendering
						opacityBucket,
						// Track if this dot is in the bleed zone
						isBleedZone: bleedAmount > 0 && bleedColor && y > originalBottomY
					});
				}
			}
		}

		// Group dots by opacity bucket for batched rendering
		groupDotsByBucket();
	}

	// Separate dots into buckets by opacity level for batched drawing
	function groupDotsByBucket() {
		dotBuckets = Array.from({ length: OPACITY_BUCKETS }, () => []);
		bleedDotBuckets = Array.from({ length: OPACITY_BUCKETS }, () => []);

		for (const dot of dots) {
			if (dot.isBleedZone) {
				bleedDotBuckets[dot.opacityBucket].push(dot);
			} else {
				dotBuckets[dot.opacityBucket].push(dot);
			}
		}
	}

	function lerp(start, end, factor) {
		return start + (end - start) * factor;
	}

	function render(timestamp) {
		if (!ctx || !canvas) return;

		time = timestamp || 0;

		const width = canvas.width;
		const height = canvas.height;

		mouseX = lerp(mouseX, targetMouseX, LERP_SPEED);
		mouseY = lerp(mouseY, targetMouseY, LERP_SPEED);

		ctx.clearRect(0, 0, width, height);

		// Render dots batched by opacity bucket for better performance
		// This reduces draw calls from ~2000+ to ~20 (10 buckets x 2 for regular + bleed)
		renderBuckets(dotBuckets, fillStyles, width, height);
		if (bleedColor) {
			renderBuckets(bleedDotBuckets, bleedFillStyles, width, height);
		}

		// Only continue animation loop if animated prop is true
		if (animated) {
			animationId = requestAnimationFrame(render);
		}
	}

	// Render all dots in a set of buckets using batched draw calls
	function renderBuckets(buckets, styles, width, height) {
		for (let bucketIndex = 0; bucketIndex < OPACITY_BUCKETS; bucketIndex++) {
			const bucket = buckets[bucketIndex];
			if (bucket.length === 0) continue;

			ctx.fillStyle = styles[bucketIndex];
			ctx.beginPath();

			for (const dot of bucket) {
				// Use cached base wave offset instead of recalculating
				const waveOffset = prefersReducedMotion ? 0 : getWaveY(dot.ribbonX, time, width, height);
				let drawX = dot.baseX;
				let drawY = dot.baseY + (waveOffset - dot.baseWaveOffset);

				// Mouse influence - gentle push (only when animated)
				if (!prefersReducedMotion && animated) {
					const dx = drawX - mouseX;
					const dy = drawY - mouseY;
					const dist = Math.sqrt(dx * dx + dy * dy);
					const maxDist = 100;

					if (dist < maxDist && dist > 0) {
						const influence = (1 - dist / maxDist) * 10;
						drawX += (dx / dist) * influence;
						drawY += (dy / dist) * influence;
					}
				}

				// Use moveTo to start a new sub-path without breaking the batch
				ctx.moveTo(drawX + dot.size, drawY);
				ctx.arc(drawX, drawY, dot.size, 0, Math.PI * 2);
			}

			// Single fill call for entire bucket
			ctx.fill();
		}
	}

	function handleMouseMove(e) {
		if (prefersReducedMotion) return;

		const rect = canvas.getBoundingClientRect();
		targetMouseX = e.clientX - rect.left;
		targetMouseY = e.clientY - rect.top;
	}

	function handleResize() {
		if (!canvas) return;

		const rect = canvas.parentElement.getBoundingClientRect();
		canvas.width = rect.width;
		sectionHeight = rect.height;
		canvas.height = rect.height + bleedAmount;

		generateDots(canvas.width, sectionHeight || canvas.height);

		mouseX = canvas.width / 2;
		mouseY = canvas.height / 2;
		targetMouseX = mouseX;
		targetMouseY = mouseY;
	}

	$effect(() => {
		if (!canvas) return;

		ctx = canvas.getContext('2d');
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// Pre-compute fill styles for batched rendering
		updateFillStyles();

		handleResize();
		render();

		window.addEventListener('resize', handleResize);

		// Only add mouse tracking if animated
		if (animated) {
			window.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			window.removeEventListener('resize', handleResize);
			if (animated) {
				window.removeEventListener('mousemove', handleMouseMove);
			}
		};
	});
</script>

<canvas bind:this={canvas} class="absolute top-0 left-0 w-full pointer-events-none z-[1]"></canvas>
