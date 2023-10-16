<script setup lang="ts">
const yearsSince = computed(() => {
	const currentDate = new Date()
	const dateOfBirth = new Date("1994-12-14")
	let years = currentDate.getFullYear() - dateOfBirth.getFullYear()

	// Check if the birthday has occurred this year or not
	if (
		currentDate.getMonth() < dateOfBirth.getMonth() ||
		(currentDate.getMonth() === dateOfBirth.getMonth() &&
			currentDate.getDate() < dateOfBirth.getDate())
	) {
		years--
	}

	return years
})
</script>

<template>
	<section class="grid-section" id="about">
		<div class="grid-container about-section">
			<h2 class="about-title">about</h2>

			<div class="about-content">
				<p>
					I am a {{ yearsSince }}-year-old frontend developer based in Osijek,
					Croatia, with over three years of professional experience. My career
					has been shaped by my academic background and curiosity for modern
					technology. This journey provided me opportunities to work on
					large-scale frontend projects that have enriched my skills in HTML,
					CSS, JavaScript, and modern frontend frameworks.
					<br />
					Whether in a team at the office or while working remotely, I
					thoroughly enjoy effective communication and the sense of achievement
					that comes from teamwork.
					<br />
					Staying at the forefront of industry trends is a key aspect of my
					work, ensuring that my contributions are both innovative and
					impactful. The ever-evolving world of web development excites me, and
					I eagerly anticipate new challenges and opportunities.
				</p>
				<div class="circle">
					<svg viewBox="0 0 100 100" width="100" height="100">
						<defs>
							<path
								id="circle"
								d="M 50, 50
								m -37, 0
								a 37,37 0 1,1 74,0
								a 37,37 0 1,1 -74,0"
							/>
						</defs>
						<text font-size="11">
							<textPath xlink:href="#circle">
								about me &middot; about me &middot; about me &middot; about me
								&middot;
							</textPath>
						</text>
					</svg>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.about-title {
	grid-column: 1/-1;
	justify-self: center;
}

.about-content {
	grid-column: 1/-1;
	position: relative;
	border-radius: 5px;
	background: #1d1d27de;
	backdrop-filter: blur(5px);
	display: grid;

	& p {
		padding: 24px 48px 24px 24px;
	}

	&::before {
		z-index: -1;
		content: "";
		position: absolute;
		inset: 0;
		border-radius: 5px;
		padding: 2px;
		background: linear-gradient(45deg, transparent 10%, #80808024);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask: linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: 85% 15%;
		grid-column: 1/12;
	}
}

.circle {
	height: 120px;
	aspect-ratio: 1/1;
	background-color: white;
	color: black;
	border-radius: 50%;
	right: -70px;
	top: -50px;
	position: absolute;
	display: grid;
	justify-items: center;
	align-items: center;
	box-shadow: 6px 3px 18px $color-mod-magenta, -6px -3px 18px $color-mod-blue;

	@media screen and (min-width: 1024px) {
		top: 0;
		right: -10%;
		height: 100%;
	}

	& svg {
		fill: currentColor;
		height: auto;
		transform-origin: center;
		width: 80%;
		transform: rotate(12deg);

		& textPath {
			font-size: 12px;
			color: black;
		}
	}
}

.about-section {
	position: relative;
	&::before {
		content: "";
		position: absolute;
		width: auto;
		height: 100%;
		aspect-ratio: 1/1;
		background-image: url("/grid.png");
		background-repeat: no-repeat;
		background-position: center;
		align-self: center;
	}
}
</style>
