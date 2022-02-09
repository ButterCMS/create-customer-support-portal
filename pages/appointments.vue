<template>
	<nuxt-layout name="default">
		<div class="wrapper p-4">
			<header>
				<h1>All appointments</h1>
			</header>

			<section
				v-for="appointment in appointments"
				:key="appointment.meta.id"
				class="flex flex-col gap-4 cont py-4"
			>
				<appointment :appointment="appointment" class="!bg-white" />
			</section>
		</div>
	</nuxt-layout>
</template>

<script setup>
	import Appointment from "~~/components/appointment.vue";
	import { useUser } from "~~/composables/states";

	definePageMeta({
		layout: false,
	});

	const user = useUser();
	const appointments = user.value.fields.appointments;
</script>
