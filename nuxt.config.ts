// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-nocheck
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3010,
  },
  css: ["~/assets/styles/index.scss"],
});
