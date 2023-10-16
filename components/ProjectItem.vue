<script setup lang="ts">
defineProps<{
	client: string
	name: string
	link?: string
	year: string
	techStack?: string[]
}>()
</script>

<template>
	<div class="project">
		<div class="project-header">
			<p>{{ client }}</p>
			<span class="year">{{ year }}</span>
		</div>
		<h5 class="project-name">{{ name }}</h5>
		<span class="project-link">{{ link ? link : "private repo" }}</span>
		<div class="project-description">
			<slot name="description"></slot>
		</div>
		<div class="tech-stack" v-if="techStack?.length">
			<span class="tech-item" v-for="(item, index) in techStack" :key="index">{{
				item
			}}</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.project {
	border: 1px solid grey;
	border-radius: 5px;
	padding: 24px;
	background: rgba(20, 20, 27, 0.493);
	-webkit-backdrop-filter: blur(5px);
	backdrop-filter: blur(5px);
	display: flex;
	flex-direction: column;
}
.project-header {
	display: flex;
	gap: 24px;
	justify-content: space-between;

	& .year {
		opacity: 0.5;
	}
}

.project-link {
	color: $color-mod-blue;
}

.project-name {
	font-weight: 400;
	margin-bottom: 12px;
	margin-top: 24px;
	color: $color-mod-magenta;
}

.project-description {
	margin-top: 24px;
	flex-grow: 1;
}
.tech-stack {
	padding-top: 12px;
	display: flex;
	flex-wrap: wrap;
	gap: 12px;

	& .tech-item {
		border: 1px solid;
		border-radius: 2px;

		padding-inline: 5px;

		&:nth-child(3n + 1) {
			border-color: $color-mod-blue;
			color: $color-mod-blue;
		}

		&:nth-child(3n + 2) {
			border-color: $color-mod-magenta;
			color: $color-mod-magenta;
		}

		&:nth-child(3n) {
			border-color: $color-soft-orange;
			color: $color-soft-orange;
		}
	}
}
</style>
