<template>
  <div>
    <h2>2ª Parte</h2>

    <div class="input">
      <BaseInputWithSwitcher
        switcherLabel="Adicionar custo com o Embrulho"
        @switcher="inputPackageVisibility = !inputPackageVisibility"
      />
      <BaseInput
        v-show="inputPackageVisibility"
        id="package-price"
        label="Custo com Embrulho (R$)"
        placeholder="Custo com Embrulho (R$)"
        type="number"
        v-model="form.packagePrice"
      />
    </div>

    <div class="input">
      <BaseInputWithSwitcher
        switcherLabel="Outras despesas (gás, eletricidade, etc.)"
        @switcher="inputOthersVisibility = !inputOthersVisibility"
      />
      <BaseInput
        v-show="inputOthersVisibility"
        id="others-costs"
        label="Outras despesas (%)"
        placeholder="Outras despesas (%)"
        type="number"
        v-model="form.othersExpences"
      />
    </div>

    <BaseInput
      id="pack"
      label="Porcentagem de lucro (%)"
      placeholder="Porcentagem de lucro (%)"
      type="number"
      v-model="form.profit"
    />

    <button @click="emitFormValues(form)">Calcular</button>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseInputWithSwitcher from "./BaseInputWithSwitcher.vue";
export default {
  components: { BaseInputWithSwitcher, BaseInput },
  emits: ["data"],
  data() {
    return {
      form: {
        packagePrice: "",
        othersExpences: "",
        profit: "",
      },
      inputPackageVisibility: false,
      inputOthersVisibility: false,
    };
  },
  methods: {
    emitFormValues() {
      const { packagePrice, othersExpences, profit } = this.form;

      if (!packagePrice || !othersExpences || !profit) {
        alert("Preencha todos os campos para continuar");
        return;
      }

      this.$emit("data", this.form);
    },
  },
};
</script>