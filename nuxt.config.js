/* eslint-disable nuxt/no-cjs-in-config */
// const pkg = require("./package")

const { base, host, port } = require("./config.json");

module.exports = {
  mode: "universal",

  target: "server",

  head: {
    titleTemplate: "",
    title: "balesin - shop",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { "http-equiv": "cache-control", content: "no-cache" },
      { name: "google", content: "notranslate" },
      {
        hid: "description",
        name: "description",
        content:
          "Chat Commerce di WhatsApp yang dapat membantu bisnis untuk berjualan lebih efektif ",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/icon.png",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:100,300,400,600,700,900&display=swap",
      },
    ],
    script: [],
  },

  auth: {},

  css: [],

  plugins: [],

  workbox: {},

  components: true,

  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/vuetify", "@nuxtjs/device"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/workbox",
    "@nuxtjs/manifest",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
        ],
      },
    ],
  ],

  manifest: {
    name: "balesin - Shop",
    short_name: "balesin - Shop",
    lang: "en",
    description: "balesin chat commerce.",
    start_url: "/",
    background_color: "#ffffdd",
    theme_color: "#000",
    dir: "auto",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src:
          "https://faq.balesin.id/icon/android-icon-192x192-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-180x180-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "180x180",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-152x152-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "152x152",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-144x144-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "144x144",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-120x120-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "120x120",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-114x114-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "114x114",
      },
      {
        src:
          "https://faq.balesin.id/icon/favicon-96x96-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-76x76-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "76x76",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-72x72-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "72x72",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-60x60-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "60x60",
      },
      {
        src:
          "https://faq.balesin.id/icon/apple-icon-57x57-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "57x57",
      },
      {
        src:
          "https://faq.balesin.id/icon/favicon-32x32-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        src:
          "https://faq.balesin.id/icon/favicon-16x16-dunplab-manifest-11523.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    prefer_related_applications: false,
  },

  axios: { baseURL: base },

  content: {},

  loading: false,

  pwa: {
    meta: {
      title: "Balesin - Shop",
      author: "balesin.id",
    },
    manifest: {
      name: "balesin - Shop",
      short_name: "balesin - Shop",
      lang: "en",
      description: "balesin chat commerce.",
      start_url: base,
      background_color: "#ffffdd",
      theme_color: "#ffffdd",
      dir: "auto",
      display: "standalone",
      orientation: "portrait",
      icons: [
        {
          src: "https://faq.balesin.id/icon/icon-256x256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "https://faq.balesin.id/icon/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "https://faq.balesin.id/icon/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src:
            "https://faq.balesin.id/icon/android-icon-192x192-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-180x180-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "180x180",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-152x152-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "152x152",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-144x144-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "144x144",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-120x120-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "120x120",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-114x114-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "114x114",
        },
        {
          src:
            "https://faq.balesin.id/icon/favicon-96x96-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-76x76-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "76x76",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-72x72-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "72x72",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-60x60-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "60x60",
        },
        {
          src:
            "https://faq.balesin.id/icon/apple-icon-57x57-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "57x57",
        },
        {
          src:
            "https://faq.balesin.id/icon/favicon-32x32-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          src:
            "https://faq.balesin.id/icon/favicon-16x16-dunplab-manifest-11523.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          src: "https://faq.balesin.id/icon/icon-384x384.png",
          sizes: "64x64",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "https://faq.balesin.id/icon/icon-384x384.png",
          sizes: "120x120",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "https://faq.balesin.id/icon/icon-384x384.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "https://faq.balesin.id/icon/icon-384x384.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "https://faq.balesin.id/icon/icon-384x384.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "https://faq.balesin.id/icon/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "https://faq.balesin.id/icon/icon-384x384.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
      prefer_related_applications: false,
    },
  },

  vuetify: {
    customVariables: [
      "~/assets/styles/global.scss",
      "~/assets/styles/balesin.scss",
      "~/assets/styles/products.scss",
      "~/assets/styles/product-detail.scss",
    ],
    theme: { dark: false, themes: {} },
  },

  build: {
    friendlyErrors: false,
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]],
    },
  },

  server: { port: port, host: host },
};
