<template>
  <div class="products">
    <div>
      <h2>1ª Parte</h2>
      <p>Insira as informações de cada ingrediente e click em Adicionar:</p>
    </div>
    <div>
      <label for="ingredient" id="label-ingredient" class="invisible"
        >Ingrediente</label
      >
      <input
        type="text"
        id="ingredient"
        placeholder="Ingrediente"
        v-model="ingredient"
      />
    </div>
    <div>
      <label for="price" id="label-price" class="invisible"
        >Preço do pacote do ingrediente</label
      >
      <input
        type="number"
        id="price"
        placeholder="Preço do pacote do ingrediente"
        v-model="price"
      />
    </div>
    <div class="radios-unit">
      <p>Selecione a unidade de medida:</p>
      <div class="radio-unit">
        <input type="radio" name="radio" id="kg" @click="checkUnit('Kg')" />
        <label for="kg">Kg</label>
      </div>
      <div class="radio-unit">
        <input type="radio" name="radio" id="l" @click="checkUnit('Litros')" />
        <label for="l">Litros</label>
      </div>
      <div class="radio-unit">
        <input
          type="radio"
          name="radio"
          id="unit"
          @click="checkUnit('Unidades')"
        />
        <label for="unit">Unidade</label>
      </div>
    </div>
    <div>
      <label for="pack" id="label-pack" class="invisible"
        >{{ unit }} no pacote fechado</label
      >
      <input
        type="number"
        id="pack"
        :placeholder="placeholderPackage"
        v-model="pack"
      />
    </div>
    <div>
      <label for="recipe" id="label-recipe" class="invisible"
        >{{ unit }} na Receita</label
      >
      <input
        type="number"
        id="recipe"
        :placeholder="placeholderRecipe"
        v-model="recipe"
      />
    </div>
    <div>
      <p id="add-ingredients">
        Produtos adicionados
        <Ingredients
          v-for="ing in ingredients"
          :key="ing.key"
          :ing="ing.ingredient"
          :recipe="ing.recipe"
          :unit="ing.unit"
        />
      </p>
    </div>
    <div class="horizontal">
      <button id="button-remove" @click="remove()">Remover</button>
      <button id="button-add" @click="add()">Adicionar</button>
    </div>
    <hr />
    <div>
      <h2>2ª Parte</h2>
      <div class="switcher">
        <p>Adicionar custo com o Embrulho</p>
        <label class="switch">
          <input type="checkbox" id="switch-package" v-model="inputPackage" />
          <span class="slider round"></span>
        </label>
      </div>
      <label
        for="packagePrice"
        id="label-packagePrice"
        class="invisible"
        v-if="inputPackage"
        >Custo com Embrulho (R$)</label
      >
      <input
        type="number"
        v-if="inputPackage"
        placeholder="Custo Embrulho (R$)"
        v-model="packagePrice"
        id="packagePrice"
      />
      <div class="switcher">
        <p>Outras despesas (gás, eletricidade, etc.)</p>
        <label class="switch">
          <input type="checkbox" id="switch-others" v-model="inputOthers" />
          <span class="slider round"></span>
        </label>
      </div>
      <label for="others" id="label-others" class="invisible" v-if="inputOthers"
        >Outras despesas (%)</label
      >
      <input
        type="number"
        v-if="inputOthers"
        placeholder="Outras Despesas (%)"
        v-model="others"
        id="others"
      />
    </div>
    <div>
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
      <button id="button-calculate" @click="calcIng()">Calcular</button>
      <div class="results" :class="isInvisible ? 'invisible' : ''">
        <Results
          :ing="ingTotal"
          :packagePrice="packagePrice ? packagePrice : 0"
          :others="others ? others : 0"
          :profit="profit ? profit : 0"
        />
      </div>
      <button id="button-clean" @click="cleanAll()">Limpar</button>
    </div>
  </div>
</template>

