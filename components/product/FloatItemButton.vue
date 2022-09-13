
<script>
import { rupiahFormat } from '~/middleware/helper'

export default {
    //   props: {
    //     loading_product: Boolean,
    //   },
    methods: {
        handleRupiahFormat(val) {
            return rupiahFormat(val)
        }
    },
    computed: {
        order_info() {
            let qty_item = 0
            let total = 0

            if (this.order_type === 'single-order' && this.cart) {
                this.cart.forEach(el => {
                    const find = this.list_product.filter(
                        product => product.id === el.id && product.SKU === el.sku
                    )

                    if (find.length) {
                        qty_item += el.qty
                        total += (find[0].discount_price || find[0].normal_price) * el.qty
                    }
                })
            } else if (this.order_type === 'subscription-order' && this.cart) {
                this.cart.forEach(date => {
                    date.items.forEach(item => {
                        const find = this.list_product
                            .filter(product =>
                                product.id === item.id
                                && product.SKU === item.sku
                            );

                        if (find.length) {
                            qty_item += item.qty;
                            total += (find[0].discount_price || find[0].normal_price) * item.qty;
                        }
                    })
                })
            }

            return { qty_item, total };
        },

        list_product() {
            return this.$store.state.products;
        },

        cart_url() {
            return `/site/${this.$route.params.store}/cart?u=${this.$route.query.u}&mtd=view&src=${this.$route.query.src}&c=${this.$route.query.c}`;
        },

        order_type() {
            return this.$store.state.order_type;
        },

        cart() {
            if (this.order_type === 'single-order') {
                return this.$store.state.cart
            } else if (this.order_type === 'subscription-order') {
                return this.$store.state.subscription_cart
            } else if (this.order_type === 'package-order') {
                return this.$store.state.package_cart
            }
        },
    },
}
</script>

<template>
    <div :class="`float-item-button ${cart.length> 0 ? 'showbtn' : 'hidebtn'  }`">
        <div class="wrapfloat px">
            <NuxtLink :to="cart_url">
                <v-btn block class="bt-primary btnfloat btn-lg" color="#fd0">
                    <p class="title">
                        {{ order_info.qty_item }}
                        {{ order_info.qty_item > 1 ? 'items' : 'item' }}
                    </p>

                    <p class="title">
                        {{handleRupiahFormat(order_info.total)}}
                    </p>
                </v-btn>
            </NuxtLink>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.showbtn {
    bottom: 16px;
    position: fixed;
}

.hidebtn {
    bottom: -60px;
    position: fixed;
}

.float-item-button {
    transition: ease-in-out .5s;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;


    .wrapfloat {
        max-width: 420px;
        width: 100%;
    }

    .btnfloat {
        width: 100% !important;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-weight: 700;
        }
    }
}
</style>