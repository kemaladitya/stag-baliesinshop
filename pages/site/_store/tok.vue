
<script>
import SendToBar from '~/components/product/SendToBar.vue';
import HelloBar from '~/components/product/HelloBar.vue';
import SlickProduct from '~/components/product/SlickProduct.vue';
import ListProductCategory from '~/components/product/ListProductCategory.vue';
import FloatItemButton from '~/components/product/FloatItemButton.vue';
export default {
    layout: "layoutv2",
    components: { SendToBar, HelloBar, SlickProduct, ListProductCategory, FloatItemButton },
    data() {
        return {
            items: 0,
            dataProd: [
                { id: 1, name: 'Bakmi Ayam Oven Sambal Matah', price: 'Rp 45.000', img: 'https://picsum.photos/500/500' },
                { id: 2, name: 'Bakmi Ayam Oven Sambal ', price: 'Rp 45.000', img: 'https://picsum.photos/400/500' },
                { id: 3, name: 'Bakmi Sambal Matah', price: 'Rp 45.000', img: 'https://picsum.photos/200/500' },
                { id: 3, name: 'Bakmi Sambal Matah', price: 'Rp 45.000', img: 'https://picsum.photos/200/500' },
                { id: 3, name: 'Bakmi Sambal Matah', price: 'Rp 45.000', img: 'https://picsum.photos/200/500' },
                { id: 4, name: 'Ayam Oven ', price: 'Rp 45.000', img: 'https://picsum.photos/500/600' },
                { id: 4, name: 'Ayam Oven ', price: 'Rp 45.000', img: 'https://picsum.photos/500/600' },
                { id: 4, name: 'Ayam Oven ', price: 'Rp 45.000', img: 'https://picsum.photos/500/600' },
                { id: 4, name: 'Ayam Oven ', price: 'Rp 45.000', img: 'https://picsum.photos/500/600' },
                { id: 4, name: 'Ayam Oven ', price: 'Rp 45.000', img: 'https://picsum.photos/500/600' },
            ]
        }
    },
    methods: {
        handleAdd() {
            return this.items = this.items + 1
        },
    },
    computed: {
        list_product() {
            return this.$store.state.products
        },
    },

}
</script>
    
<template>
    <div class="productv2">
        <SendToBar />
        <HelloBar />
        <!-- <button @click="remove">remove</button> -->
        <pre>{{JSON.stringify(list_product, null,2)}}</pre>
        <SlickProduct :dataProd="dataProd" />
        <ListProductCategory :handleAdd="handleAdd" />
        <FloatItemButton :items="items" />
    </div>
</template>
    
    
<style lang="scss" scoped>
.productv2 {
    position: relative;
}
</style>