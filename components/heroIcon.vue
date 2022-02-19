<template>
	<span class="inline-flex !h-auto stroke-current" v-html="$heroIcons[`${name}`]"></span>
</template>
<script>
	export default defineComponent({
		props: ["name"],
		setup() {
			const { $heroIcons } = useNuxtApp();
		},
	});
	// const icon = await import(`assets/svg/heroicons/outline/search.svg?raw`);
</script>
