<template>
  <div>
    <div class="d-flex flex-row">
      <div
        class="pl-2"
        style="align-self: center; font-size: 14px; font-weight: 600"
      >
        Pilih Pengiriman
      </div>
      <v-spacer />
      <v-btn
        color="red"
        icon
        text
        @click="select_courier_dialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div
      style="overflow-y: scroll !important; max-height: 450px !important;"
    >
      <v-card
        v-for="(cr, idx) in courier.lists"
        :key="idx"
        :class="!idx ? 'pb-0' : null"
        class="pa-2 pl-0"
        flat
        style="text-align: left"
      >
        <v-card
          v-if="express_delivery_validator(cr) == false"
          :disabled="!!express_delivery_validator(cr)"
          class="ml-2 pa-3 pt-2 pb-3 mb-2"
          style="font-size: 13px; font-weight: 600; border-radius: 8px"
          outlined
          @click="select_courier(cr)"
        >
          <div v-if="cr.includes('custom')">
            <div
              class="pa-1 pb-0"
              :style="
                !!express_delivery_validator(cr)
                  ? 'color: grey;'
                  : 'color: ' + take_icons[cr.split('|')[2]].color
              "
              style="font-weight: 600; text-transform: capitalize"
            >
              <v-icon
                :color="
                  !!express_delivery_validator(cr)
                    ? 'grey'
                    : take_icons[cr.split('|')[2]].color
                "
                class="mr-1"
              >
                {{ take_icons[cr.split('|')[2]].name }} - {{ take_icons[cr.split('|')[2]].name }}
              </v-icon>
              {{ cr.split('|')[1] }} - {{ cr.split('|')[2] }}
              <div
                v-if="take_icons[cr.split('|')[2]].description.length"
                :style="!!express_delivery_validator(cr) ? 'color: grey' : 'color: black'"
                style="font-weight: normal; line-height: 18px;"
              >
                <span
                  v-if="
                    cr.split('|')[2] === 'Express Delivery'
                    && express_delivery_description().length
                  "
                  style="color: #ff4f4f"
                >
                  {{ express_delivery_description() }}
                </span>
                <span v-else>{{ take_icons[cr.split('|')[2]].description }}</span>
              </div>
            </div>
          </div>
          <div v-else>
            <div
              class="pa-1 pb-0"
              :style="
                !!express_delivery_validator(cr)
                  ? 'color: grey;'
                  : 'color: ' + take_icons[cr.split('|')[0]].color
              "
              style="font-weight: 600; text-transform: capitalize"
            >
              <v-icon
                :color="
                  !!express_delivery_validator(cr)
                    ? 'grey'
                    : take_icons[cr.split('|')[0]].color
                "
                class="mr-1"
              >
                {{ take_icons[cr.split('|')[0]].name }} - {{ take_icons[cr.split('|')[0]].name }}
              </v-icon>
              {{ cr.split('|')[0] }} - {{ cr.split('|')[1] }}
              <div
                v-if="take_icons[cr.split('|')[0]].description.length"
                :style="!!express_delivery_validator(cr) ? 'color: grey' : 'color: black'"
                class="mt-1"
                style="font-weight: normal; line-height: 18px;"
              >
                <span
                  v-if="
                    cr.split('|')[0] === 'Express Delivery'
                    && express_delivery_description().length
                  "
                  style="color: #ff4f4f"
                >
                  {{ express_delivery_description() }}
                </span>
                <span v-else>{{ take_icons[cr.split('|')[0]].description }}</span>
              </div>
            </div>
          </div>
          <!-- <div v-if="cr.split('|').length > 2"> -->
            <!-- <div v-if="icons.includes(cr.split('|')[2])">
              <div
                class="pa-1 pb-0"
                :style="
                  !!express_delivery_validator(cr)
                    ? 'color: grey;'
                    : 'color: ' + take_icons[cr.split('|')[2]].color
                "
                style="font-weight: 600; text-transform: capitalize"
              >
                <v-icon
                  :color="
                    !!express_delivery_validator(cr)
                      ? 'grey'
                      : take_icons[cr.split('|')[2]].color
                  "
                  class="mr-1"
                >
                  {{ take_icons[cr.split('|')[2]].name }} - {{ take_icons[cr.split('|')[2]].name }}
                </v-icon>
                {{ cr.split('|')[1] }} - {{ cr.split('|')[2] }}
                <div
                  v-if="take_icons[cr.split('|')[0]].description.length"
                  :style="!!express_delivery_validator(cr) ? 'color: grey' : 'color: black'"
                  class="mt-1"
                  style="font-weight: normal; line-height: 18px;"
                >
                  <span
                    v-if="
                      cr.split('|')[2] === 'Express Delivery'
                      && express_delivery_description().length
                    "
                    style="color: #ff4f4f"
                  >
                    {{ express_delivery_description() }}
                  </span>
                  <span v-else>{{ take_icons[cr.split('|')[2]].description }}</span>
                </div>
              </div>
            </div> -->
          <!-- </div> -->
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courier: Object,
    icons: Array,
    take_icons: Object,
    select_courier: Function,
  },

  data: () => ({
    is_all_express: true,
    parsed_product: {
      product: [],
      total: 0,
    },
    is_available_today: false,
  }),

  computed: {
    is_available_express() {
      return this.$store.state.is_available_express;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    store() {
      return this.$store.state.store;
    },

    products() {
      return this.$store.state.products;
    },

    cart() {
      if (this.order_type === 'single-order') {
        return this.$store.state.cart;
      } else if (this.order_type === 'subscription-order') {
        return this.$store.state.subscription_cart;
      } else if (this.order_type === 'package-order') {
        return this.$store.state.package_cart;
      }
    },

    validate_express_delivery() {
      try {
        const filter_not_in = this.parsed_product.product.filter(_ => {
          if (!_.express_delivery) {
            return _;
          }
        });

        return filter_not_in;
      } catch (error) {
        return [];
      }
    },
  },

  created() {
    this.product_parser();
  },

  mounted() {
    this.check_day_availability();
  },

  methods: {
    express_delivery_description() {
      if (!this.is_available_express) {
        return "Saat ini layanan “Express Delivery“ hanya tersedia di area tertentu"
      }

      if (this.order_type === 'subscription-order') {
        return "Express Delivery tidak tersedia untuk pembelian Mode Langganan";
      } else if (this.order_type === 'package-order') {
        return "Express Delivery tidak tersedia untuk pembelian Parcel/Box";
      }

      if (this.validate_express_delivery.length) {
        return "Hanya tersedia untuk produk Sari Roti dengan label khusus “Express Delivery”";
      }

      return "";
    },

    check_day_availability() {
      try {
        const today = new Date().getDay();
        const list_days = [];

        this.parsed_product.product
          .forEach(({ express_delivery_setup: { days } }) => {
            days.forEach(day => 
              !list_days.includes(day)
                ? list_days.push(day)
                : null
              );
        });

        console.log("start check");
        if (list_days.length == 1 && list_days[0] == "*") {
          this.is_available_today = true;
        } else if (list_days.includes(today)) {
          this.is_available_today = true;
        } else {
          this.is_available_today = false;

          return;
        }
      } catch (error) {
        this.is_available_today = false;

        return;
      }
    },

    express_delivery_validator(courier) {
      let available = true;

      const name = courier.split('|')[2];
      const not_express_delivery_items = this.parsed_product
        .product
        .filter(({ express_delivery }) => !express_delivery);
      const express_delivery_items = this.parsed_product
        .product
        .filter(({ express_delivery }) => express_delivery);

      if (express_delivery_items.length) {
        const now = new Date();
        const time_now = (
          now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
        ) + ":" + (
          now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
        );

        express_delivery_items.forEach(item => {
          const checker = +time_now.replace(":", "") > +item.express_delivery_setup.time.start.replace(":", "")
            && +time_now.replace(":", "") <= +item.express_delivery_setup.time.end.replace(":", "");

          if (available) {
            available = checker;
          }
        });
      }

      if (name == "Express Delivery") {
        const is_single_item = this.order_type === "single-order";
        const is_all_express = !not_express_delivery_items.length;
        const is_all_time_available = available;

        return !(
          is_single_item
          && is_all_express
          && is_all_time_available
          && this.is_available_today
          && this.is_available_express
        );
      }

      return false;
    },

    product_parser() {
      let total = 0;
      const product = [];

      this.cart.forEach(el => {
        const find = this.products
          .filter(product =>
            product.id === el.id
            && product.SKU === el.sku
          );

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
            qty            : el.qty,
            express_delivery: find[0].express_delivery,
            express_delivery_setup: find[0].express_delivery_setup,
          });

          if (!find[0].express_delivery) this.is_all_express = false;

          total += (find[0].discount_price || find[0].normal_price) * el.qty;
        }
      })

      this.parsed_product = { product, total };
    },
  },
}
</script>