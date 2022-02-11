<template>
  <div class="calculator-container">
    <TheIngredientAdderForm @addIngredient="ingredients.push($event)" />

    <BaseAddedProducts
      :ingredients="ingredients"
      @removeIngredient="ingredients.splice($event, 1)"
    />

    <FormAddOtherExpences
      @data="
        ($event) => {
          packagePrice = $event.packagePrice;
          others = $event.othersExpences;
          profit = $event.profit;
          calcIng();
        }
      "
    />

    <button class="button-red" @click="cleanAll()">Limpar</button>

    <Results
      :ing="ingTotal"
      :packagePrice="packagePrice ? packagePrice : 0"
      :others="others ? others : 0"
      :profit="profit ? profit : 0"
    />
  </div>
</template>

<script>
import BaseAddedProducts from "./BaseAddedProducts.vue";
import FormAddOtherExpences from "./FormAddOtherExpences.vue";
import Results from "./Results";
import TheIngredientAdderForm from "./TheIngredientAdderForm.vue";

export default {
  components: {
    Results,
    TheIngredientAdderForm,
    BaseAddedProducts,
    FormAddOtherExpences,
  },
  data() {
    return {
      packagePrice: 0,
      others: "",
      profit: "",
      ingredients: [],
      inputPackage: false,
      inputOthers: false,
      ingTotal: 0,
    };
  },
  methods: {
    calcUnits(value, unit) {
      if (unit == "ml" || unit == "g") {
        return value / 1000;
      } else {
        return value;
      }
    },

    cleanAll() {
      this.clean();
      this.ingredients = [];
      this.ingTotal = 0;
      this.packagePrice = "";
      this.others = "";
      this.profit = "";
    },

    calcIng() {
      this.ingTotal = 0;
      this.ingredients.forEach((ing) => {
        const value =
          (ing.price / this.calcUnits(ing.pack, ing.unitPack)) *
          this.calcUnits(ing.recipe, ing.unitRecipe);
        this.ingTotal = this.ingTotal + value;
      });
    },
  },
};
</script>

<style scoped>
</style>