<template>
    <div>
        <v-dialog :value="voucher.form" persistent max-width="100%">
            <v-card class="b-font">
                <center class="pa-4 pb-3" style="font-size: 15px; font-weight: 600">
                    Ketik Kode Voucher
                </center>
                <v-card class="pa-4 pt-2" flat>
                    <v-text-field v-model="voucher_code" placeholder="ex. bls1232" outlined hide-details autofocus />
                </v-card>
                <v-card-actions>
                    <v-card class="d-flex flex-row" width="100%" flat>
                        <v-card class="pa-1 pl-0" width="50%" flat>
                            <v-btn color="grey lighten-4" style="text-transform: capitalize" width="100%" depressed
                                @click="submit(false, null)">
                                Batal
                            </v-btn>
                        </v-card>
                        <v-card class="pa-1 pr-0" width="50%" flat>
                            <v-btn color="#FD0" style="text-transform: capitalize" width="100%" depressed
                                @click="submit(true, voucher_code)">
                                Lanjut
                            </v-btn>
                        </v-card>
                    </v-card>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <div class="wrap-vcr border-bottom">
            <v-btn block class="voucherbut" dense @click="select_voucher = true" :disabled="voucher.lists.length===0"
                :style="!voucher.selected ?'background: #CC0000' : 'background: #009900'">
                <div class="wraptitle">
                    <div class="imagevcr">
                        <img v-if="!voucher.selected" src="~/assets/images/checkout/redVoucher.png" />
                        <img v-else src="~/assets/images/checkout/greenVoucher.png" />
                    </div>
                    <p v-if="voucher.selected">1 Voucher Applied</p>
                    <p v-else>You have {{voucher.lists.length}} available vouchers</p>
                </div>
                <p class="offtext" v-if="voucher.selected">{{ voucher.selected.name.replaceAll('OFF', '% OFF') }}</p>
                <v-icon v-else color="white">mdi-chevron-right</v-icon>

            </v-btn>
        </div>
        <!-- <small>
            <pre>{{JSON.stringify(voucher.selected, null,2)}}</pre>
        </small> -->
        <v-progress-linear v-if="voucher.loading" class="mt-1" color="primary" indeterminate />


        <!-- {{subtotal}} -->

        <!-- 
        <pre>
            <small>
                {{JSON.stringify(voucher, null,2)}}
            </small>
        </pre> -->

        <!-- 
        <v-btn style="background: #fd0; font-weight: 600" depressed block @click="select_voucher = true">
            GUNAKAN VOUCHER
        </v-btn> -->
        <!-- <div v-else>
            <br v-if="!voucher.selected" />
            <div v-if="voucher.selected" style="text-align: left">
                <div class="ma-1 ml-0 pl-1 mr-0" style="
              background-color: #3276f7;
              border-radius: 2px;
              font-size: 12px;
              width: fit-content;
              min-width: 200px;
              color: white;
            ">
                    * {{ voucher.selected.name }} Voucher applied
                </div>
                <div class="ma-1 ml-0 pl-1 mr-0" style="
              background-color: #3276f7;
              border-radius: 2px;
              font-size: 12px;
              width: fit-content;
              min-width: 200px;
              color: white;
            ">
                    * kamu hemat Rp {{ voucher.selected.value.toLocaleString().replace(/,/g, '.') }}, -
                </div>
            </div>
        </div> -->

        <v-bottom-sheet inset max-width="420px" class="" :value="select_voucher"
            @click:outside="select_voucher = false">
            <div class="px bottomsheet">
                <div class="d-flex header mt-1">
                    <div class="d-flex align-center">
                        <img class="logo" src="~/assets/images/checkout/redVoucher.png" /> Available Voucher
                    </div>
                    <v-btn icon text color="red" @click="select_voucher = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>
                <div class="pb-5" style="overflow-y: scroll !important; max-height: 400px !important;">
                    <v-card v-for="(vc, idx) in voucher.lists" :key="vc.id" :class="!idx ? 'pb-0' : null" :disabled="
                      !vc.categories_product.includes(site.category)
                      && !vc.qty
                    " flat>
                        <div :class="vc.show_select ? '' : null">
                            <div v-if="vc.show_select" class="vocard" outlined @click="use_voucher(true, vc.name)">
                                <p class="vocname">
                                    {{ vc.name.replaceAll('OFF', ' OFF') }}
                                </p>
                                <p class="desc" v-html="vc.description" />
                                <!-- <p class="desc">· Berlaku sampai {{ $dateFns.format(new Date(), 'dd MMMM') }}</p> -->
                                <!-- <small>
                                    <pre>{{JSON.stringify(vc, null,2)}}</pre>
                                </small> -->
                            </div>
                        </div>
                    </v-card>
                    <v-card v-if="voucher.is_custom_voucher" class="pa-2 pl-0" flat>
                        <v-card class="ml-2 pa-2" outlined @click="use_voucher(null, null)">
                            <div class="mb-1" style="font-size: 13px; font-weight: 600">
                                Ketik Kode Voucher
                            </div>

                            <div style="font-size: 12px">
                                Ketik Kode Voucher yang Anda miliki untuk dapatkan promo.
                            </div>
                        </v-card>
                    </v-card>
                </div>
            </div>
        </v-bottom-sheet>
    </div>
</template>
  
<script>
export default {
    props: {
        voucher: {
            type: Object,
            required: true,
        },

        use_custom_voucher: {
            type: Function,
            required: true,
        },

        submit: {
            type: Function,
            required: true,
        },
    },

    data: () => ({
        select_voucher: false,
        voucher_code: '',
    }),

    computed: {
        site() {
            return this.$store.state.site
        },
    },

    methods: {
        use_voucher(status, params) {
            this.select_voucher = false

            if (!status && !params) {
                this.use_custom_voucher()
            } else {
                this.submit(status, params)
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.bottomsheet {
    background: white;

    .vocard {
        padding: 5px 16px;
        border-radius: 6px;
        border: 1px solid $smoke;
        cursor: pointer;

        .desc {
            font-weight: 700 !important;
            font-size: 10px;
        }

        .vocname {
            color: $red-balesin;
            text-transform: uppercase;
            font-weight: 700;
        }
    }

    .header {
        font-size: 12px;
        font-weight: 700;
        justify-content: space-between;

        .logo {
            margin-right: 8px;
            height: 20px;
            object-fit: contain;
        }
    }
}

.wrap-vcr {
    padding: 14px 16px;

    .offtext {
        font-weight: 700;
        color: white;
    }

    .voucherbut {
        border-radius: 100px;
        height: 50px;
        display: flex;
        justify-content: space-between;

        .wraptitle {
            display: flex;
            align-items: center;

            .imagevcr {
                height: 36px;
                width: 36px;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100%;
                margin-right: 8px;

                img {
                    height: 28px;
                    object-fit: contain;
                }
            }

            p {
                color: white;
                text-transform: capitalize;
                letter-spacing: normal;
                font-size: 12px;
                font-weight: 600;
            }
        }

    }

}

.boxsub {
    height: 57px !important;
}
</style>
