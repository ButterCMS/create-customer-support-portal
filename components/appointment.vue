<template>
	<article class="border bg-gray-50 rounded-md">
		<div class="wrapper p-4">
			<header class="pb-2">
				<div class="wrapper">
					<h3 class="font-semibold text-2xl">{{ appointment.title }}</h3>
					<p>{{ appointment.description }}</p>
				</div>
			</header>

			<ul class="details">
				<li class="pt-2">
					<header class="label">
						<hero-icon name="user" class="text-cyan-600 w-5 h-5" />
						<h4 class="">Doctor</h4>
					</header>
					<p class="">{{ doctor.name }}</p>
				</li>
				<li class="pt-2">
					<header class="label">
						<hero-icon name="clock" class="text-cyan-600 w-5 h-5" />
						<h4 class="">Scheduled</h4>
					</header>
					<p class="">
						{{ new Date(appointment.scheduled).toDateString() }} |
						{{ new Date(appointment.scheduled).toTimeString() }}
					</p>
				</li>
			</ul>
		</div>
	</article>
</template>

<script setup>
	const props = defineProps({
		appointment: Object,
	});

	const { $butter } = useNuxtApp();
	const docRoute = props.appointment.doctor;

	const doctorSlug = computed(() => {
		let array = props.appointment.doctor.split("/").slice(0, -1);
		return array[array.length - 1];
	});

	const doctor = await $butter.page
		.retrieve("*", doctorSlug.value)
		.then(({ data: { data } }) => data)
		.catch((err) => console.log(err));
	// const doctor = $butter.
</script>
