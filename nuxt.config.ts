import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	buildModules: ["nuxt-windicss"],
	privateRuntimeConfig: {
    API_TOKEN: process.env.BUTTER_API_TOKEN
  }
});
