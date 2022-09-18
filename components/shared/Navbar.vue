<template>
    <div class="navbar px">
        <img v-if="store" :src="store.image" class="logo" alt="">
        <!-- <v-badge v-if="cart_on_headers" id="b-shop-cart-badge" class="headers--badge" top="-5px" color="red darken-1"
            min-width="16px" height="16px" bordered overlap :icon="cart_qty_item">
            <v-btn :to="cart_url" :ripple="false" max-width="38" min-width="38" color="#fcfcfc"
                class="headers--badge--cart-icon" rounded depressed>
                <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
        </v-badge> -->
    </div>
</template>

<script>
export default {

    computed: {
        cart_url() {
            const { params, query } = this.$route;

            return `/site/${params.store}/cart?u=${query.u}&mtd=view&src=${query.src}&c=${query.c}`;
        },

        merchant_url() {
            const { params, query } = this.$route;
            const { market_id } = this.merchant;

            return `/site/${params.store}/merchant?market=${market_id}&u=${query.u}&mtd=view&src=${query.src}&c=${query.c}`;
        },

        checkout_url() {
            const { params, query } = this.$route;

            return `/site/${params.store}/checkout?u=${query.u}&mtd=view&src=${query.src}&c=${query.c}`;
        },

        site() {
            return this.$store.state.site
        },

        store() {
            return this.$store.state.store
        },

        order_type() {
            return this.$store.state.order_type
        },

        merchant() {
            return this.$store.state.merchant
        },

        cart_on_headers() {
            return this.$route.name === 'site-store-pid' ||
                this.$route.name === 'site-store-checkout'
        },

        cart() {
            return this.$store.state.cart
        },

        subscription_cart() {
            return this.$store.state.subscription_cart
        },

        package_cart() {
            return this.$store.state.package_cart
        },

        cart_qty_item() {
            let total_item = 0

            if (this.order_type === 'single-order') {
                this.cart.forEach(element => {
                    total_item += element.qty
                })
            } else if (this.order_type === 'subscription-order') {
                this.subscription_cart.forEach(el => {
                    el.items.forEach(item => {
                        total_item += item.qty
                    })
                })
            } else if (this.order_type === 'package-order') {
                this.package_cart.forEach(el => {
                    el.items.forEach(item => {
                        total_item += item.qty
                    })
                })
            }

            return String(total_item)
        },

        home_url() {
            const { store, uuid, source, category } = this.$store.state.site

            return `/site/${store}?u=${uuid}&src=${source}&c=${category}`
        }
    },
}
</script>
    

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    z-index: 6;
    position: sticky;
    top: 0;
    width: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;
    // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    .logo {
        height: 40px;
        object-fit: contain;
        border-radius: 100%;
    }
}
</style>