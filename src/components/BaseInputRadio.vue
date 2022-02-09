<template>
  <div class="radio-unit-container">
    <input type="radio" :name="name" :id="id" @click="$emit('onClick')" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    label: { type: String, required: true },
  },
  emits: ["onClick"],
};
</script>

<style scoped>
.radio-unit-container {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 8%;
}

.radio-unit-container input {
  margin: 0;
  width: 18px;
  height: 18px;
  overflow: hidden;
  cursor: pointer;
}

.radio-unit-container label {
  margin: 5px 20px;
  height: auto;
  width: 200px;
  text-align: left;
  font-size: 1.2rem;
  cursor: pointer;
  visibility: visible;
}
</style>