<script>
import Results from "./Results";
import Ingredients from "./Ingredients";
export default {
  components: { Results, Ingredients },
  data: function () {
    return {
      ingredient: "",
      price: "",
      unit: "",
      pack: "",
      recipe: "",
      packagePrice: "",
      others: "",
      profit: "",
      isInvisible: true,
      key: 0,
      ingredients: [],
      inputPackage: false,
      inputOthers: false,
      ingTotal: 0,
    };
  },
  computed: {
    placeholderPackage() {
      return this.unit + " no pacote fechado";
    },
    placeholderRecipe() {
      return this.unit + " na receita";
    },
  },
  methods: {
    add() {
      if (
        (this.ingredient !== "") &
        (this.price !== "") &
        (this.pack !== "") &
        (this.recipe !== "")
      ) {
        this.ingredients.push({
          key: this.ingredients.lastIndex,
          ingredient: this.ingredient,
          price: this.price,
          unit: this.unit,
          pack: this.pack,
          recipe: this.recipe,
        });

        this.clean();
      } else alert("Preencha todos os campos para Adicionar");
    },

    checkUnit(unit) {
      this.unit = unit;
    },

    remove() {
      const lastIndex = this.ingredients.length - 1;
      this.ingredients.splice(lastIndex);
    },

    clean() {
      this.ingredient = "";
      this.price = "";
      this.pack = "";
      this.recipe = "";
    },

    cleanAll() {
      this.clean();
      this.key = 0;
      this.ingredients = [];
      this.unit = "";
      this.ingTotal = 0;
      this.packagePrice = "";
      this.others = "";
      this.profit = "";
      this.isInvisible = true;
    },

    calcIng() {
      this.ingTotal = 0;
      this.ingredients.forEach((ing) => {
        const value = (ing.price / ing.pack) * ing.recipe;
        this.ingTotal = this.ingTotal + value;
      });
      this.isInvisible = false;
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
        this.invisible(label)
      } else {
        this.visible(label)
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
.products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(255, 230, 185);
  padding: 0% 7%;
  overflow: hidden;
}

.products h2 {
  margin-bottom: 50px;
}
.products label {
  display: flex;
  height: 30px;
  width: max-content;
  overflow: hidden;
  font-size: 1rem;
  margin-bottom: -20px;
  visibility: visible;
}

.products label.visible {
  display: block;
  visibility: visible;
}
.products label.invisible {
  display: none;
  visibility: hidden;
}


.products div {
  width: 100%;
  text-align: center;
}

.products input {
  width: 100%;
  font-size: 1.3rem;
  border: none;
  border-bottom: solid 1px rgb(70, 70, 70);
  background-color: rgb(255, 230, 185);
  padding: 5px 10px 3px;
  margin: 10px 0 5px;
  outline: none;
}

.products input:focus {
  border-bottom: solid 3px rgb(75, 86, 246);
  color: rgb(0, 0, 195);
  padding: 3px 10px 3px;
}

.products input::placeholder {
  color: rgb(104, 104, 104);
}

p {
  padding: 12px 0%;
  text-align: left;
  font-size: 1.2rem;
}

.products button {
  padding: 5px 30px;
  box-shadow: 1px 2px 3px 0px grey;
  font-size: 1.3rem;
  margin: 20px 25px;
  cursor: pointer;
}

.radios-unit {
  margin: 20px;
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
  width: 100px;
  text-align: left;
  font-size: 1.2rem;
  cursor: pointer;
  visibility: visible;
}

.horizontal {
  border-bottom: solid 1px grey;
  margin-bottom: 40px;
  padding-bottom: 40px;
}


.switcher {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  padding: 10 0px;
  margin-bottom: 20px;
}

.switcher p {
  padding: 20px 10px 0px 0%;
  width: 500px;
  max-width: 65%;
}
/* ======= toogle ======= */
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
  background-color: rgb(255, 100, 100);
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
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


</style>