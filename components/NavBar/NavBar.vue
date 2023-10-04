<script setup lang="ts"></script>

<template>
	<nav class="navbar">
		<a href="#about">
			<span>about</span>
		</a>
		<a href="#education">
			<span>education</span>
		</a>
		<span>experience</span>
		<span>projects</span>
	</nav>
</template>

<style lang="scss" scoped>
.navbar {
	display: flex;
	justify-content: space-evenly;
	position: fixed;
	width: 100%;
	padding: 24px 0 24px;
	border-bottom: 1px white solid;
	max-height: 80px;
	mix-blend-mode: exclusion;

	& span {
		font-family: "Syncopate", sans-serif;
		text-transform: uppercase;
	}
}
</style>
