<script setup lang="ts"></script>

<template>
	<section class="hero">
		<div class="grid-container hero-container">
			<div class="title">
				<h1 class="main-title">Ivana <br />Cvitkovic</h1>
				<h3>frontend developer</h3>
			</div>
			<div class="visuals">
				<div class="circle"></div>
				<div class="block"></div>
			</div>
			<!-- <LinkButton class="link" text="View Github" link="/" /> -->
			<p class="short-description">
				Combining academic knowledge and passion for modern technology, I enjoy
				creating impactful frontend solutions
			</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.title {
	display: grid;
	grid-column: 1/-1;
	align-content: baseline;

	@media screen and (min-width: 1024px) {
		align-content: center;
		grid-column: span 5;
	}
}

.visuals {
	grid-column: 1/-1;
	display: grid;
	height: 100%;
	min-height: 150px;
	position: absolute;
	align-items: center;
	width: 100%;
	z-index: -1;

	&::after {
		content: "";
		position: absolute;
		width: 150%;
		height: 150%;
		background-image: url("/grid.png");
		background-position: bottom;
		background-repeat: no-repeat;
		z-index: -1;
		bottom: -35px;

		@media screen and (min-width: 1024px) {
			width: 100%;
			height: 100%;
		}
	}

	@media screen and (min-width: 1024px) {
		grid-column: span 7;
		padding: unset;
	}
}

.grid-image {
	position: absolute;
	max-height: 80vh;
	height: 100%;
	width: 100%;
	z-index: -1;
	@media screen and (min-width: 1024px) {
		top: 48px;
	}
}

.circle {
	width: 150px;
	height: 150px;
	background: linear-gradient(
		$color-soft-orange 0%,
		$color-light-blue 20%,
		$color-mod-magenta 50%
	);
	position: absolute;
	justify-self: center;
	border-radius: 50%;
	filter: blur(10px);

	@media screen and (min-width: 768px) {
		width: 200px;
		height: 200px;
	}

	@media screen and (min-width: 1024px) {
		align-self: center;
		width: 300px;
		height: 300px;
	}
}

.block {
	height: 170px;
	width: 350px;
	position: absolute;
	border-right: unset;
	backdrop-filter: blur(5px);
	justify-self: center;
	margin-left: 350px;
	border-radius: 5px;
	background: linear-gradient(
		-90deg,
		transparent 10%,
		rgba(128, 128, 128, 0.3)
	);

	@media screen and (min-width: 768px) {
		height: 220px;
		width: 500px;
		margin-left: 500px;
	}

	@media screen and (min-width: 1024px) {
		align-self: center;
		width: 600px;
		height: 350px;
		margin-left: 600px;
	}

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		padding: 2px;
		background: linear-gradient(
			-90deg,
			transparent 10%,
			rgba(128, 128, 128, 0.3)
		);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask: linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		border-radius: 5px;
	}
}

.link {
	grid-column: 1/-1;

	@media screen and (min-width: 1024px) {
		grid-column: 1/7;
	}
}

.short-description {
	grid-column: 1/-1;
	font-size: clamp(0.938rem, 1vw + 1rem, 1.75rem);
	align-self: end;
	padding-block-end: 12px;

	@media screen and (min-width: 1024px) {
		grid-column: 7/-1;
	}
}

.hero {
	height: 100vh;
	margin-top: 0;
	display: grid;

	@media screen and (min-width: 768px) {
		height: calc(100vh - 86px);
		margin-top: 86px;
	}
}

.hero-container {
	height: 100%;
}
</style>
