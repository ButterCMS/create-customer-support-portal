<template>
	<nuxt-layout name="default">
		<div class="wrapper p-4">
			<header>
				<div class="wrapper">
					<h2 class="font-bold text-3xl">Updates</h2>
					<p>Browse through our latest blog posts to stay informed</p>
				</div>
			</header>

			<section class="py-4">
				<div class="wrapper">
					<ul class="flex flex-col gap-4 cont">
						<article-item
							v-for="blogPost in blogPosts"
							:key="blogPost.slug"
							:article="blogPost"
						>
						</article-item>
					</ul>
				</div>
			</section>
		</div>
	</nuxt-layout>
</template>

<script setup>
	import ArticleItem from "~~/components/articleItem.vue";
	definePageMeta({
		layout: false,
	});

	const { $butter } = useNuxtApp();
	const params = { page: 1, page_size: 10 };
	const blogPosts = await $butter.page
		.list("blog_post", params)
		.then(({ data: { data } }) => data)
		.catch((err) => console.log(err));
</script>
