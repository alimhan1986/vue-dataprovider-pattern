// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
});
