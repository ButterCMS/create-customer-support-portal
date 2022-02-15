<template>
	<li
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
								new Date(article.fields.header.published).toLocaleDateString()
							}}
						</h4>
					</span>
				</div>
			</header>
		</nuxt-link>
	</li>
</template>
<script setup>
	const props = defineProps({
		article: Object,
	});
</script>
