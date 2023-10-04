<script setup lang="ts"></script>

<template>
	<section class="about" id="about">
		<div class="grid-container">
			<h2 class="about-title">About</h2>

			<div class="about-text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic amet sit
				expedita dolore, unde voluptas distinctio commodi possimus voluptate aut
				deserunt accusamus ab pariatur ipsa perspiciatis nostrum. Possimus enim
				animi, veritatis inventore voluptatibus culpa dolorum deleniti sit
				laudantium aliquid, quos cupiditate asperiores vero architecto esse, non
				ab nulla veniam odio!
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.about {
	height: 500px;
	display: grid;
}

.about-title {
	grid-column: 1/-1;
}

.about-text {
	grid-column: 7/-1;
}
</style>
