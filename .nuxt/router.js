import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _43736778 = () => interopDefault(import('../pages/success/checkout.vue' /* webpackChunkName: "pages/success/checkout" */))
const _214d3721 = () => interopDefault(import('../pages/success/register.vue' /* webpackChunkName: "pages/success/register" */))
const _15f2afae = () => interopDefault(import('../pages/error/link/expired.vue' /* webpackChunkName: "pages/error/link/expired" */))
const _7c8b8c0a = () => interopDefault(import('../pages/error/link/invalid.vue' /* webpackChunkName: "pages/error/link/invalid" */))
const _30bdd4ab = () => interopDefault(import('../pages/site/_store/index.vue' /* webpackChunkName: "pages/site/_store/index" */))
const _2909889a = () => interopDefault(import('../pages/site/_store/cart/index.vue' /* webpackChunkName: "pages/site/_store/cart/index" */))
const _7863c880 = () => interopDefault(import('../pages/site/_store/checkout/index.vue' /* webpackChunkName: "pages/site/_store/checkout/index" */))
const _6901644c = () => interopDefault(import('../pages/site/_store/userprofile/index.vue' /* webpackChunkName: "pages/site/_store/userprofile/index" */))
const _07b5c746 = () => interopDefault(import('../pages/site/_store/_pid/index.vue' /* webpackChunkName: "pages/site/_store/_pid/index" */))
const _29fdd460 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/success/checkout",
    component: _43736778,
    name: "success-checkout"
  }, {
    path: "/success/register",
    component: _214d3721,
    name: "success-register"
  }, {
    path: "/error/link/expired",
    component: _15f2afae,
    name: "error-link-expired"
  }, {
    path: "/error/link/invalid",
    component: _7c8b8c0a,
    name: "error-link-invalid"
  }, {
    path: "/site/:store",
    component: _30bdd4ab,
    name: "site-store"
  }, {
    path: "/site/:store?/cart",
    component: _2909889a,
    name: "site-store-cart"
  }, {
    path: "/site/:store?/checkout",
    component: _7863c880,
    name: "site-store-checkout"
  }, {
    path: "/site/:store?/userprofile",
    component: _6901644c,
    name: "site-store-userprofile"
  }, {
    path: "/site/:store?/:pid",
    component: _07b5c746,
    name: "site-store-pid"
  }, {
    path: "/",
    component: _29fdd460,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
