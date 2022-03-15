<template>
  <div :class="mtop">
    <div class="form--label">
      {{ b_title }}
      <span class="form--required">{{ required }}</span>
    </div>
    <div class="mt-1">
      <v-text-field
        :value="value"
        :readonly="readonly"
        :placeholder="placeholder"
        :disabled="disabled"
        :style="readonly ? 'background: #e9ecef' : 'background: white'"
        class="form--field"
        hide-details
        outlined
        dense
        @input="event_handler(name, $event)"
      />
      <div class="form--details">{{ details }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    b_title: String,
    mtop: String,
    placeholder: String,
    name: String,
    value: String,
    required: String,
    details: String,
    readonly: Boolean,
    disabled: Boolean,
    event_handler: Function,
  }
}
</script>