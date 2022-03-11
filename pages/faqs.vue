<template>
	<nuxt-layout name="default">
		<div class="wrapper p-4">
			<header>
				<div class="wrapper">
					<h2 class="font-bold text-3xl">FAQs</h2>
					<p>Browse through our frequently asked questions</p>
				</div>
			</header>

			<section class="py-4">
				<div class="wrapper bg-white rounded-lg">
					<ul class="flex flex-col gap-4 cont p-4">
						<li
							v-for="faq in faqs"
							:key="faq.meta.id"
							@click="toggleFAQ"
							class="faq"
						>
							<client-only>
								<header class="p-2 bg-gray-100 rounded-lg mb-2">
									<div class="wrapper flex justify-between gap-4">
										<h2 class="text-2xl">{{ faq.question }}</h2>
										<hero-icon name="chevronDown" />
									</div>
									<ul v-if="faq.category" class="categories flex gap-2 pt-2">
										<li v-for="category in faq.category">
											<button
												class="cta !p-1 !px-2 !text-cyan-600 text-xs border !border-cyan-600 !bg-transparent !rounded"
											>
												{{ category.name }}
											</button>
										</li>
									</ul>
								</header>
								<article
									v-html="faq.answer"
									class="answer max-h-0 px-2 overflow-hidden"
								></article>
							</client-only>
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

	const toggleFAQ = (e) => {
		const faq = e.path.find((el) => el.className.includes("faq"));
		faq.querySelector(".answer").classList.toggle("active");
	};

	const params = { page: "1", page_size: "10" };
	const faqs = await $butter.content
		.retrieve(["faqs"], params)
		.then(({ data: { data } }) => data.faqs)
		.catch((err) => console.log(err.respoonse));
</script>

<style scoped>
	.answer.active {
		@apply max-h-full;
	}
</style>
