import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["~/styles/globals.css"],
  modules: ["@nuxtjs/tailwindcss"],
  publicRuntimeConfig: {
    ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY:
      process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
  },
});
