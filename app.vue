<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script setup>
	import "~/assets/css/main.css";
	import { useUser, useUpdateUser } from "./composables/states";

	const { $butter } = useNuxtApp();

	const user = await $butter.page
		.retrieve("*", "john-doe")
		.then(({ data: { data } }) => data)
		.catch((err) => console.log(err));

	useUpdateUser(user);
</script>
