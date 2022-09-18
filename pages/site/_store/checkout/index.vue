<template>
    <div>
        <div v-if="loading_checkout">
            <Loadingv2 />
        </div>
        <div v-else>
            <CheckoutV2 />
        </div>

    </div>
</template>

<script>
import TitleBar from '~/components/shared/TitleBar.vue';
import Loadingv2 from '~/components/shared/Loadingv2.vue';
import CheckoutV2 from '~/components/Checkout/CheckoutV2.vue';
import API from "@/components/general";
import { mode } from "../../../../config.json"


export default {
    layout: "layoutv2",
    components: { TitleBar, Loadingv2, CheckoutV2 },
    data() {
        return {
            sheet: false,
            loading_checkout: false
        }
    },
    methods: {
        handleSheetVoucher() {
            this.sheet = !this.sheet
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

        customer() {
            return this.$store.state.customer
        },

        products() {
            return this.$store.state.products
        },
    },

    async mounted() {
        this.loading_checkout = true

        await this.init_page()

        if (!this.store.hasOwnProperty('min_order')) {
            await this.get_base_info('site-store-cart')
        }

        await this.get_base_info('site-store-checkout')
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

        if (+this.store.store_type) {
            const request = await this.$store.dispatch("request", {
                url: "/api/store/market/info",
                method: "post",
                data: { merchant_id: this.$route.query.c }
            })

            this.$store.dispatch("setState", {
                payload: {
                    key: "merchant",
                    data: request.data.response
                }
            })
        }

        this.loading_checkout = false
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
                    bot_id: this.$route.params.store
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

        async get_base_info(page) {
            const store = await this.$store.dispatch('request', {
                url: '/api/store',
                method: 'post',
                data: {
                    store_name: this.$route.params.store,
                    page: page,
                },
            })

            if (store.status != 200) {
                this.$router.replace('/error/link/invalid')

                return false
            }

            this.$store.dispatch('setState', {
                payload: {
                    key: 'store',
                    data: {
                        ...this.store,
                        ...store.data
                    }
                }
            })
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

                if (this.customer.ex_callback && this.$route.name == 'site-store') {
                    // if (this.site.category != this.customer.ex_callback || this.site.category != 'all' || this.site.category.length) {
                    //   window.open(`https://shop.balesin.id/site/${this.site.store}?u=${this.site.uuid}&src=${this.site.source}&c=${this.customer.ex_callback}`, '_self')
                    // }
                }
            } catch (error) {
                console.error(error)
            }
        },
    }


}

</script>

<style lang="scss" scoped>
// .checkoutv2 {
//     .box {
//         .wrap-add {
//             max-width: 182px;
//         }
//     }

//     .wrap-order {
//         padding-top: 10px;
//         padding-bottom: 14px;

//         .boxprod {
//             border: 1px solid $light-grey;
//             display: flex;
//             justify-content: space-between;
//             padding: 11px 16px;
//             border-radius: 12px;
//             margin-bottom: 12px;

//             &:last-of-type {
//                 margin-bottom: 0;
//             }

//             .left {
//                 .name {
//                     height: 40px;
//                     max-width: 80%;
//                 }

//                 .price {
//                     margin-bottom: 10px;
//                 }

//                 .pointer {
//                     color: $light-grey;
//                 }
//             }

//             img {
//                 width: 80px;
//                 border-radius: 12px;
//                 aspect-ratio: 1 / 1;
//                 object-fit: cover;
//                 // margin-left: 16px;
//             }
//         }
//     }

//     .wrap-vcr {
//         padding: 14px 16px;

//         .voucherbut {
//             background-color: $red;
//             border-radius: 100px;
//             height: 50px;
//             display: flex;
//             justify-content: space-between;

//             .wraptitle {
//                 display: flex;
//                 align-items: center;

//                 .imagevcr {
//                     height: 36px;
//                     width: 36px;
//                     background-color: white;
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     border-radius: 100%;
//                     margin-right: 8px;

//                     img {
//                         height: 28px;
//                         object-fit: contain;
//                     }
//                 }

//                 p {
//                     color: white;
//                     text-transform: capitalize;
//                     letter-spacing: normal;
//                     font-size: 12px;
//                     font-weight: 600;
//                 }
//             }

//         }

//     }


//     .total {
//         font-size: 16px;
//         font-weight: 700 !important;
//     }

//     .text-blue {
//         cursor: pointer;
//         color: $blue;
//         font-size: 12px;
//         font-weight: 700;
//     }

// }

.bottom-sheet {
    padding-bottom: 40px;
    background-color: white;
    // border-radius: 0 0 20px 20px;
}
</style>