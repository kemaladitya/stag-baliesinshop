<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { rupiahFormat } from "@/middleware/helper"
import API from "@/components/general";

export default {
    components: {
        VueSlickCarousel,
    },

    data() {
        return {
            settings: {
                "dots": false,
                "arrows": false,
                "focusOnSelect": false,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 2.55,
                "slidesToScroll": 1,
                "touchThreshold": 5
            }

        }
    },
    computed: {
        list_product() {
            // console.log(this.$store.state.products)
            return this.$store.state.products
        },
        order_type() {
            return this.$store.state.order_type;
        },
        site() {
            return this.$store.state.site;
        },
    },
    // mounted() {
    //     if (this.$store.state.products.length !== 0) {
    //         const originArr = this.$store.state.products
    //         const categoryArray = originArr.map(res => res.category)
    //         let uniqueCategoryArray = [...new Set(categoryArray)];
    //         const merged = uniqueCategoryArray.map(res => ({
    //             category: res,
    //             data: originArr.filter(item => item.category === res)
    //         }))
    //         // console.log(merged);
    //         return this.dataWithCategory = merged
    //     }
    // },
    methods: {
        handleDetailLink(item) {
            this.$router.push(`/site/${this.site.store}/${item.id}?u=${this.$route.query.u}&src=${this.$route.query.src}&c=${this.$route.query.c}`);
        },
        handleRupiahFormat(val) {
            return rupiahFormat(val)
        },

        async add_to_cart(id, detail_id, sku, qty) {
            if (this.order_type === 'single-order') {
                await this.add_single_order(id, detail_id, sku, qty);
            } else if (this.order_type === 'subscription-order') {
                this.target_subs_date = { id, detail_id, sku, qty };
                this.sheet = true;
            }
        },
        async add_single_order(id, detail_id, sku, qty) {
            this.$store.dispatch('setState', {
                payload: { key: 'loading', data: true },
            });

            await API.cart_manager(this, {
                method: 'add',
                info: {
                    mode: 'single-order',
                    item: { id, detail_id, sku, qty },
                    store: {
                        name: this.site.store,
                        source: this.site.source,
                        uuid: this.site.uuid,
                        outlet: this.site.category,
                    },
                },
            });

            this.$store.dispatch('setState', {
                payload: { key: 'loading', data: false },
            });
        },
    },
}
</script>


    
<template>
    <div class="border-bottom slick-product pt-1">
        <p class="title-blue px ">Produk Favorit</p>
        <!-- <div v-if="dataProd.length > 0"> -->

        <VueSlickCarousel v-bind="settings" v-if="list_product.length >0">
            <div v-for="item in list_product" :key="item.id" class="boxcard">
                <img :src="item.main_image" alt="" class="pointer" @click="handleDetailLink(item)">
                <p class="prodtitle name pointer" @click="handleDetailLink(item)">{{item.name}}</p>
                <p class="prodtitle price">{{handleRupiahFormat(item.normal_price)}}</p>
                <v-btn depressed block class="bt-primary" color="#fd0"
                    @click="add_to_cart(item.id, item.variant[0].id, item.SKU, 1)">
                    Tambah
                </v-btn>
            </div>
        </VueSlickCarousel>
    </div>
</template>


<style lang="scss" scoped>
.slick-product {
    padding-bottom: 10px;
}

.boxcard {
    padding: 0 14px;
    border-right: 1px solid $light-grey;

    .name {
        margin-bottom: 8px;
        height: 32px;
    }

    .price {
        margin-bottom: 7px;
    }

    img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;
        margin-bottom: 13px;
        border-radius: 8px;
    }
}
</style>