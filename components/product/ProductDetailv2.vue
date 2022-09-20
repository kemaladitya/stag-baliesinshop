<template>
    <div class="detail-product " v-if="product">
        <TitleBar title="Detail Produk" />
        <img :src="selected_variant.image" alt="" class="imgprod" loading=lazy />
        <div class="titlebox border-bottom px">
            <p class="title">{{ product.name }}</p>
            <p class="title price">
                Rp {{
                selected_variant.discount_price
                ? selected_variant.discount_price.toLocaleString().replace(/,/g, '.')
                : selected_variant.normal_price.toLocaleString().replace(/,/g, '.')
                }}, -
            </p>
        </div>
        <div class="box px border-bottom">
            <p class="prodtitle">
                Description
            </p>
            <p class="desc">
                {{ product.description }}
            </p>
        </div>

        <!-- <pre>
                <small>
                    cart:{{JSON.stringify(cart, null,2)}}
                    variant_selected:{{JSON.stringify(selected_variant, null,2)}}
                    variant:{{JSON.stringify(variant, null,2)}}
                </small>
            </pre> -->

        <div class="boxfix px border-bottom">
            <p class="prodtitle">
                Size
            </p>
            <p class="desc"> {{ selected_variant.size }}</p>
        </div>

        <div class="boxfix px border-bottom">
            <p class="prodtitle">
                Variant
            </p>
            <div class="wrapsel">
                <v-select class="selection-field" dense hide-details outlined placeholder="Pilih variant" label=""
                    :value="selected_variant.name" :items="variant.map(({ name }) => name)" @change="select_variant"
                    append-icon="mdi-chevron-down">
                </v-select>
            </div>
        </div>

        <div class="boxfix px border-bottom">
            <p class="prodtitle">
                Quantity
            </p>
            <div class="wrapqty">
                <v-btn icon class="iconbar-qty" @click="handleMinQty">
                    <v-icon color="#4caf50">mdi-minus</v-icon>
                </v-btn>
                <p class="items">{{qty}}</p>
                <v-btn icon class="iconbar-qty" @click="handleAddQty">
                    <v-icon color="#4caf50">mdi-plus</v-icon>
                </v-btn>

            </div>
        </div>

        <div class="box px">
            <p class="prodtitle notes">
                Notes <span>(optional)</span>
            </p>
            <v-textarea dense class="textareacus" rows="2" counter label="" outlined :rules="rules" :value="note">
            </v-textarea>
        </div>
        <div class="px">
            <v-btn block class="bt-primary btn-lg" color="#fd0" @click="manage_cart">
                Tambah ke keranjang
            </v-btn>
        </div>

    </div>
</template>

<script>
import TitleBar from '../shared/TitleBar.vue';
import API from '@/components/general'

export default {
    components: { TitleBar },
    data() {
        return {
            name: '',
            opt: [
                { text: "Name", value: "name" },
                { text: "Number", value: "number" },
                { text: "Inputs", value: "inputs" }
            ],
            rules: [v => v.length <= 200 || "Max 200 characters"],
            note: "hi,",

            //detail
            product: null,
            variant: [],
            selected_variant: null,
            qty: 1,
            mini_cart: false,
        };
    },

    computed: {
        store() {
            return this.$store.state.store
        },
        cart() {
            return this.$store.state.cart
        },
        home_url() {
            const { params, query } = this.$route;
            return `/site/${params.store}?u=${query.u}&src=${query.src}&c=${query.c}`;
        },
    },

    async mounted() {
        const { params: { pid }, query: { c } } = this.$route;
        const request = await this.$store.dispatch("request", {
            url: "/api/product/detail",
            method: "post",
            data: {
                id: pid,
                outlet: c,
                store_id: this.store.id,
            },
        });

        if (request.data.response) {
            this.product = request.data.response;
            this.variant = request.data.response.variant;
            this.selected_variant = this.variant.length ? this.variant[0] : null;
        }
        // await this.handleSameProductIncart()
    },

    methods: {
        // handleSameProductIncart() {
        //     if (this.cart[0]?.detail_id === this.selected_variant.id) {

        //         this.qty = this.cart[0].qty
        //     }
        // },
        handleBackHomeStore() {
            return this.$router.push(this.home_url)
        },

        show_mini_cart(status) {
            this.mini_cart = status;
        },

        select_variant(e) {
            const filtered = this.variant.filter(el => el.name === e);

            this.selected_variant = filtered[0];
        },

        // select_qty(e) {
        //     this.qty = e
        // },

        handleAddQty() {
            if (this.qty < this.selected_variant.stock) {
                return this.qty = this.qty + 1
            };
        },

        handleMinQty() {
            console.log('ok')
            if (this.qty > 1) {
                return this.qty = this.qty - 1
            }
        },

        async manage_cart() {
            const { params: { store }, query: { c, u, src } } = this.$route;

            this.$store.dispatch("setState", {
                payload: { key: "loading", data: true },
            });

            await API.cart_manager(this, {
                method: "add",
                info: {
                    mode: "single-order",
                    item: {
                        id: this.product.id,
                        detail_id: this.selected_variant.id,
                        sku: this.product.sku,
                        qty: this.qty
                    },
                    store: {
                        name: store,
                        source: src,
                        uuid: u,
                        outlet: c,
                    },
                },
            });

            await this.handleBackHomeStore()

            // this.show_mini_cart(true);
            this.$store.dispatch("setState", {
                payload: { key: "loading", data: false },
            });
        },
    },

}
</script>

<style lang="scss" scoped>
.detail-product {
    padding-bottom: 50px;

    .titlebox {
        p {
            font-size: 14px !important;
            font-family: Poppins, sans-serif !important;
            font-weight: 600 !important;
            line-height: unset !important;
        }
    }

    .imgprod {
        padding: 13px 16px;
        border-radius: 40px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        aspect-ratio: 1/1;
    }

    .titlebox {
        display: flex;
        justify-content: space-between;
        height: 55px;

        .price {
            text-align: right;
            width: 60%;
        }
    }

    .box {
        padding-top: 15px;
        padding-bottom: 13px;

        .prodtitle {
            margin-bottom: 6px;
        }

        .textareacus {
            font-size: 12px;
            line-height: normal;
            font-family: Poppins, sans-serif !important;

        }

        .notes {
            input {
                border-radius: 12px;
            }

            span {
                font-weight: 300;
            }
        }
    }

    .boxfix {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 54px;

        .wrapsel {
            max-width: 50%;

            .selection-field {
                font-size: 12px;
                letter-spacing: normal;
                border-radius: 12px;
                outline: unset;
                font-family: Poppins, sans-serif !important;
                border: unset;

                input {
                    outline: unset;
                    border: 1px solid #CCCCCC !important;

                }
            }

        }

        .wrapqty {
            display: flex;
            justify-content: center;
            align-items: center;

            .items {
                margin: 0 16px;
                font-size: 14px;
                font-weight: 400;
            }

            .iconbar-qty {
                border: 1px solid $green-balesin;
            }
        }
    }

}
</style>