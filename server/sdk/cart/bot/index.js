'use strict'

const { get_cart, set_cart } = require('../../handler')
const single_mode            = require('./type/single-order')

async function manage(params) {
  try {
    console.log('params', params)
    let manager

    if (params.method === 'get') {
      manager = await get_cart(`${params.uuid || params.chatkey}/${params.store_name}`, '')

      return { bot_name: params.store_name, set_resp: manager }
    } else if (params.method === 'set') {
      console.log('@manage.set.set_cart |', `${params.uuid || params.chatkey}/${params.store_name}`)
      console.log('@manage.set.params.data |', params.data)
      manager = await set_cart(`${params.uuid || params.chatkey}/${params.store_name}`, '', params.data)
    } else if (params.method === 'last_order') {
      manager = await get_cart(`${params.uuid || params.chatkey}/${params.store_name}`, '/last')

      return { bot_name: params.store_name, set_resp: manager }
    } else {
      manager = await single_mode(params)
    }

    return manager
  } catch (error) {
    console.log('@cart.store.info  |', params)
    console.log('@cart.store.error |', error)

    return false
  }
}

module.exports = { manage }
