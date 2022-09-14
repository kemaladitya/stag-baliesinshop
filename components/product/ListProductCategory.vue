

<script>
import { rupiahFormat } from "@/middleware/helper"
import API from "@/components/general";

export default {
    // props: ["handleAdd", "list_product"],
    data() {
        return {
            dataWithCategory: []
        }
    },
    computed: {
        list_product() {
            console.log(this.$store.state.products)
            return this.$store.state.products
        },
        order_type() {
            return this.$store.state.order_type;
        },
        site() {
            return this.$store.state.site;
        },
    },
    mounted() {
        if (this.$store.state.products.length !== 0) {
            const originArr = this.$store.state.products
            const categoryArray = originArr.map(res => res.category)
            let uniqueCategoryArray = [...new Set(categoryArray)];
            const merged = uniqueCategoryArray.map(res => ({
                category: res,
                data: originArr.filter(item => item.category === res)
            }))
            // console.log(merged);
            return this.dataWithCategory = merged
        }
    },
    methods: {
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
    <div class="list-product-category">
        <small>
            <!-- {{ handleRupiahFormat(3000)}} -->
            <!-- <pre>{{JSON.stringify(list_product, null,2)}}</pre> -->
        </small>
        <div v-if="dataWithCategory.length > 0" v-for="(item,i) in dataWithCategory" :key="i">
            <p class="title-blue px">{{item.category}}</p>

            <div v-for="(val, j) in item.data" :key="j" class="border-bottom">
                <div class="wrap-prod px">
                    <div class="leftcon">
                        <p class=" prodtitle name">{{val.name}}</p>
                        <div class="wrapdesc">

                            <p class="desc">Bakmi Ayam Oven dengan Sambal Matah + Jeruk Limau dan lain lain oke mantap
                            </p>
                        </div>
                        <p class="prodtitle price">{{handleRupiahFormat(val.normal_price)}}</p>

                    </div>
                    <div class="rightcon">
                        <div class="wrapimg">
                            <img :src="val.main_image" alt="">
                            <v-btn depressed block class="bt-primary" color="#fd0"
                                @click="add_to_cart(val.id, val.variant[0].id, val.SKU, 1)">
                                Tambah
                            </v-btn>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
// small {
//     font-size: 10px;
// }

.list-product-category {
    padding: 10px 0;
    margin-bottom: 60px;

    .wrap-prod {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;

        .leftcon {
            .name {
                // margin-bottom: ;
                height: 40px;
                text-overflow: ellipsis;
            }

            .wrapdesc {
                overflow: hidden;
                // white-space: nowrap;


                height: 65px;


                .desc {
                    text-overflow: ellipsis !important;

                }
            }


            .price {}
        }

        .rightcon {
            width: 100px;
            margin-left: 10px;

            img {
                width: 100%;
                object-fit: cover;
                object-position: center;
                aspect-ratio: 1 / 1;
                border-radius: 8px;
            }
        }
    }
}
</style>