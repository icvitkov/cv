<script setup lang="ts">
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
		</div>
	</a>
</template>

<style lang="scss" scoped></style>
