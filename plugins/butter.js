import { defineNuxtPlugin } from "#app";
import Butter from "buttercms";

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	return {
		provide: {
			butter: Butter("ca035fa7f94b2a7f568d3c3f6568bd3b17b94dae"),
		},
	};
});
