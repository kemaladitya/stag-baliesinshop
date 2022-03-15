<template>
  <div>
    <div style="font-size: 10px; text-align: left; padding-left: 10px; font-style: italic; color: grey">
      {{ setup.footer_message }}
    </div>
    <div class="d-flex flex-row">
      <div
        v-for="detail in setup.rules.detail"
        v-show="type == detail.type"
        :key="detail.type"
        class="pb-2 pt-1"
        style="font-size: 10px; text-align: left; padding-left: 10px; font-style: italic;"
      >
        <div class="d-flex flex-row">
          <div :style="total < detail.min ? 'color: red;' : 'color: grey;'">
            Min. order {{ detail.min / 1000 }}k
          </div>
          <div class="ml-2 mr-2" >|</div>
          <div :style="total > detail.max ? 'color: red;' : 'color: grey;'">
            Max. order {{ detail.max / 1000 }}k
          </div>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div
        class="pa-2 pt-4"
        style="text-align: right; font-size: 10px"
        :style="total ? 'color: rgb(33, 150, 243); font-weight: bold' : 'color: grey'"
      >
        Total : Rp {{ total.toLocaleString().replace(/,/g, '.') }}, -
      </div>
    </div>
    <v-card class="d-flex flex-row mt-0 pa-2 pt-0" flat>
      <v-spacer></v-spacer>
      <v-btn
        class="mr-2"
        color="black"
        depressed
        small
        text
        @click="cancel"
      >
        Kembali
      </v-btn>
      <v-btn
        color="#fd0"
        style="color: black !important"
        depressed
        small
        :disabled="validated"
        @click="submit"
      >
        Tambah
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },

    setup: {
      type: Object,
      required: true
    },

    total: {
      type: Number,
      required: true
    },

    cancel: {
      type: Function,
      required: true
    },

    submit: {
      type: Function,
      required: true
    },

    validated: {
      type: Boolean,
      required: true
    }
  }
}
</script>