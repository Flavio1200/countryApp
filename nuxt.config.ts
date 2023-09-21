// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      title: 'Country App',
      meta: [{name: 'description',content:'Web app about information of every country and territory'}],
      link: [{rel: 'stylesheet',href:'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300&display=swap'}]
    }
  }
})
