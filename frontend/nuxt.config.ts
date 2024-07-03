// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@pinia/nuxt'],
  devServer: {
    port: 3005,
  },
  typescript: {
    typeCheck: true,
  },
  imports: {
    dirs: ['composables', 'composables/*/index.{ts, js, mjs, mts}', 'composables/**'],
  },
});
