<template>
  <v-sheet>
    <div class="d-flex flex-row">
      <div
        class="pa-2"
        style="align-self: center; font-size: 13px; font-weight: 600"
      >
        Pilih Produk
        <div style="font-size: 11px; color: grey">
          {{ selectedsubsdate }}
        </div>
      </div>
      <v-spacer />
      <v-btn
        class="mt-2"
        icon
        text
        color="red"
        @click="changehandler('products', false)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-divider />
    <div class="pa-2" style="overflow-y: scroll; max-height: 70vh">
      <div v-for="(l_prod, idx) in selecteddate" :key="idx">
        <v-card class="d-flex flex-row mb-2 pr-1" outlined>
          <v-card class="d-flex flex-row" flat width="100%">
            <v-card class="ma-2 mt-3" flat>
              <v-img :src="l_prod.main_image" width="45" height="45" />
            </v-card>
            <div class="pa-2" style="width: 100%">
              <div
                style="
                  font-size: 12px;
                  max-width: 350px;
                  min-width: 150px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                  font-weight: 600;
                "
              >
                {{ l_prod.name }}
              </div>
              <div
                style="
                  font-size: 12px;
                  max-width: 350px;
                  min-width: 150px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                  color: grey;
                "
              >
                {{ l_prod.name }}
              </div>
              <div style="font-size: 12px; font-weight: 600">
                Rp.
                {{
                  l_prod.normal_price.toLocaleString().replace(/,/g, '.')
                }}, -
              </div>
            </div>
            <div
              id="b-checkbox-subs-product"
              class="d-flex flex-row pl-1 pr-1"
              style="align-self: center"
            >
              <v-checkbox
                v-model="l_prod.select_date"
                color="primary"
                hide-details
                dense
                @change="selectatsubs(idx, $event)"
              />
            </div>
          </v-card>
        </v-card>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    changehandler: {
      type: Function,
      required: true
    },

    selectatsubs: {
      type: Function,
      required: true
    },

    selectedsubsdate: {
      type: String,
      required: true
    },

    selecteddate: {
      type: Array,
      required: true
    }
  }
}
</script>