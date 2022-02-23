import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e3abe158 = () => interopDefault(import('../pages/internal_test.vue' /* webpackChunkName: "pages/internal_test" */))
const _405d54e7 = () => interopDefault(import('../pages/error/link/expired.vue' /* webpackChunkName: "pages/error/link/expired" */))
const _0d10e6b9 = () => interopDefault(import('../pages/error/link/invalid.vue' /* webpackChunkName: "pages/error/link/invalid" */))
const _43dd4868 = () => interopDefault(import('../pages/success/checkout/_phone.vue' /* webpackChunkName: "pages/success/checkout/_phone" */))
const _6e9a2362 = () => interopDefault(import('../pages/success/register/_phone.vue' /* webpackChunkName: "pages/success/register/_phone" */))
const _019f982d = () => interopDefault(import('../pages/site/_store/index.vue' /* webpackChunkName: "pages/site/_store/index" */))
const _5b9fa658 = () => interopDefault(import('../pages/site/_store/cart/index.vue' /* webpackChunkName: "pages/site/_store/cart/index" */))
const _5e832a7e = () => interopDefault(import('../pages/site/_store/checkout/index.vue' /* webpackChunkName: "pages/site/_store/checkout/index" */))
const _affd2700 = () => interopDefault(import('../pages/site/_store/merchant/index.vue' /* webpackChunkName: "pages/site/_store/merchant/index" */))
const _3f5dde5c = () => interopDefault(import('../pages/site/_store/userprofile/index.vue' /* webpackChunkName: "pages/site/_store/userprofile/index" */))
const _3a4be504 = () => interopDefault(import('../pages/site/_store/_pid/index.vue' /* webpackChunkName: "pages/site/_store/_pid/index" */))
const _944ae75c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e3abe158,
    name: "internal_test"
  }, {
    path: "/error/link/expired",
    component: _405d54e7,
    name: "error-link-expired"
  }, {
    path: "/error/link/invalid",
    component: _0d10e6b9,
    name: "error-link-invalid"
  }, {
    path: "/success/checkout/:phone?",
    component: _43dd4868,
    name: "success-checkout-phone"
  }, {
    path: "/success/register/:phone?",
    component: _6e9a2362,
    name: "success-register-phone"
  }, {
    path: "/site/:store",
    component: _019f982d,
    name: "site-store"
  }, {
    path: "/site/:store?/cart",
    component: _5b9fa658,
    name: "site-store-cart"
  }, {
    path: "/site/:store?/checkout",
    component: _5e832a7e,
    name: "site-store-checkout"
  }, {
    path: "/site/:store?/merchant",
    component: _affd2700,
    name: "site-store-merchant"
  }, {
    path: "/site/:store?/userprofile",
    component: _3f5dde5c,
    name: "site-store-userprofile"
  }, {
    path: "/site/:store?/:pid",
    component: _3a4be504,
    name: "site-store-pid"
  }, {
    path: "/",
    component: _944ae75c,
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
