export default {
  get_list_products: async (self, data) => {
    try {
      console.log('*** get_product method ***')

      const request = await self.dispatch('request', {
        url: '/api/products',
        method: 'post',
        data
      })

      if (request.data.status) {
        self.dispatch('setState', {
          payload: {
            key: 'products',
            data: request.data.results
          }
        })

        console.log(request.data, ' request.data')

        return true
      }

      return request.data
    } catch (e) {
      console.log(e)

      return e
    }
  },

  cart_detail: async (self, data) => {
    try {
      const request = await self.dispatch('request', {
        url: '/cache/cart',
        method: 'post',
        data
      })
      const cart =  request.data

      if (cart && cart.status && cart.results) {
        if (cart.results.type === 'single-order') {
          if (cart.results.items.length) {
            const list_cart = cart.results.items.map(el => {
              console.log(el.items, ' el items')
              console.log(self.state, ' self.state.list_product')
              const search_product = self.state.products.filter(
                prod => prod.id === el.items[0].id
              )

              console.log(search_product, ' search_product')

              if (search_product.length) {
                search_product[0].select_date = true
                search_product[0].qty = el.items[0].qty

                return search_product[0]
              }
            })
            const cleaned_cart = list_cart.filter(el => typeof el == 'object')

            console.log(cleaned_cart, ' cleaned_cart')

            self.dispatch('setState', {
              payload: {
                key: 'cart',
                data: cleaned_cart
              }
            })
          }

          self.dispatch('setState', {
            payload: {
              key: 'notes',
              data: cart.results.notes
            }
          })
        }

        if (cart.results.type === 'rp-order') {
          console.log(cart.results, ' cart.results')
          if (cart.results.items.length) {
            const list_dates = cart.results.items.map(el => {
              const list_items = el.items.map(item => {
                const search_product = self.state.products.filter(prod => {
                  console.log(prod, ' prod get cart')
                  console.log(el.variant, ' variant get cart')
                  if (prod.id === item.id) {
                    return prod
                  }
                })
                console.log(search_product, item, el)
                console.log('search_product, item, el')
                const _item = {
                  SKU: search_product[0].SKU,
                  detail_id: search_product[0].detail[0].detail_id,
                  discount_price: search_product[0].detail[0].discount_price,
                  id: search_product[0].id,
                  main_image: search_product[0].detail[0].main_image,
                  name: search_product[0].name,
                  normal_price: search_product[0].detail[0].normal_price,
                  product_id: search_product[0].id,
                  qty: item.qty,
                  select_date: true,
                  variant: search_product[0].detail[0].variant
                }

                return _item
              })
              
                const merge_items = self.state.products.map(el => {
                  const find_selected = list_items.filter(s_el => s_el.id == el.id)

                  if (find_selected.length) return find_selected[0]

                  const _item = {
                    SKU: el.SKU,
                    detail_id: el.detail[0].detail_id,
                    discount_price: el.detail[0].discount_price,
                    id: el.id,
                    main_image: el.detail[0].main_image,
                    name: el.name,
                    normal_price: el.detail[0].normal_price,
                    product_id: el.id,
                    qty: 0,
                    select_date: false,
                    variant: el.detail[0].variant
                  }

                  return _item
                })

                return {
                  date: el.delivery_date,
                  delivery_time: el.delivery_time,
                  items: merge_items
                }
            })

            self.dispatch('setState', {
              payload: {
                key: 'dates',
                data: list_dates
              }
            })

            self.dispatch('setState', {
              payload: {
                key: 'rp_order',
                data: true
              }
            })
          }

          self.dispatch('setState', {
            payload: {
              key: 'notes',
              data: cart.results.notes
            }
          })
        }
      }
      // const request = await self.dispatch('request', {
      //   url: '/cache/cart',
      //   method: 'post',
      //   data
      // })
      return request.data
    } catch (error) {
      // console.log(error)
    }
  },

  manage_cart: async (self, data) => {
    try {
      console.log('manage_cart', JSON.stringify(data, null, 2))
      const request = await self.dispatch('request', {
        url: '/cache/manage/cart',
        method: 'post',
        data
      })

      console.log(request)
    } catch (error) {
      console.log(error)
    }
  }
}
