<script setup lang="ts"></script>

<template>
	<div class="grid-section" id="contact">
		<div class="grid-container">
			<h2 class="contact-title">contact</h2>
			<div class="contact">
				<span class="label">Email</span>
				<a href="mailto:cvitkov.ivana@gmail.com">cvitkov.ivana@gmail.com</a>
				<a href="https://github.com/icvitkov" target="_blank">Github</a>
				<a
					href="https://www.linkedin.com/in/ivana-cvitkovi%C4%87-6b1092209/    "
					target="_blank"
					>LinkedIn</a
				>
				<a
					href="https://keys.openpgp.org/vks/v1/by-fingerprint/14288347545644A003D51CB3524EC245192050D4"
					target="_blank"
					>GPG key</a
				>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contact-title {
	grid-column: 1/-1;
	justify-self: center;
}

.contact {
	display: grid;
	grid-column: 1/-1;
	text-align: center;
}

.label {
	color: rgba(255, 255, 255, 0.5); // color: white
	font-size: 16px;
}
</style>
