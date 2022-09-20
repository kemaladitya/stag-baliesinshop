<template>
    <div class="sendtobar px">
        <v-icon small>mdi-map-marker</v-icon>
        <p>
            Pengiriman ke
            <b v-if="customer">
                {{ customer.urban.toLowerCase() }},
                {{customer.city.toLowerCase() }}
            </b>
        </p>
    </div>
</template>

<script>

export default {
    computed: {
        customer() {
            return this.$store.state.customer;
        },
        merchant() {
            return this.$store.state.merchant;
        },
    },

}
</script>

<style lang="scss" scoped>
.sendtobar {
    background-color: $yellow-balesin;
    height: 35px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 55px;
    z-index: 5;

    p {
        font-size: 10px;

        b {
            text-transform: capitalize;
        }
    }

}
</style>