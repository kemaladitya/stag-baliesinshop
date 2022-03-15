<template>
  <div>
    <v-select
      :value="value"
      :label="title"
      :placeholder="placeholder"
      :disabled="disabler"
      :items="items"
      :name="name"
      :rules="rules"
      class="selection-field"
      hide-details
      @change="event_handler(name, $event)"
    />
    <v-progress-linear v-if="loading" class="mb-3" indeterminate color="blue darken-2" />
    <div class="alert-text">{{ requirement }} &nbsp;</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: String,
    requirement: String,
    loading: Boolean,
    items: Array,
    disabler: Boolean,
    event_handler: Function,
    title: String,
    placeholder: String,
    rules: Array,
  },
}
</script>

<style lang="scss">
.selection-field {
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: normal;
}

.alert-text {
  font-size: 10px;
  color: red;
}
</style>