<template>

    <div class="detail-product ">
        <TitleBar title="Detail Produk" />
        <img src="https://picsum.photos/500/500" alt="" class="imgprod">
        <div class="titlebox border-bottom px">
            <p class="title">tithe namndfm nsafnasl dsfsdfs fdsfsdfs fdsfsdfsd</p>
            <p class="title price">Rp2000</p>
        </div>
        <div class="box px border-bottom">
            <p class="prodtitle">
                Description
            </p>
            <p class="desc">
                Bakmi Ayam Oven dengan Sambal Matah + Jeruk Limau
            </p>
        </div>

        <div class="boxfix px border-bottom">
            <p class="prodtitle">
                Size
            </p>
            <p class="desc">One size</p>
        </div>

        <div class="boxfix px border-bottom">
            <p class="prodtitle">
                Variant - {{variant}}
            </p>
            <div class="wrapsel">
                <v-select class="selection-field" dense hide-details outlined v-model="variant" label="" :items="opt"
                    @input="itemChanged" append-icon="mdi-chevron-down"></v-select>

            </div>
        </div>

        <div class="boxfix px border-bottom">
            <p class="prodtitle">
                Quantity
            </p>
            <div class="wrapqty">
                <v-btn icon class="iconbar-qty" @click="">
                    <v-icon color="#4caf50">mdi-plus</v-icon>
                </v-btn>
                <p class="items">20</p>
                <v-btn icon class="iconbar-qty" @click="">
                    <v-icon color="#4caf50">mdi-minus</v-icon>
                </v-btn>

            </div>
        </div>

        <div class="box px">
            <p class="prodtitle notes">
                Notes <span>(Optional)</span>
            </p>
            <v-textarea dense class="textareacus" rows="3" counter label="" outlined :rules="rules" :value="note">
            </v-textarea>
        </div>
        <div class="px">
            <v-btn block class="bt-primary btn-lg" color="#fd0">
                Tambah ke keranjang
            </v-btn>
        </div>



    </div>
</template>

<script>
import TitleBar from '~/components/shared/TitleBar.vue';
import Select from '~/components/general/select.vue';
export default {
    layout: "layoutv2",
    components: { TitleBar, Select },
    data() {
        return {
            variant: '',
            opt: [
                { text: "Name", value: 'name' },
                { text: "Number", value: 'number' },
                { text: "Inputs", value: 'inputs' }
            ],
            rules: [v => v.length <= 200 || 'Max 200 characters'],
            note: 'hi,',
        }
    },
    methods: {
        itemChanged(item) {
            console.log(item)
        }
    },
}
</script>

<style lang="scss" scoped>
#appcus {
    all: unset !important;
}

.detail-product {
    padding-bottom: 50px;

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
                border: 1px solid $green;
            }
        }
    }

}
</style>