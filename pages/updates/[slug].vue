<template>
	<nuxt-layout name="default">
		<article class="prose prose-xl p-4 m-auto">
			<div class="wrapper">
				<header class="pb-4 mb-6 border-b border-b-gray-200">
					<div class="wrapper">
						<h1 class="font-bold text-5xl">
							{{ article.fields.header.title }}
						</h1>
						<p class="text-xl">{{ article.fields.header.description }}</p>

						<span class="label mt-2">
							<hero-icon name="clock" class="text-cyan-600 w-5 h-5" />
							<span class="">
								{{
									new Date(article.fields.header.published).toLocaleDateString()
								}}
							</span>
						</span>
					</div>
				</header>
				<client-only>
					<p v-html="article.fields.body"></p>
				</client-only>
			</div>
		</article>
	</nuxt-layout>
</template>
<script setup>
	definePageMeta({
		layout: false,
	});
	const route = useRoute();
	const slug = route.params.slug;

	const { $butter } = useNuxtApp();
	const article = await $butter.page
		.retrieve("*", slug)
		.then(({ data: { data } }) => data)
		.catch((err) => console.log(err));
</script>
