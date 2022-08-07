import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36e446e3 = () => interopDefault(import('../pages/internal-uat.vue' /* webpackChunkName: "pages/internal-uat" */))
const _2ebce8fc = () => interopDefault(import('../pages/error/link/expired.vue' /* webpackChunkName: "pages/error/link/expired" */))
const _9555c558 = () => interopDefault(import('../pages/error/link/invalid.vue' /* webpackChunkName: "pages/error/link/invalid" */))
const _5bea983f = () => interopDefault(import('../pages/site/confirmation/_store.vue' /* webpackChunkName: "pages/site/confirmation/_store" */))
const _2303e3de = () => interopDefault(import('../pages/success/checkout/_phone.vue' /* webpackChunkName: "pages/success/checkout/_phone" */))
const _4dc0bed8 = () => interopDefault(import('../pages/success/register/_phone.vue' /* webpackChunkName: "pages/success/register/_phone" */))
const _7606bb9c = () => interopDefault(import('../pages/site/_store/index.vue' /* webpackChunkName: "pages/site/_store/index" */))
const _43611773 = () => interopDefault(import('../pages/site/_store/cart/index.vue' /* webpackChunkName: "pages/site/_store/cart/index" */))
const _90bed3ce = () => interopDefault(import('../pages/site/_store/checkout/index.vue' /* webpackChunkName: "pages/site/_store/checkout/index" */))
const _011ed81b = () => interopDefault(import('../pages/site/_store/merchant/index.vue' /* webpackChunkName: "pages/site/_store/merchant/index" */))
const _b3e9ee3e = () => interopDefault(import('../pages/site/_store/userprofile/index.vue' /* webpackChunkName: "pages/site/_store/userprofile/index" */))
const _220d561f = () => interopDefault(import('../pages/site/_store/_pid/index.vue' /* webpackChunkName: "pages/site/_store/_pid/index" */))
const _731ab5d7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/internal-uat",
    component: _36e446e3,
    name: "internal-uat"
  }, {
    path: "/error/link/expired",
    component: _2ebce8fc,
    name: "error-link-expired"
  }, {
    path: "/error/link/invalid",
    component: _9555c558,
    name: "error-link-invalid"
  }, {
    path: "/site/confirmation/:store?",
    component: _5bea983f,
    name: "site-confirmation-store"
  }, {
    path: "/success/checkout/:phone?",
    component: _2303e3de,
    name: "success-checkout-phone"
  }, {
    path: "/success/register/:phone?",
    component: _4dc0bed8,
    name: "success-register-phone"
  }, {
    path: "/site/:store",
    component: _7606bb9c,
    name: "site-store"
  }, {
    path: "/site/:store?/cart",
    component: _43611773,
    name: "site-store-cart"
  }, {
    path: "/site/:store?/checkout",
    component: _90bed3ce,
    name: "site-store-checkout"
  }, {
    path: "/site/:store?/merchant",
    component: _011ed81b,
    name: "site-store-merchant"
  }, {
    path: "/site/:store?/userprofile",
    component: _b3e9ee3e,
    name: "site-store-userprofile"
  }, {
    path: "/site/:store?/:pid",
    component: _220d561f,
    name: "site-store-pid"
  }, {
    path: "/",
    component: _731ab5d7,
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
