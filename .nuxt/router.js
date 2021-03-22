import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _06441552 = () => interopDefault(import('../pages/success/checkout.vue' /* webpackChunkName: "pages/success/checkout" */))
const _3fe4e034 = () => interopDefault(import('../pages/success/register.vue' /* webpackChunkName: "pages/success/register" */))
const _674f4f08 = () => interopDefault(import('../pages/error/link/expired.vue' /* webpackChunkName: "pages/error/link/expired" */))
const _cde82b64 = () => interopDefault(import('../pages/error/link/invalid.vue' /* webpackChunkName: "pages/error/link/invalid" */))
const _35c96410 = () => interopDefault(import('../pages/site/_store/index.vue' /* webpackChunkName: "pages/site/_store/index" */))
const _b6d65126 = () => interopDefault(import('../pages/site/_store/cart/index.vue' /* webpackChunkName: "pages/site/_store/cart/index" */))
const _4ec06dda = () => interopDefault(import('../pages/site/_store/checkout/index.vue' /* webpackChunkName: "pages/site/_store/checkout/index" */))
const _f04f88b2 = () => interopDefault(import('../pages/site/_store/userprofile/index.vue' /* webpackChunkName: "pages/site/_store/userprofile/index" */))
const _f97dd3ce = () => interopDefault(import('../pages/site/_store/_pid/index.vue' /* webpackChunkName: "pages/site/_store/_pid/index" */))
const _6d385a9d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _06441552,
    name: "success-checkout"
  }, {
    path: "/success/register",
    component: _3fe4e034,
    name: "success-register"
  }, {
    path: "/error/link/expired",
    component: _674f4f08,
    name: "error-link-expired"
  }, {
    path: "/error/link/invalid",
    component: _cde82b64,
    name: "error-link-invalid"
  }, {
    path: "/site/:store",
    component: _35c96410,
    name: "site-store"
  }, {
    path: "/site/:store?/cart",
    component: _b6d65126,
    name: "site-store-cart"
  }, {
    path: "/site/:store?/checkout",
    component: _4ec06dda,
    name: "site-store-checkout"
  }, {
    path: "/site/:store?/userprofile",
    component: _f04f88b2,
    name: "site-store-userprofile"
  }, {
    path: "/site/:store?/:pid",
    component: _f97dd3ce,
    name: "site-store-pid"
  }, {
    path: "/",
    component: _6d385a9d,
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
