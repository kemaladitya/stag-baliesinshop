<template>
    <div>
        <PackageOrderV2 v-if="order_type === 'package-order'" />
        <SingleOrderV2 v-if="order_type === 'single-order'" />
        <SubcriptionOrderV2 v-if="order_type === 'subscription-order'" :voucher="voucher" />
    </div>

</template>

<script>
import PackageOrderV2 from './order-type/PackageOrderV2.vue'

import SingleOrderV2 from './order-type/SingleOrderV2.vue'
import SubcriptionOrderV2 from './order-type/SubcriptionOrderV2.vue'
export default {
    props: {
        voucher: {
            type: Object,
            required: true,
        },
        courier: {
            type: Object,
            required: true,
        },
    },

    components: {
        PackageOrderV2,
        SingleOrderV2,
        SubcriptionOrderV2
    },

    computed: {
        store() {
            return this.$store.state.store
        },

        order_type() {
            return this.$store.state.order_type
        },

        list_product() {
            return this.$store.state.products
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

        parsed_lists() {
            let total = 0
            const product = []

            this.cart.forEach(el => {
                const find = this.list_product.filter(
                    product => product.id === el.id && product.SKU === el.sku
                )

                if (find.length) {
                    product.push({
                        id: find[0].id,
                        sku: find[0].SKU,
                        detail_id: find[0].variant[0],
                        main_image: find[0].main_image,
                        name: find[0].name,
                        normal_price: find[0].normal_price,
                        discount_price: find[0].discount_price,
                        is_promo: find[0].is_promo,
                        qty: el.qty,
                        express_delivery: find[0].express_delivery,
                        express_delivery_setup: find[0].express_delivery_setup,
                    })

                    total += (find[0].discount_price || find[0].normal_price) * el.qty
                }
            })

            return { product, total }
        },

        user_notes() {
            return this.$store.state.user_notes
        },

        general_total_order() {
            let total = 0

            if (this.order_type === 'single-order') {
                this.cart.forEach(el => {
                    const find = this.list_product.filter(
                        product => product.id === el.id && product.SKU === el.sku
                    )

                    if (find.length) {
                        total += (find[0].discount_price || find[0].normal_price) * el.qty
                    }
                })
            } else if (this.order_type === 'subscription-order') {
                this.subscription_cart.forEach(({ items }) => {
                    items.forEach(el => {
                        const find = this.list_product.filter(
                            product => product.id === el.id && product.SKU === el.sku
                        )

                        if (find.length) {
                            total += (find[0].discount_price || find[0].normal_price) * el.qty
                        }
                    })
                })
            } else if (this.order_type === 'package-order') {
                this.package_cart.forEach(el => {
                    el.items.forEach(item => {
                        const find = this.list_product.filter(
                            product => product.id === item.id && product.SKU === item.sku
                        )

                        if (find.length) {
                            total += (find[0].discount_price || find[0].normal_price) * item.qty
                        }
                    })
                })
            }

            return total
        },

        validate_total() {
            if (this.order_type === 'single-order') {

                if (this.courier && this.courier.name === "Express Delivery") {
                    return this.check_delivery_order();
                }

                if (this.general_total_order < this.store.min_order) {
                    return `Minimum pembelian Rp ${this.store.min_order.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`
                }

                if (this.general_total_order > this.store.max_order) {
                    return `Maksimum pembelian Rp ${this.store.max_order.toLocaleString().replace(/,/g, '.')}.`
                }
            } else if (this.order_type === 'subscription-order') {
                let is_valid = 1

                this.subscription_cart.forEach(el => {
                    if (is_valid === 1) {
                        let total = 0

                        el.items.forEach(item => {
                            const find = this.list_product.filter(product => product.id === item.id && product.SKU === item.sku)

                            total += ((find[0].discount_price || find[0].normal_price) * item.qty)
                        })

                        if (total > this.store.max_order) {
                            is_valid = 2
                        }

                        if (total < this.store.min_order) {
                            is_valid = 0
                        }
                    }
                })

                if (is_valid === 0) {
                    return `Minimum pembelian Rp ${this.store.min_order.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`
                } else if (is_valid === 2) {
                    return `Maksimum pembelian Rp ${this.store.max_order.toLocaleString().replace(/,/g, '.')}.`
                }

                return ''
            } else if (this.order_type === 'package-order') {
                if (this.store.customize_setup) {
                    const order_type = this.package_cart[0].type
                    const find_rules = JSON.parse(this.store.customize_setup).packaging.rules.detail.filter(el => el.type === order_type)

                    if (find_rules[0].min > this.general_total_order) {
                        return `Minimum pembelian Rp ${find_rules[0].min.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`
                    } else if (find_rules[0].max < this.general_total_order) {
                        return `Maksimum pembelian Rp ${find_rules[0].max.toLocaleString().replace(/,/g, '.')}.`
                    }
                }
            }

            return ''
        }
    },

    mounted() {
        this.check_delivery_order();
    },

    methods: {
        check_delivery_order() {
            const list_items = [];

            this.parsed_lists.product.forEach(_ => {
                if (_.express_delivery) {
                    if (this.general_total_order < _.express_delivery_setup.min_order) {
                        list_items.push(_.name)
                    }
                }
            });

            const message = "Minimum pembelian " + list_items.join((list_items.length == 2 ? " dan " : ", ")) + " belum tercapai. Silakan tambah lagi pesanan Anda.";

            return list_items.length ? message : "";
        },
    },
}
</script>

<style lang="scss" scoped>

</style>