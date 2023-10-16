<script setup lang="ts">
defineProps<{
	title: string
	detailsTitle?: string
	alignAtEnd?: boolean
}>()
</script>

<template>
	<div class="card">
		<div>
			<h5>{{ title }}</h5>
			<slot name="title"> </slot>
		</div>
		<div :class="['details', { alignAtEnd: alignAtEnd }]">
			<slot name="details"> </slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	display: grid;
	gap: 24px;
	align-items: start;
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

	& h5 {
		font-family: "Barlow", sans-serif;
		font-weight: 300;
		margin: 0;
	}

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 2fr;
	}
}

.details {
	text-align: start;
	display: grid;
	align-content: space-between;
	height: 100%;

	&.alignAtEnd {
		text-align: start;

		@media screen and (min-width: 768px) {
			text-align: end;
		}
	}
}
</style>
