<template>
	<div class="body flex">
		<nav class="w-full min-h-screen w-xs min-w-xs bg-white">
			<div class="wrapper flex flex-col gap-4">
				<header class="h-18 px-7 py-4 mb-4 border-r border-b border-gray-200">
					<div class="wrapper flex items-center h-full">
						<figure class="logo">
							<h1 class="font-bold text-cyan-600 text-xl">Patient Portal</h1>
						</figure>
					</div>
				</header>

				<section class="nav-section">
					<header class="nav-section-header">
						<h4 class="text-gray-400">Personal</h4>
					</header>
					<ul class="links">
						<li class="link-item">
							<nuxt-link to="/">
								<span> Home </span>
							</nuxt-link>
						</li>
						<li class="link-item">
							<nuxt-link to="/user">
								<span> Personal Information </span>
							</nuxt-link>
						</li>
						<li class="link-item">
							<span> Appointments </span>
						</li>
					</ul>
				</section>
				<section class="nav-section">
					<header class="nav-section-header">
						<h4 class="text-gray-400">Support</h4>
					</header>
					<ul class="links">
						<li class="link-item">
							<span> FAQs for patient accounts </span>
						</li>
						<li class="link-item">
							<span> Knowledge Base </span>
						</li>
						<li class="link-item">
							<span> Recent Updates </span>
						</li>
					</ul>
				</section>
			</div>
		</nav>

		<div class="cont flex-grow">
			<header class="h-18 py-4 px-6 border-b border-b-gray-200 bg-white">
				<div class="wrapper flex items-center justify-between w-full h-full">
					<form action="">
						<div class="form-control flex gap-2 items-center">
							<hero-icon name="search" class="text-cyan-600" />
							<input
								type="search"
								name="search"
								id="search"
								class="form-input !bg-transparent !border-transparent"
								placeholder="Search"
							/>
						</div>
					</form>

					<div class="cont flex gap-4">
						<button class="text-cyan-600">
							<hero-icon name="bell" />
						</button>

						<div class="account-info flex gap-2">
							<div class="img-cont w-10 h-10 rounded-full bg-cyan-600"></div>
							<div class="details">
								<h3>{{ user.name }}</h3>
								<p class="text-xs text-gray-400">Patient</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main class="main">
				<div class="cont">
					<announcement />
				</div>
				<slot />
			</main>
		</div>
	</div>
</template>

<script setup>
	import { useUser } from "~~/composables/states";
	const { $heroIcons } = useNuxtApp();

	const user = useUser();
</script>

<style scoped>
	.nav-section {
		@apply px-4;
	}

	.nav-section .nav-section-header {
		@apply mb-2 px-3;
	}
	.links {
		@apply flex flex-col;
	}

	.links .link-item {
		@apply p-2 px-3 hover:(bg-cyan-50 text-cyan-600) rounded-lg cursor-pointer;
	}
</style>
