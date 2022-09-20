<template>
    <div class="playcheckout">
        <TitleBar title="Checkout" />
        <div class="box px border-bottom py">
            <p class="title mb-1">
                Detail Pengiriman
            </p>
            <p class="desc">name</p>
            <div class="wrap-add ">

                <p class="desc">telp</p>
                <p class="desc">address address address addressaddress</p>
            </div>

        </div>

        <div class="wrap-order px border-bottom">
            <p class="title mb-1">
                Detail Pesanan
            </p>

            <div class="boxprod ">
                <div class="left">
                    <p class="name desc">
                        Bakmi Ayam Oven Sambal Matah
                    </p>
                    <p class="price prodtitle">
                        1 x Rp 42.000
                    </p>
                    <v-icon class="pointer">mdi-playlist-edit</v-icon>
                </div>
                <div class="right">
                    <img src="https://picsum.photos/200" alt="">
                </div>
            </div>
            <div class="boxprod ">
                <div class="left">
                    <p class="name desc">
                        Bakmi Ayam Oven Sambal Matah
                    </p>
                    <p class="price prodtitle">
                        1 x Rp 42.000
                    </p>
                    <v-icon class="pointer">mdi-playlist-edit</v-icon>
                </div>
                <div class="right">
                    <img src="https://picsum.photos/200" alt="">
                </div>
            </div>
        </div>

        <div class="wrap-vcr border-bottom">
            <v-btn block class="voucherbut" dense @click="handleSheetVoucher">
                <div class="wraptitle">
                    <div class="imagevcr">
                        <img src="~/assets/images/checkout/redVoucher.png" />
                    </div>
                    <p>You have 2 available vouchers</p>
                </div>
                <v-icon color="white">mdi-chevron-right</v-icon>
            </v-btn>
        </div>

        <div class="boxsub px py d-flex justify-space-between">
            <p class="prodtitle">Subtotal</p>
            <p class="prodtitle">Rp 230.000</p>
        </div>

        <div class="boxsub border-bottom px py d-flex justify-space-between">
            <p class="prodtitle">Voucher</p>
            <p class="text-blue">Choose Voucher ></p>
        </div>

        <div class="boxsub border-bottom px py d-flex justify-space-between">
            <p class="prodtitle">Kurir</p>
            <p class="text-blue">Pilih Kurir ></p>
        </div>

        <div class="boxsub border-bottom px py d-flex justify-space-between">
            <p class="prodtitle">Pembayaran</p>
            <p class="text-blue">Pilih Pembayaran ></p>
        </div>

        <div class="boxsub px py d-flex justify-space-between">
            <p class="total">TOTAL HARGA</p>
            <p class="total">Rp 230.000</p>
        </div>
        <div class="px">
            <v-btn block class="btn-lg" disabled>Proses Pembayaran</v-btn>
        </div>

        <v-bottom-sheet inset max-width="420px" v-model="sheet">
            <div class="bottom-sheet px">
                <h1>sheet dottom</h1>
                <h1>sheet dottom</h1>
                <h1>sheet dottom</h1>
                <h1>sheet dottom</h1>
            </div>
        </v-bottom-sheet>

    </div>
</template>

<script>
import TitleBar from '~/components/shared/TitleBar.vue';
export default {
    layout: "layoutv2",
    components: { TitleBar },
    data() {
        return {
            sheet: false
        }
    },
    methods: {
        handleSheetVoucher() {
            this.sheet = !this.sheet
        }
    },
}

</script>

<style lang="scss" scoped>
.playcheckout {
    padding-bottom: 30px;

    .box {
        .wrap-add {
            max-width: 182px;
        }
    }

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

    .wrap-vcr {
        padding: 14px 16px;

        .voucherbut {
            background-color: $red-balesin;
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

    .total {
        font-size: 16px;
        font-weight: 700 !important;
    }

    .text-blue {
        cursor: pointer;
        color: $blue-balesin;
        font-size: 12px;
        font-weight: 700;
    }

}

.bottom-sheet {
    padding-bottom: 40px;
    background-color: white;
    // border-radius: 0 0 20px 20px;
}
</style>