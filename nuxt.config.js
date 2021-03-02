/* eslint-disable nuxt/no-cjs-in-config */
// const pkg = require('./package')
const { baseURL, HOST, SOCKET, PORT } = require('./config/local.config.json')
// const { baseURL, HOST, SOCKET, PORT } = require('./config/config.json')

module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '',
    title: 'balesin - Shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://faq.balesin.id/icon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins&display=swap'
      }
    ],
    script: [
      // {
      //   type: 'module',
      //   src: '/install-pwa-btn.js',
      //   body: true,
      // },
      // {
      //   type: 'module',
      //   src: '/offline.js',
      //   body: true,
      // },
    ]
  },
  /*
   ** Auth
   */
  auth: {
    // redirect: {
    //   callback: '/',
    // },
    // strategies: {
    //   google: {
    //     client_id:
    //       '538793381503-j0mp0othjdboer11qjfoj08hfael049d.apps.googleusercontent.com',
    //   },
    // }
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  workbox: {
    // importScripts: ['custom-sw.js'],
  },

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/workbox',
    '@nuxtjs/manifest',
    // Doc: https://github.com/nuxt/content
    // '@nuxt/content',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  manifest: {
    name: 'balesin - Shop',
    short_name: 'balesin - Shop',
    lang: 'en',
    description: 'balesin chat commerce.',
    start_url: 'https://master.balesin.id',
    background_color: '#ffffdd',
    theme_color: '#ffffdd',
    dir: 'auto',
    display: 'standalone',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon/android-icon-192x192-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '192x192'
      },
      {
        src: '/icon/apple-icon-180x180-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '180x180'
      },
      {
        src: '/icon/apple-icon-152x152-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '152x152'
      },
      {
        src: '/icon/apple-icon-144x144-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '144x144'
      },
      {
        src: '/icon/apple-icon-120x120-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '120x120'
      },
      {
        src: '/icon/apple-icon-114x114-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '114x114'
      },
      {
        src: '/icon/favicon-96x96-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '96x96'
      },
      {
        src: '/icon/apple-icon-76x76-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '76x76'
      },
      {
        src: '/icon/apple-icon-72x72-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '72x72'
      },
      {
        src: '/icon/apple-icon-60x60-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '60x60'
      },
      {
        src: '/icon/apple-icon-57x57-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '57x57'
      },
      {
        src: '/icon/favicon-32x32-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '32x32'
      },
      {
        src: '/icon/favicon-16x16-dunplab-manifest-11523.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    prefer_related_applications: false
  },

  /** Socket.io module configuration
   */
  io: {
    // module options
    // sockets: [
    //   {
    //     name: 'chat',
    //     url: SOCKET,
    //     // url: 'http://0.0.0.0:3326/chat'
    //   },
    // ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},

  loading: false,

  pwa: {
    // meta: {
    //   title: 'My PWA',
    //   author: 'Me',
    // },
    // manifest: {
    //   name: 'Nuxt.js PWAs are so easy',
    //   short_name: 'Nuxt.js PWA',
    //   lang: 'en',
    // }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: [
      // '~/assets/variables.scss',÷
      '~/assets/styles/balesin.scss',
      '~/assets/styles/products.scss',
      '~/assets/styles/product-detail.scss'
    ],
    theme: {
      dark: false,
      themes: {}
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  server: {
    port: PORT, // default: 3000
    host: HOST // default: 0.0.0.0
  }
}
