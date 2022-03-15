<template>
  <div>
    <v-card
      v-for="(item, index) in lists"
      :key="index"
      class="d-flex flex-row mb-1"
      outlined
    >
      <!-- <div class="ma-2 mt-4">
        <v-img :src="item.main_image" width="65" height="65" />
      </div> -->
      <div class="pa-3 pl-2" style="text-align: left">
        <div
          style="
            max-width: 130px;
            display: inline-block;
            min-width: 130px;
            white-space: nowrap;
            overflow: hidden !important;
            text-overflow: ellipsis;
            min-width: 100%;
            font-size: 13px;
          "
        >
          {{ item.name }}
        </div>
        <div
          style="
            font-size: 12px;
            max-width: 130px;
            display: inline-block;
            min-width: 130px;
            white-space: nowrap;
            overflow: hidden !important;
            text-overflow: ellipsis;
          "
        >
          {{ item.detail_id.name }}
        </div>
        <div style="font-size: 13px; font-weight: 600">
          Rp {{
            item.discount_price
              ? item.discount_price.toLocaleString().replace(/,/g, '.')
              : item.normal_price.toLocaleString().replace(/,/g, '.')
          }}, -
        </div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex flex-row pl-1 pr-2" style="align-self: center">
        <div>
          <v-btn
            color="success"
            style="padding: 0; border-color: #4caf50 !important"
            max-width="26"
            width="26"
            min-width="26"
            max-height="26"
            height="26"
            min-height="26"
            depressed
            outlined
            rounded
            small
            text
            :disabled="!item.qty"
            @click="changeqty(false, index)"
          >
            <v-icon small>mdi-minus</v-icon>
          </v-btn>
        </div>
        <v-card
          class="pt-1 text-center"
          min-width="30"
          style="font-size: 14px"
          flat
        >
          {{ item.qty }}
        </v-card>
        <div>
          <v-btn
            color="success"
            style="padding: 0; border-color: #4caf50 !important"
            max-width="26"
            width="26"
            min-width="26"
            max-height="26"
            height="26"
            min-height="26"
            depressed
            outlined
            rounded
            small
            text
            @click="changeqty(true, index)"
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      required: true,
    },

    changeqty: {
      type: Function,
      required: true
    }
  }
}
</script>