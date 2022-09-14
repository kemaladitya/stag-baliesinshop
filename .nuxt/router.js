import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _58fe1124 = () => interopDefault(import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */))
const _6e414435 = () => interopDefault(import('../pages/internal-uat.vue' /* webpackChunkName: "pages/internal-uat" */))
const _6f66be11 = () => interopDefault(import('../pages/play.vue' /* webpackChunkName: "pages/play" */))
const _b5687958 = () => interopDefault(import('../pages/error/link/expired.vue' /* webpackChunkName: "pages/error/link/expired" */))
const _71ff5526 = () => interopDefault(import('../pages/error/link/invalid.vue' /* webpackChunkName: "pages/error/link/invalid" */))
const _4cac2a91 = () => interopDefault(import('../pages/site/confirmation/_store.vue' /* webpackChunkName: "pages/site/confirmation/_store" */))
const _66102d02 = () => interopDefault(import('../pages/success/checkout/_phone.vue' /* webpackChunkName: "pages/success/checkout/_phone" */))
const _90cd07fc = () => interopDefault(import('../pages/success/register/_phone.vue' /* webpackChunkName: "pages/success/register/_phone" */))
const _0d232820 = () => interopDefault(import('../pages/site/_store/index.vue' /* webpackChunkName: "pages/site/_store/index" */))
const _a4b1d376 = () => interopDefault(import('../pages/site/_store/cart/index.vue' /* webpackChunkName: "pages/site/_store/cart/index" */))
const _7e46dbeb = () => interopDefault(import('../pages/site/_store/checkout/index.vue' /* webpackChunkName: "pages/site/_store/checkout/index" */))
const _6a89c6d7 = () => interopDefault(import('../pages/site/_store/draftesd.vue' /* webpackChunkName: "pages/site/_store/draftesd" */))
const _7075c426 = () => interopDefault(import('../pages/site/_store/merchant/index.vue' /* webpackChunkName: "pages/site/_store/merchant/index" */))
const _331f471e = () => interopDefault(import('../pages/site/_store/tok.vue' /* webpackChunkName: "pages/site/_store/tok" */))
const _953bcc62 = () => interopDefault(import('../pages/site/_store/userprofile/index.vue' /* webpackChunkName: "pages/site/_store/userprofile/index" */))
const _e759561e = () => interopDefault(import('../pages/site/_store/_pid/index.vue' /* webpackChunkName: "pages/site/_store/_pid/index" */))
const _20f4fa72 = () => interopDefault(import('../pages/site/_store/_pid/drafted_index.vue' /* webpackChunkName: "pages/site/_store/_pid/drafted_index" */))
const _804f9e76 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/detail",
    component: _58fe1124,
    name: "detail"
  }, {
    path: "/internal-uat",
    component: _6e414435,
    name: "internal-uat"
  }, {
    path: "/play",
    component: _6f66be11,
    name: "play"
  }, {
    path: "/error/link/expired",
    component: _b5687958,
    name: "error-link-expired"
  }, {
    path: "/error/link/invalid",
    component: _71ff5526,
    name: "error-link-invalid"
  }, {
    path: "/site/confirmation/:store?",
    component: _4cac2a91,
    name: "site-confirmation-store"
  }, {
    path: "/success/checkout/:phone?",
    component: _66102d02,
    name: "success-checkout-phone"
  }, {
    path: "/success/register/:phone?",
    component: _90cd07fc,
    name: "success-register-phone"
  }, {
    path: "/site/:store",
    component: _0d232820,
    name: "site-store"
  }, {
    path: "/site/:store?/cart",
    component: _a4b1d376,
    name: "site-store-cart"
  }, {
    path: "/site/:store?/checkout",
    component: _7e46dbeb,
    name: "site-store-checkout"
  }, {
    path: "/site/:store?/draftesd",
    component: _6a89c6d7,
    name: "site-store-draftesd"
  }, {
    path: "/site/:store?/merchant",
    component: _7075c426,
    name: "site-store-merchant"
  }, {
    path: "/site/:store?/tok",
    component: _331f471e,
    name: "site-store-tok"
  }, {
    path: "/site/:store?/userprofile",
    component: _953bcc62,
    name: "site-store-userprofile"
  }, {
    path: "/site/:store?/:pid",
    component: _e759561e,
    name: "site-store-pid"
  }, {
    path: "/site/:store?/:pid/drafted_index",
    component: _20f4fa72,
    name: "site-store-pid-drafted_index"
  }, {
    path: "/",
    component: _804f9e76,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
