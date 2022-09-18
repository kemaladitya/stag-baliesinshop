<template>

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
</template>

<script>
export default {
  computed: {
    package_cart() {
      return this.$store.state.package_cart
    },

    list_product() {
      return this.$store.state.products
    },
  },

  methods: {
    item_parser(items) {
      let total = 0
      const product = []

      items.forEach(el => {
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
            qty: el.qty
          })

          total += (find[0].discount_price || find[0].normal_price) * el.qty
        }
      })

      return { product, total }
    },
  }
}
</script>

<style lang="scss" scoped>
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
</style>