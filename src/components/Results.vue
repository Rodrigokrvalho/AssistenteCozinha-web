<template>
  <div class="results-ads">
    <div class="results">
      <h3>Custos</h3>
      <p>
        Custo com ingredientes - R${{
          Number(ing).toFixed(2).replace(".", ",")
        }}
      </p>
      <p>
        Outras despesas - R${{
          Number(priceOthers).toFixed(2).replace(".", ",")
        }}
      </p>
      <p>
        Custo com embrulho - R${{
          Number(packagePrice).toFixed(2).replace(".", ",")
        }}
      </p>
      <h3>Lucro</h3>
      <p>R${{ Number(calcProfit).toFixed(2).replace(".", ",") }}</p>
      <h3>Preço final sugerido</h3>
      <p>R${{ Number(calcTotal).toFixed(2).replace(".", ",") }}</p>
    </div>
    <a href="https://play.google.com/store/apps/details?id=com.krvalhorodrigo.assistentedecozinha" class="ads">
      <img
        id="conheca-app"
        src="../assets/img/conheca-app.gif"
        alt="img-conheca-nosso-app"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: ["ing", "packagePrice", "others", "profit"],

  computed: {
    priceOthers() {
      return Number(this.others > 0 ? this.ing * (this.others / 100) : 0);
    },

    calcProfit() {
      return (
        Number(this.profit > 0 ? this.profit / 100 : 0) *
        (Number(this.ing) +
          Number(this.packagePrice) +
          Number(this.priceOthers))
      );
    },

    calcTotal() {
      return (
        Number(this.ing) +
        Number(this.packagePrice) +
        Number(this.priceOthers) +
        Number(this.calcProfit)
      );
    },
  },
};
</script>

<style>
.results-ads {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #ff9028;
  border-radius: 10px;
}

.results-ads .results {
  width: 310px;
  padding: 0px 0px; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

}

.results p {
  text-align: center;
  font-size: 1.3rem;
}

.results h3 {
  margin-top: 3%;
  font-size: 1.6rem;
}

.results-ads .ads {
  width: 530px;
  height: 530px;
  
}

#conheca-app {
  width: 100%;
}

</style>
