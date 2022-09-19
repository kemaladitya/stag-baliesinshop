<template>

    <div>
        <div v-if="loading_product">
            <Loadingv2 />
        </div>
        <div v-else>
            <ProductDetailv2 />
        </div>
    </div>
</template>

<script>
import Select from '~/components/general/select.vue';
import Loadingv2 from '~/components/shared/Loadingv2.vue';

import API from '@/components/general'
import { mode } from "../../../../config.json"
import ProductDetailv2 from '../../../../components/product/ProductDetailv2.vue'


export default {
    layout: "layoutv2",
    components: { Select, Loadingv2, ProductDetailv2 },
    data() {
        return {
            selected_variant: {},
            selected_qty: 1,
            loading_product: false


        }
    },


    computed: {
        screen() {
            return this.$store.state.screen
        },

        site() {
            return this.$store.state.site
        },

        store() {
            return this.$store.state.store
        },

        merchant() {
            return this.$store.state.merchant
        },

        order_type() {
            return this.$store.state.order_type
        },

        customer() {
            return this.$store.state.customer
        },

        products() {
            return this.$store.state.products
        },

        mini_cart() {
            return this.$store.state.mini_cart
        },
    },

    async mounted() {
        this.loading_product = true

        await this.init_page()
        await API.cart_manager(this, {
            method: 'get',
            info: {
                item: null,
                store: {
                    name: this.site.store,
                    source: this.site.source,
                    uuid: this.site.uuid,
                    outlet: this.site.category,
                },
            },
        })

        // this.selected_variant = filtered.detail[0]
        this.loading_product = false
    },

    methods: {
        async init_page() {
            const { c, u } = this.$route.query

            if (!this.store) {
                await this.get_base_info('site-page')
            }

            if (!this.customer) {
                await this.get_customer_detail(this.store.bot_id)
                this.check_express_delivery()
            }

            if (!this.products.length) {
                const get_product = await API.get_list_products(this.$store, {
                    category: c,
                    uid: u,
                    bot_id: this.$route.params.store,
                    merchant: this.merchant ? this.merchant.id : 0,
                })

                if (!get_product.status && mode == "production") {
                    if (get_product.message == 'Expired.') {
                        this.$router.replace('/error/link/expired')
                    }

                    if (get_product.message == 'Invalid URL.') {
                        this.$router.replace('/error/link/invalid')
                    }
                }
            }
        },

        async check_express_delivery() {
            try {
                console.log("jalan?");
                const request = await this.$store.dispatch("request", {
                    url: "/express-availability",
                    method: "post",
                    data: {
                        city: this.customer.city,
                        subdistrict: this.customer.sub_district,
                        urban: this.customer.urban,
                    },
                });

                console.log("check_express_delivery", request);
                if (request.status == 200) {
                    this.$store.dispatch("setState", {
                        payload: {
                            key: "is_available_express",
                            data: +request.data.item.is_express
                        }
                    })
                }
            } catch (error) {
                console.log(error);
            }
        },

        show_mini_cart(params) {
            this.$store.dispatch('setState', {
                payload: {
                    key: 'mini_cart',
                    data: params
                }
            })
        },

        select_qty(qty) {
            this.selected_qty = +qty
        },

        select_variant(item) {
            const filtered = this.product_detail.detail.filter(el => el.variant === item)[0]

            this.selected_variant = filtered
        },

        async get_customer_detail(bot_id) {
            try {
                const request = await this.$store.dispatch('request', {
                    url: '/api/customer',
                    method: 'post',
                    data: {
                        chatkey: this.$route.query.u,
                        bot_id
                    }
                })

                this.$store.dispatch('setState', {
                    payload: {
                        key: 'customer',
                        data: request.data.response
                    }
                })
            } catch (error) {
                console.error(error)
            }
        },
    }

}
</script>

