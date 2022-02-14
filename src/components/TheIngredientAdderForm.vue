<template>
  <div class="add-ingredient-container">
    <div>
      <h2>1ª Parte</h2>
      <p>Insira as informações de cada ingrediente e click em Adicionar:</p>
    </div>

    <BaseInput
      id="ingredient"
      label="Ingrediente"
      placeholder="Ingrediente"
      v-model="ingredient"
    />

    <div class="input-select">
      <BaseInput
        id="price"
        label="Preço do Ingrediente"
        placeholder="Preço do ingrediente (R$)"
        type="number"
        v-model="price"
      />

      <BaseSelect
        :items="[
          { label: 'Quilograma (kg)', value: 'kg' },
          { label: 'Grama (g)', value: 'g' },
          { label: 'Litro (l)', value: 'l' },
          { label: 'Mililitro (ml)', value: 'ml' },
          { label: 'Unidade', value: 'Unidades' },
        ]"
        @selected="unitPack = $event"
      />
    </div>

    <div class="input-select">
      <BaseInput
        id="pack"
        :label="`${unitPack} na embalagem fechada`"
        :placeholder="`${unitPack} na embalagem fechada`"
        type="number"
        v-model="pack"
      />

      <BaseSelect
        :items="[
          { label: 'Quilograma (kg)', value: 'kg' },
          { label: 'Grama (g)', value: 'g' },
          { label: 'Litro (l)', value: 'l' },
          { label: 'Mililitro (ml)', value: 'ml' },
          { label: 'Unidade', value: 'Unidades' },
        ]"
        @selected="unitRecipe = $event"
      />
    </div>

    <BaseInput
      id="recipe"
      :label="`${unitRecipe} na receita`"
      :placeholder="`${unitRecipe} na receita`"
      type="number"
      v-model="recipe"
    />

    <button id="button-add" class="button" @click="add()">Adicionar</button>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";

export default {
  components: { BaseInput, BaseSelect },
  data() {
    return {
      ingredient: "",
      price: "",
      pack: "",
      recipe: "",
      unitPack: "",
      unitRecipe: "",
    };
  },
  emits: ["addIngredient", "removeIngredient"],
  methods: {
    validateProduct() {
      if (
        (this.ingredient !== "") &
        (this.price !== "") &
        (this.pack !== "") &
        (this.recipe !== "") &
        (this.unitRecipe !== "") &
        (this.unitPack !== "")
      ) {
        return true;
      } else {
        alert("Preencha todos os campos para Adicionar");
        return false;
      }
    },
    add() {
      if (!this.validateProduct()) {
        return;
      }

      this.$emit("addIngredient", {
        ingredient: this.ingredient,
        price: this.price,
        unitRecipe: this.unitRecipe,
        unitPack: this.unitPack,
        pack: this.pack,
        recipe: this.recipe,
      });

      this.clean();
    },

    clean() {
      this.ingredient = "";
      this.price = "";
      this.pack = "";
      this.recipe = "";
    },
  },
};
</script>

<style scoped>
.add-ingredient-container .input-select {
  display: flex;
  align-items: baseline;
  justify-content: center;
}
</style>