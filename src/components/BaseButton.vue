<template>
  <button @click="$emit('click')">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
  },
};
</script>

<style scoped>
button {
  display: block;
  margin: 1rem auto;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  border: 0;
}
</style>