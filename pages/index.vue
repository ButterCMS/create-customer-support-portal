<template>
	<nuxt-layout name="default">
		<header>
			<!-- <h1>{{ announcements }}</h1> -->
		</header>
	</nuxt-layout>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: false,
	});

	const { $butter } = useNuxtApp();
	const params = {
		page: "1",
		page_size: "10",
	};
</script>
