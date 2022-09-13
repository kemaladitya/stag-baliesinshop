<template>
    <div class="hellobar px">
        <p v-if="customer && merchant">
            hi {{customer.name.split(" ")[0]}} kamu sedang berbelanja di
            <b>{{merchant.name}}</b>
        </p>
        <!-- <pre>
            {{JSON.stringify(customer,null,2)}}
        </pre> -->
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
.hellobar {
    height: 40px;
    background: $light-grey;
    display: flex;
    align-items: center;
    position: sticky;
    top: 55px + 35px;
    z-index: 5;


    p {
        font-weight: 300;
        line-height: 13px;
    }
}
</style>