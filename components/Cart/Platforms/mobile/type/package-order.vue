<template>
  <div
    v-if="setup"
    class="pa-1 pt-0"
    style="text-align: right"
  >

    <!-- create bundle -->
    <v-dialog
      v-model="dialog"
      persistent
      max-width="90%"
    >
      <v-card height="50%">
        <div
          style="background-color: lightgray;"
        >
          <div
            class="pa-2 pb-0"
            style="text-align: left; font-weight: 600; font-size: 12px;"
          >
            Pilih Tipe Paket:
          </div>
          <v-card class="d-flex flex-row pa-1" style="background-color: lightgray !important;" flat>
            <v-card
              v-for="(detail, idx) in setup.rules.detail"
              color="transparent"
              class="pa-1"
              :key="idx"
              :width="`${(100 / setup.rules.detail.length)}%`"
              flat
            >
              <!-- :style="idx != setup.rules.detail.length - 1 ? 'margin-right: 4% !important;' : ''" -->
              <v-card
                class="pt-1"
                style="font-size: 13px;"
                height="175"
                min-height="175"
                max-height="175"
                light
                flat
                depressed
                color="white"
                :style="
                  type == detail.type
                    ? 'background-color: white !important; color: black; font-weight: bold; '
                    : 'color: grey; opacity: 0.5; '
                "
                @click="type = detail.type"
              >
                <div class="pa-2" style="width: 130px; height: 150px; background-color: white">
                  <v-img
                    :src="detail.image"
                    width="130"
                    height="130"
                    :style="type == detail.type ? 'color: grey' : 'color: grey; opacity: 0.5;'"
                  />
                </div>
                <div style="text-transform: capitalize; text-align: center">
                  {{ detail.type }}
                </div>
              </v-card>
            </v-card>
            <v-spacer />
          </v-card>
          <v-progress-linear
            v-show="loading"
            style="z-index: 9999 !important"
            color="blue darken-2"
            height="3"
            indeterminate
          />
        </div>
        <div
          class="pa-2"
          style="font-size: 12px; font-weight: 600; text-align: left;"
        >
          Isi Paket:
        </div>

        <v-card
          v-if="parsed_lists.product.length"
          max-height="300"
          class="pa-2 pt-0"
          style="overflow-y: scroll"
          flat
          tile
        >
          <Lists :lists="parsed_lists.product" :changeqty="change_group_qty" />
        </v-card>

        <FooterDetail
          :type="type"
          :setup="setup"
          :total="parsed_lists.total"
          :cancel="cancel"
          :validated="validate_total"
          :submit="submit_bundle"
        />
      </v-card>
    </v-dialog>
    <!-- create bundle -->

    <!-- remove bundle -->
    <v-dialog
      v-model="rm_dialog"
      persistent
      max-width="90%"
    >
      <RemovePackage :removepackage="remove_package" />
    </v-dialog>
    <!-- remove bundle -->

    <SinglePackage v-if="order_type === 'package-order'" :remove="confirm_remove_bundle" :idx="idx" />
    <!-- <MultiplePackage v-if="customized_values && customized_values.length > 1" :remove="confirm_remove_bundle" :cart="list_items" /> -->

    <!-- bundle footer -->
    <div
      v-if="cart.length"
      :class="package_cart.length ? 'mt-2' : null"
      style="text-align: left; width: 100%;"
    >
      <div
        v-if="setup.multiple_type == true ? true : !package_cart.length"
        class="d-flex flex-row"
      >
        <div class="d-flex flex-row" style="width: 100%;">
          <v-img
            class="mr-2"
            src="https://cdn.onlinewebfonts.com/svg/img_569342.png"
            width="22"
            height="22"
            max-width="22"
            max-height="22"
            style="margin-top: 3px; border-radius: 2px"
          />
          <div>
            <div style="font-size: 12px; font-weight: 600">
              {{ setup.title }}
            </div>
            <div style="font-size: 10px; color: grey">
              {{ setup.description }}
            </div>
          </div>
        </div>
        <div style="width: 30%; text-align: right;">
          <v-btn
            class="mt-1"
            color="success"
            small
            style="text-transform: capitalize; letter-spacing: normal"
            depressed
            @click="dialog = true"
          >
            Tambah
          </v-btn>
        </div>
      </div>
    </div>
    <!-- bundle footer -->

  </div>
</template>

<script>
import API from '@/components/General'
import SinglePackage from '@/components/Cart/Platforms/mobile/type/package-order/type/single'
import MultiplePackage from '@/components/Cart/Platforms/mobile/type/package-order/type/multiple'
import Lists from '@/components/Cart/Platforms/mobile/type/package-order/list-items'
import FooterDetail from '@/components/Cart/Platforms/mobile/type/package-order/footer-detail'
import RemovePackage from '@/components/Cart/Platforms/mobile/type/package-order/remove-package'

