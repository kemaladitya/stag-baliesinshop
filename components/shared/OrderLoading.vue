<template>
    <div class="loadingv2">
        <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
        <p style="">Pesanan kamu sedang diproses,</p>
        <p style="">harap menunggu untuk beberapa</p>
        <p style="">saat.</p>
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
    background: white;
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        height: 100px;
        object-fit: contain;
    }
}
</style>