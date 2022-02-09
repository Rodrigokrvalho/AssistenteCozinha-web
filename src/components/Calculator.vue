<template>
  <div class="products" id="calc">
    <TheIngredientAdderForm />
    <div>
      <h2>2ª Parte</h2>
      <div class="switcher">
        <p>Adicionar custo com o Embrulho</p>
        <label class="switch">
          <input type="checkbox" id="switch-package" v-model="inputPackage" />
          <span class="slider round"></span>
        </label>
      </div>
      <div class="question" v-show="inputPackage">
        <label
          for="packagePrice"
          class="invisible"
          id="label-packagePrice"
          v-if="inputPackage"
          >Custo com Embrulho (R$)</label
        >
        <input
          type="number"
          placeholder="Custo Embrulho (R$)"
          v-model="packagePrice"
          id="packagePrice"
        />
      </div>
      <div class="switcher">
        <p>Outras despesas (gás, eletricidade, etc.)</p>
        <label class="switch">
          <input type="checkbox" id="switch-others" v-model="inputOthers" />
          <span class="slider round"></span>
        </label>
      </div>
      <div class="question" v-show="inputOthers">
        <label
          for="others"
          class="invisible"
          id="label-others"
          v-if="inputOthers"
          >Outras despesas (%)</label
        >
        <input
          type="number"
          placeholder="Outras Despesas (%)"
          v-model="others"
          id="others"
        />
      </div>
    </div>
    <div class="question">
      <label for="profit" id="label-profit" class="invisible"
        >Porcentagem de lucro (%)</label
      >
      <input
        type="number"
        id="profit"
        placeholder="Porcentagem de lucro (%)"
        v-model="profit"
      />
    </div>
    <div>
      <div class="horizontal">
        <button id="button-calculate" @click="calcIng()">Calcular</button>
        <button id="button-clean" class="button-red" @click="cleanAll()">
          Limpar
        </button>
      </div>
      <div class="results">
        <Results
          :ing="ingTotal"
          :packagePrice="packagePrice ? packagePrice : 0"
          :others="others ? others : 0"
          :profit="profit ? profit : 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Results from "./Results";

import TheIngredientAdderForm from "./TheIngredientAdderForm.vue";
export default {
  components: { Results, TheIngredientAdderForm },
  data: function () {
    return {
      ingredient: "",
      price: "",
      unitRecipe: "",
      unitPack: "",
      pack: "",
      recipe: "",
      packagePrice: "",
      others: "",
      profit: "",
      key: 0,
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
      this.key = 0;
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

    changePack(e) {
      this.packagePrice = e.target.value;
    },

    invisible(label) {
      label.classList = "invisible";
      label.classList.remove = "visible";
    },

    visible(label) {
      label.classList.remove = "invisible";
      label.classList = "visible";
    },

    setVisibility(id, input) {
      const label = document.querySelector(`#label-${id}`);
      if (input === "") {
        this.invisible(label);
      } else {
        this.visible(label);
      }
    },
  },
  watch: {
    ingredient: function () {
      this.setVisibility("ingredient", this.ingredient);
    },
    price: function () {
      this.setVisibility("price", this.price);
    },
    pack: function () {
      this.setVisibility("pack", this.pack);
    },
    recipe: function () {
      this.setVisibility("recipe", this.recipe);
    },
    packagePrice: function () {
      this.setVisibility("packagePrice", this.packagePrice);
    },
    inputPackage: function () {
      if (this.inputPackage == false) {
        this.packagePrice = "";
      }
    },
    others: function () {
      this.setVisibility("others", this.others);
    },
    inputOthers: function () {
      if (this.inputOthers == false) {
        this.others = "";
      }
    },
    profit: function () {
      this.setVisibility("profit", this.profit);
    },
  },
};
</script>

<style>
strong {
  font-weight: 600;
}

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

p {
  padding: 12px 0%;
  text-align: left;
  font-size: 1.35rem;
  color: rgb(39, 39, 39);
}

/* ===== buttons ===== */

button,
.button {
  padding: 5px 30px;
  box-shadow: 1px 2px 3px 0px grey;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 20px 25px;
  cursor: pointer;
  transition: all 300ms ease-in;
  color: var(--blue);
  background-color: #fffbf3;
  border: solid 3px var(--blue);
  border-radius: 10px;
}

button:hover,
.button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 2px 4px 6px 0px var(--grey);
}

.button-red {
  color: var(--red);
  border-color: var(--red);
}

/* ===== products ===== */
.products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0% 2.5%;
  overflow: hidden;
  color: var(--grey-dark);
}

.products h2 {
  margin-bottom: 50px;
}
.products label {
  display: flex;
  height: 35px;
  width: max-content;
  overflow: hidden;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: -20px;
  margin-top: 10px;
  visibility: visible;
}

.products label.visible {
  position: relative;
  visibility: visible;
  animation: fadeinLabel;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}

.products label.invisible {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  border: none;
  animation: fadeout;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}

.products div {
  width: 100%;
  text-align: center;
}

.products .question {
  border: solid 3px var(--transparent);
  background-color: var(--transparent);
  border-radius: 10px;
  padding: 0 10px;
  margin: 5px 0;
  box-shadow: 1px 0px 6px 0px var(--grey);
}

.products .question p {
  font-size: 1.25rem;
}

/* ===== radio unit ===== */
.products div.radios-unit {
  margin: 20px 0 5px 0;
  padding: 10px;
  border-radius: 10px;
}

.radios-unit p {
  padding: 0;
}

.radio-unit {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 8%;
}

.radio-unit input {
  margin: 0;
  width: 18px;
  height: 18px;
  overflow: hidden;
  cursor: pointer;
}

.radio-unit label {
  margin: 5px 20px;
  height: auto;
  width: 200px;
  text-align: left;
  font-size: 1.2rem;
  cursor: pointer;
  visibility: visible;
}

.horizontal {
  border-bottom: solid 1px var(--white);
  margin-bottom: 40px;
}

/* ======= toogle ======= */
.switcher {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding: 0px;
  margin-bottom: 20px;
  margin-left: -25px;
}

.switcher p {
  padding: 10px 10px 0px 0%;
  width: 600px;
  max-width: 70%;
}

.switch label {
  width: 60px;
  height: 34px;
  visibility: visible;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  height: 21px;
  width: 50px;
  background-color: var(--red);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--blue);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--blue);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>