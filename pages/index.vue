<template>
	<nuxt-layout name="default">
		<div class="wrapper p-4">
			<header>
				<div class="wrapper">
					<h2 class="font-bold text-3xl">Hey, John Doe</h2>
				</div>
			</header>

			<section class="py-4">
				<div class="wrapper bg-white rounded-lg">
					<header class="p-4 border-b border-b-gray-200">
						<h3 class="font-semibold text-xl">Your appointments</h3>
					</header>

					<ul class="flex flex-col gap-4 cont p-4">
						<li v-for="appointment in appointments" :key="appointment.meta.id">
							<appointment :appointment="appointment" />
						</li>
					</ul>
				</div>
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
