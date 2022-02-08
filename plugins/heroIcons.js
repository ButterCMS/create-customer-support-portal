import search from "~/assets/svg/heroicons/outline/search.svg?raw";
import bell from "~/assets/svg/heroicons/outline/bell.svg?raw";
import informationCircle from "~/assets/svg/heroicons/outline/information-circle.svg?raw";
import x from "~/assets/svg/heroicons/outline/x.svg?raw";

// const heroIcons = {
// 	search,
// };

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
	return {
		provide: {
			heroIcons: {
				search,
				bell,
				informationCircle,
				x,
			},
		},
	};
});
