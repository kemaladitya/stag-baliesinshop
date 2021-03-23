/* eslint-disable require-await */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable no-prototype-builtins */

const { Nuxt, Builder } = require('nuxt')
// const { API_KEY, SHOP_API, REDIS_CONFIG } = require('../config/local.config.json')
const { API_KEY, SHOP_API, REDIS_CONFIG, ADONIS } = require('../config/config.json')
const express = require('express')
const consola = require('consola')
const webPush = require('web-push')
const app     = express()
const path    = require('path')
const cors    = require('cors')
const axios   = require('axios')
const Cart    = require('../middleware/cart')
const config  = require(path.resolve(__dirname, '../nuxt.config.js'))
const priv_k  = 'XzKL0pU0EX3lCP5E1GrwnLxM5D4R2S5LfTlgYTmHRIs'
const pub_k   =
  'BE69JI3gO0JyQd-vHazu1zHNSZjqvHZzVQlKK5j0vMSsh2rCIknqdarnhBZhU8pYmEHpYZR5vDzu8xRL9jlU1j4'
const asyncRedis = require('async-redis')
const client = asyncRedis.createClient(REDIS_CONFIG)

client.on('error', err => {
  // console.log('Error ' + err)
})

config.dev    = process.env.NODE_ENV !== 'production'

webPush.setVapidDetails('mailto:test@example.com', pub_k, priv_k)

async function product_search({ url, headers, method, body, _qs, params }, res) {
  try {
    console.log({
      url: SHOP_API + '/product/search',
      method: method.toLowerCase(),
      headers: {
        'x-api-key': API_KEY,
        // token: headers.token,
      },
      data: body,
    })
    const request = await axios({
      url: SHOP_API + '/product/search',
      method: method.toLowerCase(),
      headers: {
        'x-api-key': API_KEY,
        // token: headers.token,
      },
      data: body,
    })

    return res.json(
      request.data.hasOwnProperty('data') ? request.data.data : request.data
    )
  } catch (error) {
    return res.status(404).json({
      status: false,
      error,
    })
  }
}

async function cache({ url, headers, method, body, _qs, params }, res) {
  try {
    const {
      store_name,
      // source,
      method,
      uuid,
      detail
    } = body
    let middleware = true
    // console.log(JSON.stringify(body, null, 2), ' body')

    // console.log(JSON.stringify(body, null, 2))
    if (method != 'last_order') {
      middleware = Cart[method](body)
    }

    // console.log(middleware)

    if (middleware) {
      console.log(method, 'method')
      if (method === 'last_order') {
        const get_redis = await client.get(`${uuid}/${store_name}/last_order`)

        return res.json({ status: true, results: JSON.parse(get_redis) })
      }

      if (method === 'set') {
        await client.set(`${uuid}/${store_name}`, JSON.stringify(detail))

        return res.json({ status: true })
      }

      if (method === 'get') {
        const get_redis = await client.get(`${uuid}/${store_name}`)

        return res.json({ status: true, results: JSON.parse(get_redis) })
      }
    }

    return res.status(404).json({ status: true, message: 'format cart is not valid!' })
  } catch (error) {
    return res.status(404).json({
      status: false,
      error,
    })
  }
}

async function order_hanlder({ url, headers, method, body, _qs, params }, res) {
  try {
    let get_redis = await client.get(`${body.customer.uuid}/${body.store.bot_name}`)

    get_redis = JSON.parse(get_redis)

    if (get_redis.type == 'single-order') {
      body.order.items = {}
      body.order.items.type = 'single-order'

      const list_items = [{
        delivery_date: get_redis.items[0].delivery_date,
        delivery_time: get_redis.items[0].delivery_time,
        items: []
      }]

      get_redis.items.forEach(item => {
        list_items[0].items.push({
          id: item.items[0].id,
          name: item.items[0].name,
          qty: item.items[0].qty,
          SKU: item.items[0].SKU,
          variant: item.items[0].variant
        })
      })

      body.order.items.items = list_items
    } else if (get_redis.type == 'rp-order') {
      // console.log('kesini kan')
      body.order.items = get_redis
    }

    const request = await axios({
      url: SHOP_API + '/dev/order',
      method: method.toLowerCase(),
      headers: {
        'x-api-key': API_KEY,
        // token: headers.token,
      },
      data: body,
    })

    await client.set(`${body.customer.uuid}/${body.store.bot_name}/last_order`, JSON.stringify(get_redis))
    await client.del(`${body.customer.uuid}/${body.store.bot_name}/explink`)
    await client.del(`${body.customer.uuid}/${body.store.bot_name}`)

    return res.json(
      request.data.hasOwnProperty('data') ? request.data.data : request.data
    )
  } catch (error) {
    return res.status(404).json({
      status: false,
      error,
    })
  }
}

