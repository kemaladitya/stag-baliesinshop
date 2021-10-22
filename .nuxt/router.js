import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3bff402e = () => interopDefault(import('../pages/internal_test.vue' /* webpackChunkName: "pages/internal_test" */))
const _643b1972 = () => interopDefault(import('../pages/error/link/expired.vue' /* webpackChunkName: "pages/error/link/expired" */))
const _30eeab44 = () => interopDefault(import('../pages/error/link/invalid.vue' /* webpackChunkName: "pages/error/link/invalid" */))
const _014093be = () => interopDefault(import('../pages/success/checkout/_phone.vue' /* webpackChunkName: "pages/success/checkout/_phone" */))
const _2bfd6eb8 = () => interopDefault(import('../pages/success/register/_phone.vue' /* webpackChunkName: "pages/success/register/_phone" */))
const _2bfcd37c = () => interopDefault(import('../pages/site/_store/index.vue' /* webpackChunkName: "pages/site/_store/index" */))
const _1aa22d63 = () => interopDefault(import('../pages/site/_store/cart/index.vue' /* webpackChunkName: "pages/site/_store/cart/index" */))
const _3b853409 = () => interopDefault(import('../pages/site/_store/checkout/index.vue' /* webpackChunkName: "pages/site/_store/checkout/index" */))
const _f5f913ea = () => interopDefault(import('../pages/site/_store/merchant/index.vue' /* webpackChunkName: "pages/site/_store/merchant/index" */))
const _2f7264f1 = () => interopDefault(import('../pages/site/_store/userprofile/index.vue' /* webpackChunkName: "pages/site/_store/userprofile/index" */))
const _4fe268fe = () => interopDefault(import('../pages/site/_store/cart/backup.vue' /* webpackChunkName: "pages/site/_store/cart/backup" */))
const _58e6ccca = () => interopDefault(import('../pages/site/_store/checkout/backup.vue' /* webpackChunkName: "pages/site/_store/checkout/backup" */))
const _0d6327e2 = () => interopDefault(import('../pages/site/_store/_pid/index.vue' /* webpackChunkName: "pages/site/_store/_pid/index" */))
const _416141e7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/internal_test",
    component: _3bff402e,
    name: "internal_test"
  }, {
    path: "/error/link/expired",
    component: _643b1972,
    name: "error-link-expired"
  }, {
    path: "/error/link/invalid",
    component: _30eeab44,
    name: "error-link-invalid"
  }, {
    path: "/success/checkout/:phone?",
    component: _014093be,
    name: "success-checkout-phone"
  }, {
    path: "/success/register/:phone?",
    component: _2bfd6eb8,
    name: "success-register-phone"
  }, {
    path: "/site/:store",
    component: _2bfcd37c,
    name: "site-store"
  }, {
    path: "/site/:store?/cart",
    component: _1aa22d63,
    name: "site-store-cart"
  }, {
    path: "/site/:store?/checkout",
    component: _3b853409,
    name: "site-store-checkout"
  }, {
    path: "/site/:store?/merchant",
    component: _f5f913ea,
    name: "site-store-merchant"
  }, {
    path: "/site/:store?/userprofile",
    component: _2f7264f1,
    name: "site-store-userprofile"
  }, {
    path: "/site/:store?/cart/backup",
    component: _4fe268fe,
    name: "site-store-cart-backup"
  }, {
    path: "/site/:store?/checkout/backup",
    component: _58e6ccca,
    name: "site-store-checkout-backup"
  }, {
    path: "/site/:store?/:pid",
    component: _0d6327e2,
    name: "site-store-pid"
  }, {
    path: "/",
    component: _416141e7,
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
