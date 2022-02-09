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
      id="price"
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

    <div>
      <p id="add-ingredients">
        Produtos adicionados e quantidade na receita
        <Ingredients
          v-for="ing in ingredients"
          :key="ing.key"
          :ing="ing.ingredient"
          :recipe="ing.recipe"
          :unitRecipe="ing.unitRecipe"
        />
      </p>
    </div>
    <div class="horizontal">
      <button id="button-add" class="button" @click="add()">Adicionar</button>
      <button id="button-remove" class="button-red" @click="remove()">
        Remover
      </button>
    </div>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseRadioGroup from "./BaseRadioGroup.vue";
import Ingredients from "./Ingredients.vue";
export default {
  components: { BaseInput, BaseRadioGroup, Ingredients },
  data() {
    return {
      ingredient: "",
      price: "",
      pack: "",
      recipe: "",
      unitPack: "",
      unitRecipe: "",
      ingredients: [],
    };
  },
  methods: {
    add() {
      if (
        (this.ingredient !== "") &
        (this.price !== "") &
        (this.pack !== "") &
        (this.recipe !== "") &
        (this.unitRecipe !== "") &
        (this.unitPack !== "")
      ) {
        this.ingredients.push({
          key: this.ingredients.lastIndex,
          ingredient: this.ingredient,
          price: this.price,
          unitRecipe: this.unitRecipe,
          unitPack: this.unitPack,
          pack: this.pack,
          recipe: this.recipe,
        });

        this.clean();
      } else alert("Preencha todos os campos para Adicionar");
    },

    clean() {
      this.ingredient = "";
      this.price = "";
      this.pack = "";
      this.recipe = "";
    },

    remove() {
      const lastIndex = this.ingredients.length - 1;
      this.ingredients.splice(lastIndex);
    },
  },
};
</script>