<template>
  <div class="ingredient-container">
    <button @click="$emit('removeIngredient')">X</button>
    <span>{{ ing }}</span
    ><span> {{ recipe }}</span
    ><span>{{ unitRecipe }}</span>
  </div>
</template>

<script>
export default {
  props: {
    ing: { type: String },
    recipe: { type: String },
    unitRecipe: { type: String },
  },
  emits: ["removeIngredient"],
};
</script>

<style scoped>
.ingredient-container {
  position: relative;
  width: max-content;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 3px;
  margin: 1rem;
}

.ingredient-container button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  background: var(--red);
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
}
</style>
