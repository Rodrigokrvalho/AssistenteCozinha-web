<template>
  <div>
    <div class="added-ingredients">
      Produtos adicionados e quantidade na receita
      <Ingredients
        v-for="(ing, index) in ingredients"
        :key="index"
        :ing="ing.ingredient"
        :recipe="ing.recipe"
        :unitRecipe="ing.unitRecipe"
        @removeIngredient="$emit('removeIngredient', index)"
      />
    </div>
  </div>
</template>

<script>
import Ingredients from "./Ingredients.vue";
export default {
  components: { Ingredients },
  props: { ingredients: { type: Array, required: true } },
  emits: ["removeIngredient"],
};
</script>