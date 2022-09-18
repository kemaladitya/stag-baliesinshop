


<template>
    <div class="loadingv2">
        <v-icon dense class="iconcart" color="grey lighten-2">mdi-cart-outline</v-icon>
        <p class=" mb-2 status">Keranjang belanja Anda kosong.</p>
    </div>
</template>

<script>
export default {
    // props: {
    //     loading: {
    //         type: Boolean,
    //     },
    // },
}
</script>

<style lang="scss" scoped>
.loadingv2 {
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .iconcart {
        // height: 70px;
        font-size: 100px;
        object-fit: contain;
    }
}
</style>