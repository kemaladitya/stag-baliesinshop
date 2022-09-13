<template>
    <div class="loadingv2">
        <img :src="require('@/assets/images/loading/balesin-loading.gif')" width="80" loading=lazy />
        <div class="mb-2 status">Mohon menunggu...</div>
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

    img {
        height: 70px;
        object-fit: contain;
    }
}
</style>