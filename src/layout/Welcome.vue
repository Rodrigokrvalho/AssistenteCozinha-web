<template>
  <div class="welcome">
      <h2>Bem Vinda(o)!</h2>
      <h3 class="description">Esta é a sua calculadora de preços totalmente <strong>gratuita!</strong> </h3>
      <!-- <div class="help">
          <h3>Caso precise de ajuda click aqui</h3>
          <img src="../assets/icons/chevron-right-100.png" alt="">
          <button id="button-help">Passo a passo</button>
      </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
strong {
    font-weight: 500;
}
.welcome {
    background-color: #008e97;
    margin: 0;
    padding: 10px 8%;
}

.welcome h2{
color: white;
font-size: 3rem;
font-weight: 300;
text-align: center;
padding: 50px 0;

}

.welcome h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
}

.description {
    padding-bottom: 70px;
}

.help {
    display: flex;
    align-items: center;
    justify-content: center;
}

.help img {
    padding: 0 10%;
}

.help button {
    padding: 10px 15px;
    font-size: 1.3rem;
    border: solid 4px #ff9028;
    cursor: pointer;
    background-color: #008e97;
    color: white;
}
</style>