<template>
  <div class="question">
    <label :for="id" :id="id" class="invisible">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String },
    id: { type: String, required: true },
    placeholder: { type: String },
    value: { type: String || Number, required: true },
    type: { type: String, default: "text" },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  font-size: 1.3rem;
  border: none;
  border-bottom: solid 2px var(--blue);
  padding: 0px 10px 3px;
  margin: 10px 0 10px;
  outline: none;
  background-color: transparent;
}

input:focus {
  border-bottom: solid 2px var(--blue-light);
  color: var(--green-dark);
  padding: 3px 10px 3px;
}

input::placeholder {
  color: rgb(87, 87, 87);
}
</style>