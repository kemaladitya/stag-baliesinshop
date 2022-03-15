<template>
  <div>
    <v-text-field
      :value="value"
      :rules="rules"
      :label="title"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabler"
      class="cs-text-field"
      hide-details
      @input="event_handler(name, $event)"
    />
    <div class="alert-text">{{ requirement }} &nbsp;</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    title: String,
    placeholder: String,
    name: String,
    rules: Array,
    requirement: String,
    event_handler: Function,
    disabler: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.cs-text-field {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: normal;
}

.alert-text {
  font-size: 10px;
  color: red;
}
</style>