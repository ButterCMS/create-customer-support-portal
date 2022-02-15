<template>
	<nuxt-layout name="default">
		<div class="wrapper p-4">
			<header>
				<div class="wrapper">
					<h2 class="font-bold text-3xl">Knowledge Base</h2>
					<p>Browse through our frequently asked questions</p>
				</div>
			</header>

			<section class="py-4">
				<div class="wrapper">
					<ul class="flex flex-col gap-4 cont">
						<article
							v-for="article in articles"
							:key="article.slug"
							article="article"
						></article>
					</ul>
				</div>
			</section>
		</div>
	</nuxt-layout>
</template>

<script setup>
	definePageMeta({
		layout: false,
	});

	const { $butter } = useNuxtApp();
	const params = { page: 1, page_size: 10 };
	const articles = await $butter.page
		.list("article", params)
		.then(({ data: { data } }) => data)
		.catch((err) => console.log(err));
</script>
