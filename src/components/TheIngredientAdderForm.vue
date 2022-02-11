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

    <BaseInput
      id="price"
      label="Preço do Ingrediente"
      placeholder="Preço do ingrediente (R$)"
      type="number"
      v-model="price"
    />

    <div class="question">
      <BaseRadioGroup
        :label="`Quantidade de ${ingredient} na embalagem fechada.`"
        @clickedItem="unitPack = $event"
      />
    </div>

    <BaseInput
      id="pack"
      :label="`${unitPack} na embalagem fechada`"
      :placeholder="`${unitPack} na embalagem fechada`"
      type="number"
      v-model="pack"
    />

    <div class="question">
      <BaseRadioGroup
        :label="`Quantidade de ${ingredient} na receita.`"
        @clickedItem="unitRecipe = $event"
      />
    </div>

    <BaseInput
      id="recipe"
      :label="`${unitRecipe} na receita`"
      :placeholder="`${unitRecipe} na receita`"
      type="number"
      v-model="recipe"
    />

    <div class="horizontal">
      <button id="button-add" class="button" @click="add()">Adicionar</button>
    </div>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseRadioGroup from "./BaseRadioGroup.vue";

export default {
  components: { BaseInput, BaseRadioGroup },
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

    remove() {
      this.$emit("removeIngredient");
    },
  },
};
</script>