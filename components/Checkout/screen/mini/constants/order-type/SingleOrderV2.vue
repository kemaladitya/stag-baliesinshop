<template>
    <div>
        <div class="wrap-order px border-bottom" v-if="cart.length">
            <p class="title mb-1">
                Detail Pesanan -single order
            </p>
            <div class="boxprod " v-for="(item, index) in parsed_lists.product" :key="index">
                <div class="left">
                    <p class="name desc">
                        {{ item.name }}
                    </p>
                    <p class="price prodtitle">
                        <span>{{ item.qty }} x &nbsp;</span>
                        <span v-if="item.is_promo">
                            Rp {{
                            item.discount_price
                            .toLocaleString()
                            .replace(/,/g, '.')
                            }}, -
                        </span>
                        <span :style="
                        item.is_promo
                            ? 'color: darkgrey !important; text-decoration-line: line-through !important;'
                            : null
                        ">
                            &nbsp;Rp {{
                            item.normal_price
                            .toLocaleString()
                            .replace(/,/g, '.')
                            }}, -
                        </span>
                    </p>
                    <v-icon class="pointer">mdi-playlist-edit</v-icon>
                </div>
                <div class="right">
                    <img :src="item.main_image" alt="">
                </div>
            </div>

        </div>

        <div v-else>
            <center style="margin-top: 30vh; margin-bottom: 30px">
                <div style="width: 264px">
                    <v-icon color="grey lighten-2" style="font-size: 120px;">mdi-cart-outline</v-icon>
                    <div style="
                font-weight: 600;
                border-radius: 5px;
                width: fit-content;
                font-size: 13px;
              ">
                        Keranjang belanja Anda kosong.
                    </div>
                </div>
            </center>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        site() {
            return this.$store.state.site
        },

        order_type() {
            return this.$store.state.order_type
        },

        is_available_express() {
            return this.$store.state.is_available_express
        },

        store() {
            return this.$store.state.store
        },

        list_product() {
            return this.$store.state.products
        },

        cart() {
            return this.$store.state.cart
        },

        parsed_lists() {
            let total = 0
            const product = []

            this.cart.forEach(el => {
                const find = this.list_product.filter(
                    product => product.id === el.id && product.SKU === el.sku
                )

                if (find.length) {
                    product.push({
                        id: find[0].id,
                        sku: find[0].SKU,
                        detail_id: find[0].variant[0],
                        main_image: find[0].main_image,
                        name: find[0].name,
                        normal_price: find[0].normal_price,
                        discount_price: find[0].discount_price,
                        is_promo: find[0].is_promo,
                        qty: el.qty,
                        express_delivery: find[0].express_delivery,
                        express_delivery_setup: find[0].express_delivery_setup,
                    })

                    total += (find[0].discount_price || find[0].normal_price) * el.qty
                }
            })

            return { product, total }
        }
    },
}
</script>

<style lang="scss" scoped>
.wrap-order {
    padding-top: 10px;
    padding-bottom: 14px;

    .boxprod {
        border: 1px solid $light-grey;
        display: flex;
        justify-content: space-between;
        padding: 11px 16px;
        border-radius: 12px;
        margin-bottom: 12px;

        &:last-of-type {
            margin-bottom: 0;
        }

        .left {
            .name {
                height: 40px;
                max-width: 80%;
            }

            .price {
                margin-bottom: 10px;
            }

            .pointer {
                color: $light-grey;
            }
        }

        img {
            width: 80px;
            border-radius: 12px;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            // margin-left: 16px;
        }
    }
}
</style>