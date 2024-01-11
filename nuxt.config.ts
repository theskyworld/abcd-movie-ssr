// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-nocheck
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3010,
  },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "api"),
        },
      },
    },
  },
  css: ["~/assets/styles/index.scss"],
});
