import { defineNuxtConfig, NuxtConfig } from "nuxt3";
import { Builder, NuxtOptions } from "nuxt";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import postcssNested from "postcss-nested";
import { generateEnterspeedSitemap } from "./enterspeed-sitemap";

export default defineNuxtConfig({
  meta: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  target: "server",
  publicRuntimeConfig: {
    ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY:
      process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
    DELIVERY_API_PATH: process.env.DELIVERY_API_PATH,
  },
  typescript: {
    strict: true,
  },
  loading: { color: "#0B0F89", throttle: 200 },
  css: ["assets/css/master.css"],
  buildModules: ["@pinia/nuxt", "@nuxtjs/sitemap"],
  build: {
    extractCSS: true,
    optimizeCSS: true,
  },
  pageTransition: {
    name: "home",
    mode: "out-in",
  },
  router: {
    trailingSlash: true,
  },
  hooks: {
    "build:before": () => {
      generateEnterspeedSitemap();
    },
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssImport(),
          postcssPresetEnv({
            stage: 2,
            preserve: false,
            importFrom: [
              "assets/css/_variables.css",
              "assets/css/_mediaqueries.css",
            ],
            autoprefixer: {
              grid: false,
              add: true,
            },
            features: {
              "color-mod-function": { unresolved: "warn" },
              "custom-media-queries": {},
              "double-position-gradients": false,
            },
            browsers: [">= 5% in DK", "ie 11"],
          }),
          postcssNested(),
        ],
      },
    },
  },
});
