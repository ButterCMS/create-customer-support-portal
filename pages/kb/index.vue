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
						<li
							v-for="article in articles"
							:key="article.slug"
							class="bg-white transition-all p-4 hover:shadow-md rounded-lg cursor-pointer"
						>
							<nuxt-link :to="`/kb/${article.slug}`">
								<header>
									<div class="wrapper">
										<h2 class="font-bold text-2xl">
											{{ article.fields.header.title }}
										</h2>
										<p>{{ article.fields.header.description }}</p>
										<span class="label mt-2">
											<hero-icon name="clock" class="text-cyan-600 w-5 h-5" />
											<h4 class="">
												{{
													new Date(
														article.fields.header.published
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
	const articles = await $butter.page
		.list("article", params)
		.then(({ data: { data } }) => data)
		.catch((err) => console.log(err));
</script>
