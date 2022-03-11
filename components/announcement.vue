<template>
	<!-- prettier-ignore -->
	<div class="hidden announcement p-4 w-full" :class="{ 'active' : active }">
		<div class="wrapper flex gap-2 w-full p-2 bg-white shadow rounded-lg">
			<div
				class="icon-cont flex-shrink-0 h-auto w-12 flex items-center justify-center bg-cyan-100 text-cyan-600 rounded-md"
			>
				<hero-icon name="informationCircle" />
			</div>

			<div class="details">
				<h3 class="font-bold text-xl">{{ announcement?.title }}</h3>
				<p>{{ announcement?.description }}</p>
			</div>

			<div class="action-cont">
				<button
					@click="active = false"
					class="flex text-cyan-600 bg-cyan-100 p-1 h-min rounded-md"
				>
					<hero-icon name="x" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { $butter } = useNuxtApp();
	const params = {
		page: "1",
		page_size: "10",
	};
	const announcement = await $butter.content
		.retrieve(["announcements"], params)
		.then(({ data: { data } }) =>
			data.announcements.find((x) => {
				return x.active;
			})
		)
		.catch((err) => console.log(err.response));

	const active = ref(announcement ? true : false);
</script>

<style scoped>
	.active {
		@apply block;
	}
</style>
