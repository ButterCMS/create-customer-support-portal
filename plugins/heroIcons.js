import search from "~/assets/svg/heroicons/outline/search.svg?raw";
import bell from "~/assets/svg/heroicons/outline/bell.svg?raw";
import informationCircle from "~/assets/svg/heroicons/outline/information-circle.svg?raw";
import x from "~/assets/svg/heroicons/outline/x.svg?raw";
import user from "~/assets/svg/heroicons/outline/user.svg?raw";
import clock from "~/assets/svg/heroicons/outline/clock.svg?raw";
import menuAlt4 from "~/assets/svg/heroicons/outline/menu-alt-4.svg?raw";

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
				user,
				clock,
				menuAlt4,
			},
		},
	};
});
