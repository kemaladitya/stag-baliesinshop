<template>
    <div class="loadingv2">
        <img class="mb-4"
            src="https://www.clipartmax.com/png/full/120-1203855_error-handling-in-swift-error-logo-png.png" />
        <p style="">Proses order gagal,</p>
        <p style="">mohon untuk memuat ulang halaman</p>
        <p style="">jika tetap gagal, silahkan menghubungi customer service.</p>
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