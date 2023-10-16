<script setup lang="ts">
import Arrow from "@/assets/arrow.svg"
const props = defineProps<{
	text: string
	link: string
}>()
</script>

<template>
	<a :href="link">
		<div class="button-link">
			<span class="button-text">
				{{ text }}
			</span>
			<Arrow class="arrow" />
		</div>
	</a>
</template>

<style lang="scss" scoped>
.button-link {
	height: 120px;
	max-height: 100%;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	position: relative;
	gap: 10px;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: 50%;
		padding: 2px;
		background: linear-gradient(
			50deg,
			$color-mod-magenta 50%,
			$color-light-blue,
			$color-mod-blue
		);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask: linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		transition: all 0.3s ease;
	}

	& .arrow {
		height: 80px;
		width: 80px;
		right: -30px;
		bottom: -5px;
		color: white;
		transform: rotate(90deg);
		position: absolute;
		opacity: 0.5;
		transition: all 0.3s ease;
	}

	&:hover {
		&::before {
			transform: rotate(150deg);
			background: linear-gradient(
				150deg,
				$color-mod-blue 50%,
				$color-light-blue,
				$color-mod-magenta
			);
		}

		& .arrow {
			opacity: 1;
			bottom: -10px;
		}
	}
}
</style>
