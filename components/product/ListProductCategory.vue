

<script>
import { rupiahFormat } from "@/middleware/helper"
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
        }
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
                            <v-btn depressed block class="bt-primary" color="#fd0">
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