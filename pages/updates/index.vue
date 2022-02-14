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
						<li
							v-for="blogPost in blogPosts"
							:key="blogPost.slug"
							class="bg-white transition-all p-4 hover:shadow-md rounded-lg cursor-pointer"
						>
							<nuxt-link :to="`/updates/${blogPost.slug}`">
								<header>
									<div class="wrapper">
										<h2 class="font-bold text-2xl">
											{{ blogPost.fields.header.title }}
										</h2>
										<p>{{ blogPost.fields.header.description }}</p>
										<span class="label mt-2">
											<hero-icon name="clock" class="text-cyan-600 w-5 h-5" />
											<h4 class="">
												{{
													new Date(
														blogPost.fields.header.published
													).toLocaleDateString()
												}}
											</h4>
										</span>
									</div>
								</header>
							</nuxt-link>
						</li>
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
	const blogPosts = await $butter.page
		.list("blog_post", params)
		.then(({ data: { data } }) => data)
		.catch((err) => console.log(err));
</script>
