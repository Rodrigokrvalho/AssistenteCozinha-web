<template>
  <select @change="$emit('selected', $event.target.value)">
    <option v-for="item in items" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ["selected"],
  mounted() {
    this.$emit("selected", this.items[0].value);
  },
};
</script>