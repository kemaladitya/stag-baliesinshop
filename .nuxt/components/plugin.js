import Vue from 'vue'

const components = {
  General: () => import('../../components/General.js' /* webpackChunkName: "components/general" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c),
  Cart: () => import('../../components/Cart/index.vue' /* webpackChunkName: "components/cart" */).then(c => c.default || c),
  BottomSheetRegLoading: () => import('../../components/Bottom-Sheet/reg_loading.vue' /* webpackChunkName: "components/bottom-sheet-reg-loading" */).then(c => c.default || c),
  Checkout: () => import('../../components/Checkout/index.vue' /* webpackChunkName: "components/checkout" */).then(c => c.default || c),
  FooterCart: () => import('../../components/Footer/cart.vue' /* webpackChunkName: "components/footer-cart" */).then(c => c.default || c),
  FooterCheckout: () => import('../../components/Footer/checkout.vue' /* webpackChunkName: "components/footer-checkout" */).then(c => c.default || c),
  LoadingListProduct: () => import('../../components/Loading/list_product.vue' /* webpackChunkName: "components/loading-list-product" */).then(c => c.default || c),
  ProductDetail: () => import('../../components/Product-Detail/index.vue' /* webpackChunkName: "components/product-detail" */).then(c => c.default || c),
  Products: () => import('../../components/Products/index.vue' /* webpackChunkName: "components/products" */).then(c => c.default || c),
  BottomSheetCartProducts: () => import('../../components/Bottom-Sheet/Cart/products.vue' /* webpackChunkName: "components/bottom-sheet-cart-products" */).then(c => c.default || c),
  BottomSheetCheckoutCourier: () => import('../../components/Bottom-Sheet/Checkout/courier.vue' /* webpackChunkName: "components/bottom-sheet-checkout-courier" */).then(c => c.default || c),
  BottomSheetCheckoutLoading: () => import('../../components/Bottom-Sheet/Checkout/loading.vue' /* webpackChunkName: "components/bottom-sheet-checkout-loading" */).then(c => c.default || c),
  BottomSheetCheckoutPayment: () => import('../../components/Bottom-Sheet/Checkout/payment.vue' /* webpackChunkName: "components/bottom-sheet-checkout-payment" */).then(c => c.default || c),
  BottomSheetCheckoutVoucher: () => import('../../components/Bottom-Sheet/Checkout/voucher.vue' /* webpackChunkName: "components/bottom-sheet-checkout-voucher" */).then(c => c.default || c),
  DialogsCartMaxOrder: () => import('../../components/Dialogs/Cart/max-order.vue' /* webpackChunkName: "components/dialogs-cart-max-order" */).then(c => c.default || c),
  DialogsCartMinOrder: () => import('../../components/Dialogs/Cart/min-order.vue' /* webpackChunkName: "components/dialogs-cart-min-order" */).then(c => c.default || c),
  DialogsCartRemoveConfirm: () => import('../../components/Dialogs/Cart/remove-confirm.vue' /* webpackChunkName: "components/dialogs-cart-remove-confirm" */).then(c => c.default || c),
  DialogsCheckoutInsertVoucherCode: () => import('../../components/Dialogs/Checkout/insert-voucher-code.vue' /* webpackChunkName: "components/dialogs-checkout-insert-voucher-code" */).then(c => c.default || c),
  ProductDetailPlatformsDesktop: () => import('../../components/Product-Detail/Platforms/desktop.vue' /* webpackChunkName: "components/product-detail-platforms-desktop" */).then(c => c.default || c),
  ProductDetailPlatformsMini: () => import('../../components/Product-Detail/Platforms/mini.vue' /* webpackChunkName: "components/product-detail-platforms-mini" */).then(c => c.default || c),
  ProductDetailPlatformsMobile: () => import('../../components/Product-Detail/Platforms/mobile.vue' /* webpackChunkName: "components/product-detail-platforms-mobile" */).then(c => c.default || c),
  ProductsPlatformsDesktop: () => import('../../components/Products/Platforms/desktop.vue' /* webpackChunkName: "components/products-platforms-desktop" */).then(c => c.default || c),
  ProductsPlatformsMini: () => import('../../components/Products/Platforms/mini.vue' /* webpackChunkName: "components/products-platforms-mini" */).then(c => c.default || c),
  ProductsPlatformsMobile: () => import('../../components/Products/Platforms/mobile.vue' /* webpackChunkName: "components/products-platforms-mobile" */).then(c => c.default || c),
  CartPlatformsDesktop: () => import('../../components/Cart/Platforms/desktop/index.vue' /* webpackChunkName: "components/cart-platforms-desktop" */).then(c => c.default || c),
  CartPlatformsDesktopNormal: () => import('../../components/Cart/Platforms/desktop/normal.vue' /* webpackChunkName: "components/cart-platforms-desktop-normal" */).then(c => c.default || c),
  CartPlatformsDesktopRpOrder: () => import('../../components/Cart/Platforms/desktop/rp-order.vue' /* webpackChunkName: "components/cart-platforms-desktop-rp-order" */).then(c => c.default || c),
  CartPlatformsMini: () => import('../../components/Cart/Platforms/mini/index.vue' /* webpackChunkName: "components/cart-platforms-mini" */).then(c => c.default || c),
  CartPlatformsMiniNormal: () => import('../../components/Cart/Platforms/mini/normal.vue' /* webpackChunkName: "components/cart-platforms-mini-normal" */).then(c => c.default || c),
  CartPlatformsMiniRpOrder: () => import('../../components/Cart/Platforms/mini/rp-order.vue' /* webpackChunkName: "components/cart-platforms-mini-rp-order" */).then(c => c.default || c),
  CartPlatformsMobileBundler: () => import('../../components/Cart/Platforms/mobile/bundler.vue' /* webpackChunkName: "components/cart-platforms-mobile-bundler" */).then(c => c.default || c),
  CartPlatformsMobile: () => import('../../components/Cart/Platforms/mobile/index.vue' /* webpackChunkName: "components/cart-platforms-mobile" */).then(c => c.default || c),
  CartPlatformsMobileNormal: () => import('../../components/Cart/Platforms/mobile/normal.vue' /* webpackChunkName: "components/cart-platforms-mobile-normal" */).then(c => c.default || c),
  CartPlatformsMobileRpOrder: () => import('../../components/Cart/Platforms/mobile/rp-order.vue' /* webpackChunkName: "components/cart-platforms-mobile-rp-order" */).then(c => c.default || c),
  CheckoutPlatformsDesktopCustomer: () => import('../../components/Checkout/Platforms/desktop/customer.vue' /* webpackChunkName: "components/checkout-platforms-desktop-customer" */).then(c => c.default || c),
  CheckoutPlatformsDesktop: () => import('../../components/Checkout/Platforms/desktop/index.vue' /* webpackChunkName: "components/checkout-platforms-desktop" */).then(c => c.default || c),
  CheckoutPlatformsDesktopKurir: () => import('../../components/Checkout/Platforms/desktop/kurir.vue' /* webpackChunkName: "components/checkout-platforms-desktop-kurir" */).then(c => c.default || c),
  CheckoutPlatformsDesktopNotes: () => import('../../components/Checkout/Platforms/desktop/notes.vue' /* webpackChunkName: "components/checkout-platforms-desktop-notes" */).then(c => c.default || c),
  CheckoutPlatformsDesktopOrderDetail: () => import('../../components/Checkout/Platforms/desktop/order-detail.vue' /* webpackChunkName: "components/checkout-platforms-desktop-order-detail" */).then(c => c.default || c),
  CheckoutPlatformsDesktopPayment: () => import('../../components/Checkout/Platforms/desktop/payment.vue' /* webpackChunkName: "components/checkout-platforms-desktop-payment" */).then(c => c.default || c),
  CheckoutPlatformsDesktopSubtotal: () => import('../../components/Checkout/Platforms/desktop/subtotal.vue' /* webpackChunkName: "components/checkout-platforms-desktop-subtotal" */).then(c => c.default || c),
  CheckoutPlatformsDesktopVoucher: () => import('../../components/Checkout/Platforms/desktop/voucher.vue' /* webpackChunkName: "components/checkout-platforms-desktop-voucher" */).then(c => c.default || c),
  CheckoutPlatformsMiniCustomer: () => import('../../components/Checkout/Platforms/mini/customer.vue' /* webpackChunkName: "components/checkout-platforms-mini-customer" */).then(c => c.default || c),
  CheckoutPlatformsMini: () => import('../../components/Checkout/Platforms/mini/index.vue' /* webpackChunkName: "components/checkout-platforms-mini" */).then(c => c.default || c),
  CheckoutPlatformsMiniKurir: () => import('../../components/Checkout/Platforms/mini/kurir.vue' /* webpackChunkName: "components/checkout-platforms-mini-kurir" */).then(c => c.default || c),
  CheckoutPlatformsMiniNotes: () => import('../../components/Checkout/Platforms/mini/notes.vue' /* webpackChunkName: "components/checkout-platforms-mini-notes" */).then(c => c.default || c),
  CheckoutPlatformsMiniOrderDetail: () => import('../../components/Checkout/Platforms/mini/order-detail.vue' /* webpackChunkName: "components/checkout-platforms-mini-order-detail" */).then(c => c.default || c),
  CheckoutPlatformsMiniPayment: () => import('../../components/Checkout/Platforms/mini/payment.vue' /* webpackChunkName: "components/checkout-platforms-mini-payment" */).then(c => c.default || c),
  CheckoutPlatformsMiniSubtotal: () => import('../../components/Checkout/Platforms/mini/subtotal.vue' /* webpackChunkName: "components/checkout-platforms-mini-subtotal" */).then(c => c.default || c),
  CheckoutPlatformsMiniVoucher: () => import('../../components/Checkout/Platforms/mini/voucher.vue' /* webpackChunkName: "components/checkout-platforms-mini-voucher" */).then(c => c.default || c),
  CheckoutPlatformsMobileCustomer: () => import('../../components/Checkout/Platforms/mobile/customer.vue' /* webpackChunkName: "components/checkout-platforms-mobile-customer" */).then(c => c.default || c),
  CheckoutPlatformsMobile: () => import('../../components/Checkout/Platforms/mobile/index.vue' /* webpackChunkName: "components/checkout-platforms-mobile" */).then(c => c.default || c),
  CheckoutPlatformsMobileKurir: () => import('../../components/Checkout/Platforms/mobile/kurir.vue' /* webpackChunkName: "components/checkout-platforms-mobile-kurir" */).then(c => c.default || c),
  CheckoutPlatformsMobileNotes: () => import('../../components/Checkout/Platforms/mobile/notes.vue' /* webpackChunkName: "components/checkout-platforms-mobile-notes" */).then(c => c.default || c),
  CheckoutPlatformsMobileOrderDetail: () => import('../../components/Checkout/Platforms/mobile/order-detail.vue' /* webpackChunkName: "components/checkout-platforms-mobile-order-detail" */).then(c => c.default || c),
  CheckoutPlatformsMobilePayment: () => import('../../components/Checkout/Platforms/mobile/payment.vue' /* webpackChunkName: "components/checkout-platforms-mobile-payment" */).then(c => c.default || c),
  CheckoutPlatformsMobileSubtotal: () => import('../../components/Checkout/Platforms/mobile/subtotal.vue' /* webpackChunkName: "components/checkout-platforms-mobile-subtotal" */).then(c => c.default || c),
  CheckoutPlatformsMobileVoucher: () => import('../../components/Checkout/Platforms/mobile/voucher.vue' /* webpackChunkName: "components/checkout-platforms-mobile-voucher" */).then(c => c.default || c),
  CheckoutPlatformsDesktopOrdersNormal: () => import('../../components/Checkout/Platforms/desktop/orders/normal.vue' /* webpackChunkName: "components/checkout-platforms-desktop-orders-normal" */).then(c => c.default || c),
  CheckoutPlatformsDesktopOrdersSubscription: () => import('../../components/Checkout/Platforms/desktop/orders/subscription.vue' /* webpackChunkName: "components/checkout-platforms-desktop-orders-subscription" */).then(c => c.default || c),
  CheckoutPlatformsMiniOrdersNormal: () => import('../../components/Checkout/Platforms/mini/orders/normal.vue' /* webpackChunkName: "components/checkout-platforms-mini-orders-normal" */).then(c => c.default || c),
  CheckoutPlatformsMiniOrdersSubscription: () => import('../../components/Checkout/Platforms/mini/orders/subscription.vue' /* webpackChunkName: "components/checkout-platforms-mini-orders-subscription" */).then(c => c.default || c),
  CheckoutPlatformsMobileOrdersBundler: () => import('../../components/Checkout/Platforms/mobile/orders/bundler.vue' /* webpackChunkName: "components/checkout-platforms-mobile-orders-bundler" */).then(c => c.default || c),
  CheckoutPlatformsMobileOrdersNormal: () => import('../../components/Checkout/Platforms/mobile/orders/normal.vue' /* webpackChunkName: "components/checkout-platforms-mobile-orders-normal" */).then(c => c.default || c),
  CheckoutPlatformsMobileOrdersSubscription: () => import('../../components/Checkout/Platforms/mobile/orders/subscription.vue' /* webpackChunkName: "components/checkout-platforms-mobile-orders-subscription" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
