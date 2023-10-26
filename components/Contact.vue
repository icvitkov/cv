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
				<span class="button">
					<a href="/IvanaCvitkovicCV.pdf" download>Download CV</a>
				</span>
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
	justify-items: center;
}

.label {
	color: rgba(255, 255, 255, 0.5); // color: white
	font-size: 16px;
}

.button {
	border-radius: 5px;
	position: relative;
	display: flex;
	width: fit-content;
	padding: 5px 10px;
	margin-block-start: 12px;

	& a {
		color: white;
	}

	&::before {
		z-index: -1;
		content: "";
		position: absolute;
		inset: 0;
		border-radius: 5px;
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

	&:hover {
		&::before {
			transform: rotatey(180deg);
			background: linear-gradient(
				50deg,
				$color-mod-blue 50%,
				$color-light-blue,
				$color-mod-magenta
			);
		}
	}
}
</style>
