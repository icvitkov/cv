<script setup lang="ts"></script>

<template>
	<section class="grid-section" id="experience">
		<div class="grid-container experience">
			<h2 class="ex-title">experience</h2>
			<div class="ex-list">

				<CVCard title="Frontend developer at Keeper Solutions">
					<template #title>
						<p>Oct 2023 - present</p>
						<p>full-time</p>
					</template>
					<template #details>
						<p>
							As a Frontend Developer at Keeper Solutions, I worked on a Talent Acquisition application using Nuxt.js for the frontend,
							Node.js with Azure Functions for backend services, and MongoDB for data management. I collaborated with an international
							team and served clients based in Atlanta, balancing feature development with the demands of a live production environment.
							The team was transitioning to Agile methodologies, which added unique challenges given the active client base and existing
							workflows. This role enhanced my ability to deliver high-quality features while ensuring stability for end users.
						</p>
					</template>
				</CVCard>

				<CVCard title="Frontend developer at Barrage">
					<template #title>
						<p>Sep 2021 - Oct 2023</p>
						<p>full-time</p>
					</template>
					<template #details>
						<p>
							I've had the opportunity to work on a diverse range of projects,
							from complex web applications to simpler web pages. I played an
							integral role in maintaining coding standards within the frontend
							team, ensuring consistency and efficiency in our development
							processes. One of my standout accomplishments was the creation of
							a starter kit designed to streamline the project initiation
							process, empowering the team to kickstart new projects with ease
							and uniformity. In addition, I completed mentorship training by
							<a href="https://halpet.hr/">HalPet</a>, allowing me to provide
							guidance and support to several younger colleagues, contributing
							to their professional growth and the team's overall success. These
							experiences have enriched my problem-solving skills, encouraged
							collaboration with colleagues, and contributed to the overall
							success of our development initiatives.
						</p>
					</template>
				</CVCard>

				<CVCard title="Lead frontend developer at Sartura">
					<template #title>
						<p>Jan 2020 - Sep 2021</p>
						<p>full-time</p>
					</template>
					<template #details>
						I had the chance to tackle a variety of projects that involved a
						wide range of challenges. I worked extensively on OpenWrt projects
						where the primary focus shifted away from typical API calls and
						leaned towards SNMP and Telnet integrations. One of my key
						achievements was refactoring of an entire application, transitioning
						it to utilize Quasar framework while also implementing a dark mode
						for improved user experience. In addition to these more extensive
						projects, I played a significant role in developing and maintaining
						web pages, addressing the requirements of both clients and our
						in-house needs. In the latter phase of my employment, I stepped into
						the position of a lead frontend developer, where I undertook the
						responsibility of project planning and assigning tasks to my team.
						These diverse experiences have enriched my skill set, reinforced my
						problem-solving abilities, and taught me how to take initiative
						within the team.
					</template>
				</CVCard>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.ex-title {
	grid-column: 1/-1;
	justify-self: center;
}

.ex-list {
	grid-column: 1/-1;
}

.experience {
	position: relative;

	&::after {
		content: "";
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: linear-gradient($color-light-blue 20%, $color-mod-magenta);
		bottom: -150px;
		right: -50px;
		transform: rotateX(180deg);
		opacity: 0.2;
		filter: blur(50px);
		position: absolute;
		box-shadow: -5px 80px 100px $color-mod-magenta,
			-5px -80px 100px $color-light-blue;
	}
}
</style>
