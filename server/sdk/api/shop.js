'use strict'

const axios = require('axios')
const { _api, _key } = require('../../../config.json')
const headers = { "x-api-key": _key }

async function apply_voucher(data) {
  try {
    const request = await axios({
      url    : _api + '/dev/voucher/apply',
      method : 'POST',
      headers,
      data,
    })

    console.log('@apply_voucher.request |', request.data)

    return request
  } catch (error) {
    console.log('@order.error.data |', data)
    console.log('@order.error |', error)

    return error
  }
}

async function order(data) {
  try {
    const request = await axios({
      url    : _api + '/dev/order',
      method : 'POST',
      headers,
      data,
    })

    console.log('@order.request |', request.data)

    return request
  } catch (error) {
    console.log('@order.error.data |', data)
    console.log('@order.error |', error)

    return error
  }
}

async function product_search(data) {
  try {
    const request = await axios({
      url    : _api + '/product/search',
      method : 'POST',
      headers,
      data,
    })

    console.log('@product_search.request |', request.data)

    return request
  } catch (error) {
    console.log('@product_search.error.data |', data)
    console.log('@product_search.error |', error)

    return { status: false, data: { error: String(error) } }
  }
}

async function get_product_info(bot_id, detail_id) {
  try {
    const request = await axios({
      url    : _api + '/dev/product/info',
      method : 'POST',
      headers,
      data   : { bot_id, detail_id }
    })

    console.log('@get_product_info.request |', request.data)

    return request.data.response
  } catch (error) {
    console.log('@get_product_info.error.data |', bot_id, detail_id)
    console.log('@get_product_info.error |', error)

    return null
  }
}

async function parse_items(store_name, uuid, items) {
  try {
    const request = await axios({
      url    : _api + '/dev/parse/items',
      method : 'POST',
      headers,
      data   : { store_name, uuid, items }
    })

    console.log('@parse_items.request |', request.data)

    return request
  } catch (error) {
    console.log('@parse_items.error.data  |', store_name, uuid, items)
    console.log('@parse_items.error |', error)

    return { status: false, data: [] }
  }
}

async function check_items(data) {
  try {
    const request = await axios({
      url    : _api + '/dev/check/items',
      method : 'POST',
      headers,
      data
    })

    console.log('@check_items.request |', request.data)

    return request
  } catch (error) {
    console.log('@check_items.error.data |', data)
    console.log('@check_items.error |', error)
    
    return error
  }
}

async function check_store_info(bot_id) {
  try {
    const { data } = await axios({
      url     : _api + `/dev/storename/${bot_id}`,
      method  : 'POST',
      headers,
    })

    return data
  } catch (error) {
    console.log('@check_store_info.bot_id |', bot_id)
    console.log('@check_store_info.error  |', error)
    return error
  }
}

module.exports = {
  get_product_info,
  product_search,
  apply_voucher,
  check_items,
  parse_items,
  check_store_info,
  order,
}
