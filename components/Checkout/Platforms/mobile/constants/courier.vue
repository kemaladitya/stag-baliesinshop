<template>
  <div>
    <div class="d-flex flex-row mt-4 mb-4 pa-1">
      <div style="font-weight: 600; width: 50%">
        <v-btn
          color="#fd0"
          style="text-transform: none"
          :class="!courier.selected ? 'pulse-button' : null"
          block
          depressed
          @click="select_courier_dialog = true"
        >
          Kurir
        </v-btn>
      </div>
      <v-spacer />
      <div v-if="courier.loading" class="pt-1">
        <v-progress-circular
          :size="25"
          color="primary"
          indeterminate
        />
      </div>
      <div v-else>
        <div v-if="!courier.selected" class="pt-2" style="font-weight: 600; align-self: center">
          <div style="font-size: 13px">Belum Dipilih</div>
        </div>
        <div v-else style="font-weight: 600; align-self: center">
          <div v-if="courier.selected.status">
            <div class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 11px">{{ courier.selected.name }} | {{ courier.selected.service }}</div>
              <v-icon class="ml-1" small>mdi-truck</v-icon>
            </div>
            <div class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 13px">Rp {{ courier.selected.price.toLocaleString().replace(/,/g, '.') }}</div>
              <v-icon class="ml-1" small>mdi-cash</v-icon>
            </div>
            <div v-if="!courier.selected.custom" class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 11px">{{ courier.selected.range }}</div>
              <v-icon class="ml-1" small>mdi-clock-time-four</v-icon>
            </div>
          </div>
          <div v-else style="font-size: 9px; max-width: 120px; color: red">
            {{ courier.selected.message }}
          </div>
        </div>
      </div>
    </div>

    <v-divider />

    <v-bottom-sheet
      :value="select_courier_dialog"
      @click:outside="select_courier_dialog = false"
    >
      <v-sheet style="text-align: left">
        <div class="d-flex flex-row">
          <div
            class="pl-2"
            style="align-self: center; font-size: 13px; font-weight: 600"
          >
            Pilih Kurir
          </div>
          <v-spacer />
          <v-btn
            icon
            text
            color="red"
            @click="select_courier_dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div
          class="pb-2"
          style="overflow-y: scroll !important; max-height: 450px !important;"
        >
          <v-card
            v-for="(cr, idx) in courier.lists"
            :key="idx"
            :class="!idx ? 'pb-0' : null"
            class="pa-2 pl-0"
            flat
            style="text-align:left"
          >
            <v-card
              class="ml-2 pa-2"
              style="font-size: 13px; font-weight: 600"
              outlined
              @click="select_courier(cr)"
            >
              {{ cr.split('|').join(' - ') }}
            </v-card>
          </v-card>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  props: {
    courier: {
      type: Object,
      required: true,
    },

    select: {
      type: Function,
      required: true,
    },
  },

  data: () => ({
    select_courier_dialog: false,
  }),

  computed: {
    store() {
      return this.$store.state.store
    },
  },

  methods: {
    select_courier(cour) {
      this.select(cour)
      this.select_courier_dialog = false
    }
  }
}
</script>
