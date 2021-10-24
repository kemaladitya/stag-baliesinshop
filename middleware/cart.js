class Cart {
  get(payload) {
    const validator = payload.hasOwnProperty('bot_id') &&
      payload.hasOwnProperty('store_name') &&
      payload.hasOwnProperty('source') &&
      payload.hasOwnProperty('method') &&
      payload.hasOwnProperty('uuid') &&
      payload.hasOwnProperty('category')

    if (validator) {
      return true
    }

    return false
  }

  set(payload) {
    const validator_lv1 = payload.hasOwnProperty('store_name') &&
      payload.hasOwnProperty('source') &&
      payload.hasOwnProperty('method') &&
      payload.hasOwnProperty('uuid') &&
      payload.hasOwnProperty('detail')

    if (validator_lv1) {
      const validator_lv2 = 
        payload.detail.hasOwnProperty('type') &&
        payload.detail.hasOwnProperty('items') &&
        payload.detail.type.length

      if (validator_lv2) {
        if (!payload.detail.items.length) {
          return true
        }

        const items = payload.detail.items

        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          const validator_lv3 = item.hasOwnProperty('delivery_date') &&
            item.delivery_date.length &&
            item.hasOwnProperty('items')

          if (validator_lv3) {
            if (!item.items.length) {
              return true
            }

            for (let j = 0; j < item.items.length; j++) {
              const element = item.items[j]
              const validator_lv4 = element.hasOwnProperty('id') &&
                element.hasOwnProperty('qty') &&
                element.hasOwnProperty('variant') &&
                element.variant.length &&
                element.qty

              if (validator_lv4) {
                return true
              }
            }
          }
        }
      }
    }

    return false
  }
}

module.exports = new Cart()