<template>
	<nuxt-layout name="default">
		<div class="wrapper p-4">
			<header>
				<h1>Personal Information</h1>
			</header>

			<section class="py-4">
				<header class="mb-2">
					<h2 class="font-bold text-3xl">{{ patient.name }}</h2>
				</header>

				<form action="" class="site-form">
					<div class="wrapper form-wrapper">
						<div class="form-group">
							<div class="form-control">
								<label for="first-name">First Name</label>
								<input
									type="text"
									name="first-name"
									id="first-name"
									v-model="patient.fields.first_name"
									class="form-input"
									required
								/>
							</div>
							<div class="form-control">
								<label for="last-name">Last Name</label>
								<input
									type="text"
									name="last-name"
									id="last-name"
									v-model="patient.fields.last_name"
									class="form-input"
									required
								/>
							</div>
						</div>
						<div class="form-group">
							<div class="form-control">
								<label for="age">Age</label>
								<input
									type="number"
									name="age"
									id="age"
									v-model="patient.fields.health_information.age"
									class="form-input"
									required
								/>
							</div>
							<div class="form-control">
								<label for="dob">Date of Birth</label>
								<input
									type="date"
									name="dob"
									id="dob"
									v-model="patientDOB"
									class="form-input"
									required
								/>
							</div>
						</div>
						<div class="form-control">
							<label for="weight">Weight in KG</label>
							<input
								type="number"
								name="weight"
								id="weight"
								v-model="patient.fields.health_information.weight_in_kg"
								class="form-input"
								required
							/>
						</div>
						<div class="form-group">
							<div
								v-for="(value, name) in patient.fields.health_information
									.medical_condition[0]"
								class="form-control form-check-control"
							>
								<label :for="name" class="capitalize">
									{{ name.replace("_", " ") }}
								</label>
								<input
									type="checkbox"
									:name="name"
									:id="name"
									:checked="value"
									v-model="
										patient.fields.health_information.medical_condition[0][name]
									"
									class="form-input form-checkbox"
								/>
							</div>
						</div>
						<div class="form-control">
							<label for="other">Other medical condition</label>
							<input
								type="text"
								name="other"
								id="other"
								v-model="
									patient.fields.health_information.other_medical_condition
								"
								class="form-input"
							/>
						</div>

						<div class="form-control">
							<label for="allergies">Allergies</label>
							<input
								type="text"
								name="allergies"
								id="allergies"
								v-model="patient.fields.health_information.allergies"
								class="form-input"
								required
							/>
						</div>
					</div>

					<div class="action-cont py-4">
						<button class="cta">Update patient data</button>
					</div>
				</form>
			</section>
		</div>
	</nuxt-layout>
</template>

<script setup lang="ts">
	import { useUser } from "~~/composables/states";

	definePageMeta({
		layout: false,
	});

	const patient = useUser();

	const patientDOB = ref(
		new Date(new Date(patient.value.fields.health_information.dob).setHours(1))
			.toISOString()
			.substring(0, 10)
	);

	patient.value.fields.health_information.dob = computed(() => {
		return new Date(patientDOB.value).toISOString();
	});
</script>
