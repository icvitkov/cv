import { Education } from '.nuxt/components';
<script setup lang="ts"></script>

<template>
	<section class="grid-section" id="education">
		<div class="grid-container education">
			<h2 class="ed-title">education</h2>
			<div class="ed-list">
				<CVCard title="Faculty of Organization and Informatics" align-at-end>
					<template #title> Bachelor degree </template>
					<template #details>
						<p>2013 - 2017</p>
						<p>Bachelor thesis: Information system of commission sales</p>
					</template>
				</CVCard>

				<CVCard title="School of Economics Braća Radić" align-at-end>
					<template #details> 2009 - 2013 </template>
				</CVCard>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.ed-title {
	grid-column: 1/-1;
	justify-self: center;
}

.ed-list {
	grid-column: 1/-1;
}

.ed-item {
	display: grid;
	gap: 24px;
	align-items: center;
	padding-block: 24px;
	border-bottom: 3px solid transparent;
	border-image: linear-gradient(
		45deg,
		$color-mod-magenta,
		$color-mod-blue,
		$color-light-blue
	);
	border-image-slice: 1;
	border-bottom-width: 1px;
	border-bottom-style: solid;

	& h4 {
		font-family: "Barlow", sans-serif;
		font-weight: 300;
		margin: 0;
	}

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
}

.education {
	position: relative;

	&::after {
		content: "";
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: linear-gradient($color-light-blue 20%, $color-mod-magenta);
		bottom: -150px;
		left: -50px;
		opacity: 0.2;
		filter: blur(50px);
		position: absolute;
		box-shadow: -5px 80px 100px $color-mod-magenta,
			-5px -80px 100px $color-light-blue;
	}
}
</style>
