<script setup lang="ts">
const breakpoints = useBreakpoints({
	laptop: 1024,
})
const navbarOpened = ref(false)

const openNavbar = () => {
	navbarOpened.value = true
	document.documentElement.classList.add("no-scroll")
}

const closeNavbar = () => {
	navbarOpened.value = false
	document.documentElement.classList.remove("no-scroll")
}
</script>

<template>
	<transition name="fade" mode="out-in">
		<svg
			v-if="navbarOpened"
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 384 512"
			class="close"
			@click="closeNavbar"
		>
			<path
				d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
			/>
		</svg>
		<svg
			v-else
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 448 512"
			class="close"
			@click="openNavbar"
		>
			<path
				d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
			/>
		</svg>
	</transition>
	<Transition name="slide-fade">
		<nav
			v-if="navbarOpened || breakpoints.isGreaterOrEqual('laptop')"
			class="nav"
		>
			<div class="nav-container">
				<ul class="primary-navigation" @click="closeNavbar">
					<li>
						<a href="#about"> about </a>
					</li>
					<li>
						<a href="#experience"> experience </a>
					</li>
					<li>
						<a href="#projects"> projects </a>
					</li>
					<li>
						<a href="#education"> education </a>
					</li>
				</ul>
				<span><a href="#contact" @click="closeNavbar"> contact </a></span>
			</div>
		</nav>
	</Transition>
</template>

<style lang="scss" scoped>
.nav {
	position: fixed;
	width: 100%;
	height: 100%;
	display: grid;
	align-items: center;
	&--opened {
		display: grid;
	}
	z-index: 3;
	backdrop-filter: blur(5px);
	background: rgba(17, 14, 14, 0.959);

	&::after {
		content: "";
		background-color: transparent;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
		background-repeat: repeat;
		background-size: 182px;
		opacity: 0.06;
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	@media screen and (min-width: 1024px) {
		padding: 24px;
		border-bottom: 1px white solid;
		background: unset;
		display: flex;
		mix-blend-mode: exclusion;
		height: auto;
		justify-content: center;
	}
}
.nav-container {
	max-width: 80rem;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-end;
	text-align: end;
	padding-inline-end: 24px;

	& a,
	span {
		font-family: "Syncopate", sans-serif;
		color: white;
	}

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 0;
	}
}
.primary-navigation {
	display: flex;
	list-style: none;
	flex-direction: column;
	gap: 24px;

	@media screen and (min-width: 1024px) {
		flex-direction: row;
	}
}
.close {
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 4;
	width: 25px;
	height: 25px;
	mix-blend-mode: difference;

	& path {
		fill: white;
	}

	@media screen and (min-width: 1024px) {
		display: none;
	}
}
.nav-icon {
	position: fixed;
	z-index: 3;
}
.navbar {
	display: flex;
	flex-direction: column;
	max-height: 100vh;
	position: fixed;
	height: 100%;
	background: rgba(17, 14, 14, 0.959);
	overflow-x: hidden;
	width: 100%;

	&--closed {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		width: 100%;
		padding: 24px 0 24px;
		border-bottom: 1px white solid;
		max-height: 80px;
		display: flex;
		justify-content: center;
		mix-blend-mode: exclusion;
		backdrop-filter: blur(5px);

		&::after {
			content: "";
			background-color: transparent;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
			background-repeat: repeat;
			background-size: 182px;
			opacity: 0.06;
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
	}
	& span,
	a {
		font-family: "Syncopate", sans-serif;
		text-transform: uppercase;
		color: red;
	}
}
.navigation {
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media screen and (min-width: 1024px) {
		grid-column: 1/9;
		flex-direction: row;
	}
}

.contact {
	display: flex;

	@media screen and (min-width: 1024px) {
		grid-column: 9/-1;
		justify-content: flex-end;
	}
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.5s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	opacity: 0;
	transform: translateX(100%);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
	opacity: 1;
	transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
