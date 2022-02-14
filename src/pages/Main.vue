<template>
  <div class="main">
    <Header />

    <Welcome v-show="pageNumber === 0" />

    <Calculator :pageNumber="pageNumber" />

    <BaseButton
      @click="pageNumber = pageNumber + 1"
      :label="pageNumber ? 'Proximo' : 'Iniciar'"
    />
  </div>
</template>

<script>
import Header from "../layout/Header";
import Welcome from "../layout/Welcome";

import Calculator from "../components/Calculator";
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    Header,
    Welcome,
    Calculator,
    BaseButton,
  },
  data() {
    return {
      pageNumber: 0,
    };
  },
};
</script>