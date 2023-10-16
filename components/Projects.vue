<script setup lang="ts"></script>

<template>
	<section class="grid-section projects" id="projects">
		<div class="grid-container">
			<h2 class="projects-title">projects</h2>
			<div class="projects-list">
				<ProjectItem
					client="Barrage"
					year="2023"
					name="Nuxt Starter Kit"
					:tech-stack="[
						'nuxt',
						'vite',
						'typescript',
						'html5',
						'turborepo',
						'strapi',
						'pnpm',
					]"
				>
					<template #description>
						Generated significant time savings by implementing a frontend
						monorepo structure, enhancing code sharing and reusability across
						multiple projects. Implemented Strapi for dedicated content
						management within our Nuxt applications.
					</template>
				</ProjectItem>

				<ProjectItem
					client="Barrage"
					year="2022 - 2023"
					name="hive"
					link="https://www.hivecloud.com"
					:tech-stack="['vue3', 'vite', 'typescript', 'html5', 'postCSS']"
				>
					<template #description>
						Developed and maintained a web page, end-user application, and
						backoffice system for efficient provisioning of virtual machines and
						bare metal instances, utilizing a secure Single Sign-On (SSO)
						approach.
					</template>
				</ProjectItem>

				<ProjectItem
					client="All4Labels"
					year="2021 - 2022"
					name="all4Labels"
					link="https://www.roango.com"
					:tech-stack="['vue3', 'vite', 'typescript', 'html5', 'sass']"
				>
					<template #description>
						My primary role revolved around the end-user application, addressing
						various user roles and their privileges. A notable achievement was
						creating a flexible QR and barcode scanner, crucial to the project's
						core aim: combining digitally printed serialized labels, optional
						hardware, and a smart SaaS cloud.
					</template>
				</ProjectItem>

				<ProjectItem
					client="Roango"
					year="2021"
					name="Roango"
					link="https://www.roango.com"
					:tech-stack="['react', 'typescript', 'gatsby', 'html5', 'sass']"
				>
					<template #description>
						I was maintaining both the web page and the backoffice application
						for a project dedicated to transforming the recruitment approach for
						companies and talents, facilitating a quicker and easier matching
						process. The primary focus was on the backoffice application,
						ensuring precise alignment of user roles with the appropriate
						privileges to enable specific actions.
					</template>
				</ProjectItem>

				<ProjectItem
					client="Sartura"
					year="2020 - 2021"
					name="Kaon"
					:tech-stack="['vue2', 'webpack', 'html5', 'quasar']"
				>
					<template #description>
						Managed the user interface for OpenWrt-based devices designed for a
						prominent Korean broadband service provider. My role primarily
						involved maintaining the application and actively contributing to
						the development of new features.
					</template>
				</ProjectItem>

				<ProjectItem
					client="Sartura"
					year="2020 - 2021"
					link="https://www.sentinel-sps.com/"
					name="Sentinel"
					:tech-stack="['vue2', 'webpack', 'html5', 'sass']"
				>
					<template #description>
						Participated in a white-label project aimed at developing innovative
						features for devices utilizing OpenWrt technology. The project's
						primary objective was to provide images tailored to individual
						clients. The most substantial challenge revolved around refactoring
						the entire application while simultaneously ensuring the continued
						operation of the older version in a live production environment.
					</template>
				</ProjectItem>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.projects-title {
	grid-column: 1/-1;
	justify-self: center;
}

.projects-list {
	grid-column: 1/-1;
	display: grid;
	gap: 24px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
}

.projects {
	position: relative;
	&::after {
		content: "";
		width: 30%;
		height: 30%;
		border-radius: 50%;
		background: linear-gradient($color-light-blue 20%, $color-mod-magenta);
		top: 45%;
		left: 30%;
		opacity: 0.2;
		filter: blur(50px);
		position: absolute;
		box-shadow: -5px 80px 150px $color-mod-magenta,
			-5px -80px 150px $color-light-blue;
		z-index: -1;
	}
}
</style>