async function apply_voucher_hanlder({ url, headers, method, body, _qs, params }, res) {
  try {
    let get_redis = await client.get(`${body.uuid}/${body.bot_name}`)

    get_redis = JSON.parse(get_redis)

    if (get_redis.type == 'single-order') {
      body.items = {}
      body.items.type = 'single-order'

      const list_items = [{
        delivery_date: get_redis.items[0].delivery_date,
        delivery_time: get_redis.items[0].delivery_time,
        items: []
      }]

      get_redis.items.forEach(item => {
        list_items[0].items.push({
          id: item.items[0].id,
          name: item.items[0].name,
          qty: item.items[0].qty,
          SKU: item.items[0].SKU,
          variant: item.items[0].variant
        })
      })

      body.items.items = list_items
    } else if (get_redis.type == 'rp-order') {
      // console.log('kesini kan')
      body.items = get_redis
    }

    const request = await axios({
      url: SHOP_API + '/dev/voucher/apply',
      method: method.toLowerCase(),
      headers: {
        'x-api-key': API_KEY,
        // token: headers.token,
      },
      data: body,
    })

    get_redis.used_voucher = body.voucher_code

    await client.set(`${body.uuid}/${body.bot_name}`, JSON.stringify(get_redis))

    return res.json(
      request.data.hasOwnProperty('data') ? request.data.data : request.data
    )
  } catch (error) {
    return res.status(404).json({
      status: false,
      error,
    })
  }
}

async function delivery_cost_check_hanlder({ url, headers, method, body, _qs, params }, res) {
  try {
    let get_redis = await client.get(`${body.uuid}/${body.store_name}`)

    // console.log('kesini kan')
    body.items = get_redis

    const request = await axios({
      url: SHOP_API + '/dev/deliverycost/check',
      method: method.toLowerCase(),
      headers: {
        'x-api-key': API_KEY,
        // token: headers.token,
      },
      data: body,
    })

    return res.json(
      request.data.hasOwnProperty('data') ? request.data.data : request.data
    )
  } catch (error) {
    return res.status(404).json({
      status: false,
      error,
    })
  }
}

async function manage_cart_from_bot(req, res) {
  try {
    const { bot_id, chatkey, sku, method, region } = req.body
    const request = await axios({
      url   : `${ADONIS}/shop/cart/info`,
      method: 'post',
      data  : { bot_id, sku, region }
    })
    const get_redis = await client.get(`${chatkey}/${request.data.bot_name}`)
    const date = new Date()

    date.setHours(date.getHours() + 7)
    date.setDate(date.getDate() + 1)

    const delivery_date = date.toISOString().slice(0, 10)

    console.log(request.data, ' request.data')

    if (!get_redis) {
      const payload = {
        type  :"single-order",
        items :[
          {
            delivery_date,
            items: [
              {
                id       : request.data.product.id,
                qty      : 1,
                price    : request.data.product.price,
                SKU      : sku,
                name     : request.data.product.name,
                variant  : request.data.product.variant
              }
            ]
          }
        ]
      }

      await client.set(`${chatkey}/${request.data.bot_name}`, JSON.stringify(payload))
    } else {
      let payload = JSON.parse(get_redis)
      console.log(JSON.stringify(payload, null, 2))

      if (!payload.items.length) {
        payload.items.push({
          delivery_date,
          items: []
        })
      }

      const is_exist_item = payload.items[0].items.filter(el => el.SKU == sku)

      if (is_exist_item.length) {
        payload.items[0].items = payload.items[0].items.map(el => {
          if (el.SKU == sku) {
            el.qty += 1
          }

          return el
        })
      } else {
        console.log({
          id       : request.data.product.id,
          qty      : 1,
          price    : request.data.product.price,
          SKU      : sku,
          name     : request.data.product.name,
          variant  : request.data.product.variant
        }, ' push')
        payload.items[0].items.push({
          id       : request.data.product.id,
          qty      : 1,
          price    : request.data.product.price,
          SKU      : sku,
          name     : request.data.product.name,
          variant  : request.data.product.variant
        })
      }

      await client.set(`${chatkey}/${request.data.bot_name}`, JSON.stringify(payload))
    }
    const response = await client.get(`${chatkey}/${request.data.bot_name}`)

    return res.json(JSON.parse(response))
  } catch (error) {
    console.log('@manage_cart_from_bot | ', error)

    return res.send(error)
  }
}

async function api_handler({ url, headers, method, body, _qs, params }, res) {
  console.log('kesini jan')
  console.log({
      url: SHOP_API + '/dev' + url,
      method: method.toLowerCase(),
      headers: {
        'x-api-key': API_KEY,
        // token: headers.token,
      },
      data: body,
    })
  try {
    // console.log('kesini', SHOP_API + '/dev' + url, body)
    // return res.json({ status: true, results: JSON.parse(get_redis) })
    // console.log(SHOP_API + '/dev' + url, ' url')
    const request = await axios({
      url: SHOP_API + '/dev' + url,
      method: method.toLowerCase(),
      headers: {
        'x-api-key': API_KEY,
        // token: headers.token,
      },
      data: body,
    })

    // console.log(request, '; request')

    return res.json(
      request.data.hasOwnProperty('data') ? request.data.data : request.data
    )
  } catch (error) {
    return res.status(500).json({
      service: 'faq-balesin-id-API',
      version: '1.0.0',
      datetime: new Date(),
      timestamp: new Date().getTime(),
      error: error.message,
    })
  }
}

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const bodyParser = require('body-parser')
  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(cors())
  app.use(express.json({ limit: '100mb' }))
  app.use(express.urlencoded({ extended: false, limit: '100mb' }))

  app.use(bodyParser.json({ limit: '100mb' }))
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

  app.use('/api', api_handler)
  app.use('/cache', cache)
  app.use('/manage/cart', manage_cart_from_bot)
  app.use('/deliverycost/check', delivery_cost_check_hanlder)
  app.use('/voucher/apply', apply_voucher_hanlder)
  app.use('/transaction/order', order_hanlder)
  app.use('/product/search', product_search)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}
start()
