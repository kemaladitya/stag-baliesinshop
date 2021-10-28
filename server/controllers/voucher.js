'use strict'

const balesin    = require("../sdk")
const { get_cart, set_cart } = require("../sdk/handler")

async function apply(request, response) {
  try {
    let get_redis = await get_cart(`${request.body.uuid}/${request.body.bot_name}`, "")

    request.body.order = { items : balesin.help.parse_order_items(get_redis) }

    const apply_voucher = await balesin.api.shop.apply_voucher(request.body)

    get_redis.voucher = request.body.voucher_code

    await set_cart(`${request.body.uuid}/${request.body.bot_name}`, "", get_redis)

    return response.json(
      apply_voucher.data.hasOwnProperty("data")
        ? apply_voucher.data.data
        : apply_voucher.data
    )
  } catch (error) {
    console.log(error)
    return response
      .status(404)
      .json({
        error,
        status: false,
      })
  }
}

async function remmove(request, response) {
  try {
    let get_redis = await get_cart(`${request.body.uuid}/${request.body.bot_name}`, "")

    request.body.order = { items : balesin.help.parse_order_items(get_redis) }

    // const apply_voucher = await balesin.api.shop.apply_voucher(request.body)

    get_redis.voucher = ''

    await set_cart(`${request.body.uuid}/${request.body.bot_name}`, "", get_redis)

    return response.json({ status: true })
  } catch (error) {
    console.log(error)
    return response
      .status(404)
      .json({
        error,
        status: false,
      })
  }
}

module.exports = { apply, remmove };
