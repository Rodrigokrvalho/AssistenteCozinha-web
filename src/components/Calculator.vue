<template>
  <div class="calculator-container">
    <div class="page" v-show="pageNumber === 1">
      <TheIngredientAdderForm @addIngredient="ingredients.push($event)" />

      <BaseAddedProducts
        :ingredients="ingredients"
        @removeIngredient="ingredients.splice($event, 1)"
      />
    </div>

    <div class="page" v-show="pageNumber === 2">
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
    </div>

    <div class="page" v-show="pageNumber === 3">
      <Results
        :ing="ingTotal"
        :packagePrice="packagePrice ? packagePrice : 0"
        :others="others ? others : 0"
        :profit="profit ? profit : 0"
      />
    </div>
  </div>
</template>

<script>
import BaseAddedProducts from "./BaseAddedProducts.vue";
import FormAddOtherExpences from "./FormAddOtherExpences.vue";
import Results from "./Results";
import TheIngredientAdderForm from "./TheIngredientAdderForm.vue";

export default {
  props: {
    pageNumber: { type: Number, required: true },
  },
  components: {
    Results,
    TheIngredientAdderForm,
    BaseAddedProducts,
    FormAddOtherExpences,
  },
  data() {
    return {
      packagePrice: 0,
      others: 0,
      profit: 0,
      ingredients: [],
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
      this.ingredients = [];
      this.ingTotal = 0;
      this.packagePrice = 0;
      this.others = 0;
      this.profit = 0;
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