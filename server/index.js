'use strict'

const { Nuxt, Builder } = require("nuxt")
const { host, port }    = require('../config.json')

const express    = require("express")
const app        = express()
const path       = require("path")
const cors       = require("cors")
const consola    = require("consola")
const main       = require("./controllers")
const config     = require(path.resolve(__dirname, "../nuxt.config.js"))

config.dev = process.env.NODE_ENV !== "production"

async function start() {
  const nuxt           = new Nuxt(config)
  const bodyParser     = require("body-parser")

  if (config.dev) {
    const builder = new Builder(nuxt)

    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(cors())
  app.use(express.json({ limit: "100mb" }))
  app.use(express.urlencoded({ extended: false, limit: "100mb" }))
  app.use(bodyParser.json({ limit: "100mb" }))
  app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }))

  // * router
  app.use("/api"               , main.general)
  app.use("/cart"              , main.cart.manage)
  app.use("/cache"             , main.cart.cache)
  app.use("/manage/cart"       , main.cart.bot)
  app.use("/reorder"           , main.order.reorder)
  app.use("/voucher/apply"     , main.voucher.apply)
  app.use("/voucher/remove"    , main.voucher.remmove)
  app.use("/transaction/order" , main.order.create)
  app.use("/product/search"    , main.product.product_search)
  app.use("/mailer"            , main.mailer.send)
  app.use("/referral"          , main.referral.execute_event)
  app.use("/callback/payment"  , main.callback.payment);

  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge  : true,
  })
}

start()