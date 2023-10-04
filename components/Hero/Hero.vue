<script setup lang="ts"></script>

<template>
	<section class="hero">
		<div class="grid-container">
			<div class="title">
				<h1 class="main-title">Ivana <br />Cvitkovic</h1>
				<h3>frontend developer</h3>
			</div>
			<div class="visuals">
				<img class="grid-image" src="grid.png" alt="" />
				<div class="circle"></div>
				<div class="block"></div>
			</div>
			<p class="short-description">
				Experienced frontend developer with passion for developing web
				applications based on modern technologies.
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
	position: relative;
	align-items: center;
	width: 100%;

	@media screen and (min-width: 1024px) {
		grid-column: span 7;
		padding: unset;
	}
}

.grid-image {
	position: absolute;
	max-height: 80dvh;
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
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border: 1px solid grey;
	border-right: unset;
	backdrop-filter: blur(5px);
	justify-self: center;
	margin-left: 350px;
	border: double 1px 80808024;
	border-radius: 5px;
	background-image: linear-gradient(90deg, #80808024, transparent 90%),
		linear-gradient(90deg, #80808024, transparent 90%);
	background-origin: border-box;
	background-clip: content-box, border-box;

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
}

.short-description {
	grid-column: 1/-1;
	font-size: clamp(0.938rem, 1vw + 1rem, 1.75rem);

	@media screen and (min-width: 1024px) {
		grid-column: 7/-1;
	}
}

.hero {
	height: 100dvh;
	display: grid;
	overflow-x: hidden;
	margin-top: 86px;
}
</style>