export default {
  components: {
    SinglePackage,
    MultiplePackage,
    Lists,
    FooterDetail,
    RemovePackage,
  },

  data: () => ({
    idx          : 0,
    type         : '',
    dialog       : false,
    rm_dialog    : false,
    target_rm    : null,
    list_items   : [],
    expansion    : [],
    selected_type: null
  }),

  watch: {
    type(newval, oldval) {
      const selected_type = this.setup.rules.detail.filter(el => el.type == newval)
      if (selected_type.length) {
        this.selected_type = selected_type[0]
      }
    },

    customized_values(newval, oldval) {
      const self = this
      if (newval) {
        this.expansion = newval.map(el => ({ show: false }))
      }
    },

    dialog(newval, oldval) {
      if (newval) {
        this.list_items = this.cart

        this.list_items.forEach(_ => {
          this.expansion.push({ show: true })
        })
      }
    }
  },

  computed: {
    loading() {
      return this.$store.state.loading
    },

    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    order_type() {
      return this.$store.state.order_type
    },

    setup() {
      if (this.store.hasOwnProperty('customize_setup') && this.$store.state.store.customize_setup) {
        return JSON.parse(this.$store.state.store.customize_setup).packaging
      }

      return null
    },

    list_product() {
      return this.$store.state.products
    },

    cart() {
      return this.$store.state.cart
    },

    package_cart() {
      return this.$store.state.package_cart
    },

    parsed_lists() {
      let total = 0
      const product = []

      this.list_items.forEach(el => {
        const find = this.list_product.filter(
          product => product.id === el.id && product.SKU === el.sku
        )

        if (find.length) {
          product.push({
            id             : find[0].id,
            sku            : find[0].SKU,
            detail_id      : find[0].variant[0],
            main_image     : find[0].main_image,
            name           : find[0].name,
            normal_price   : find[0].normal_price,
            discount_price : find[0].discount_price,
            is_promo       : find[0].is_promo,
            qty            : el.qty
          })

          total += (find[0].discount_price || find[0].normal_price) * el.qty
        }
      })

      return { product, total }
    },

    min_rp() {
      return this.$store.state.min_rp
    },

    delivery_time_normal() {
      return this.$store.state.delivery_time_normal
    },

    customized_values() {
      return this.$store.state.customized_values
    },

    user_notes() {
      return this.$store.state.user_notes
    },

    dates() {
      return this.$store.state.dates
    },

    rp_order() {
      return this.$store.state.rp_order
    },

    single_order_date() {
      return this.$store.state.single_order_date
    },

    total() {
      let total = 0
      this.list_items.forEach(el => {
        total += (el.qty * el.discount_price || el.normal_price)
      })

      return total
    },

    validate_total() {
      if (this.selected_type) {
        if (this.parsed_lists.total >= this.selected_type.min && this.parsed_lists.total <= this.selected_type.max) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    }
  },

  mounted() {
    // if (!this.cart.length) {
    //   this.$router.go(-1)
    // } else {
    //   this.cart.forEach(el => {
    //     this.list_items.push({
    //       id             : el.id,
    //       name           : el.name,
    //       SKU            : el.SKU,
    //       qty            : el.qty,
    //       image          : el.main_image,
    //       variant        : el.variant,
    //       normal_price   : el.normal_price,
    //       discount_price : el.discount_price
    //     })
    //     this.expansion.push({ show: true })
    //   })
    // }

    if (this.setup) {
      this.type = this.setup.rules.detail[0].type
    }
  },

  methods: {
    created_notes() {
      const user_notes = this.user_notes.split('----------------------------#\n')
      const notes = this.customized_values
        .map((el, index) =>
          `bundle-${index+1} :\n* tipe = ${el.type}\n${el.items.map(item => `- "${item.SKU}" = ${item.qty} item.`).join('\n')}\n`)
        .join('\n')
      this.$store.dispatch('setState', {
        payload: {
          key: 'user_notes',
          data: `${notes}\n----------------------------#\n${user_notes.length > 1 ? user_notes[1] : user_notes[0]}\n`
        }
      })
    },

    confirm_remove_bundle(index) {
      this.target_rm = index
      this.rm_dialog = true
    },

    remove_package(status) {
      this.rm_dialog = false

      if (status) {
        this.$store.dispatch('setState', {
          payload: {
            key: 'order_type',
            data: 'single-order'
          }
        })
        this.$store.dispatch('setState', {
          payload: {
            key: 'package_cart',
            data: []
          }
        })

        this.update_cart()
      }
    },

    cancel() {
      this.dialog     = false
      this.cart.forEach(el => {
        this.list_items.push({
          id             : el.id,
          name           : el.name,
          SKU            : el.SKU,
          qty            : el.qty,
          image          : el.main_image,
          variant        : el.variant,
          normal_price   : el.normal_price,
          discount_price : el.discount_price
        })
      })
      this.list_items = this.list_items.slice(this.cart.length)
    },

    change_group_qty(status, index) {
      this.list_items = this.list_items.filter((el, i) => {
        if (i == index) {
          if (status) {
            el.qty += 1
          } else {
            el.qty -= 1
          }
        }

        return el.qty ? el : null
      })
    },

    submit_bundle() {
      this.$store.dispatch('setState', {
        payload: {
          key: 'order_type',
          data: 'package-order'
        }
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'package_cart',
          data: [
            {
              type: this.type,
              items: this.list_items
            }
          ]
        }
      })

      this.update_cart()

      this.dialog = false
    },

    async update_cart() {
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: true
        }
      })

      if (!this.package_cart.length) {
        this.$store.dispatch('setState', {
          payload: {
            key: 'order_type',
            data: 'single-order'
          }
        })

        await API.cart_manager(this, {
          method: 'set',
          info: {
            mode: 'single-order',
            item: this.cart,
            store: {
              name   : this.site.store,
              source : this.site.source,
              uuid   : this.site.uuid,
              outlet : this.site.category,
            },
          },
        })
      } else {
        await API.cart_manager(this, {
          method: 'set',
          info: {
            mode: 'package-order',
            item: [{
              type: this.type,
              items: this.list_items
            }],
            store: {
              name   : this.site.store,
              source : this.site.source,
              uuid   : this.site.uuid,
              outlet : this.site.category,
            },
          },
        })
      }

      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: false
        }
      })
    }
  }
}
</script>

<style lang="scss">
#app > div.v-dialog__content.v-dialog__content--active > div {
  max-height: 650px !important;
}
</style>