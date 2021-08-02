<template>
  <div class="welcome">
    <h2>Bem Vinda(o)!</h2>
    <h3 class="description">
      Esta é a sua calculadora de preços totalmente <strong>gratuita!</strong>
    </h3>
    <!-- <div class="help">
          <h3>Caso precise de ajuda click aqui</h3>
          <img src="../assets/icons/chevron-right-100.png" alt="">
          <button id="button-help">Passo a passo</button>
      </div> -->
    <div class="nav">
      <a class="button" href="#calc">Calculadora</a>
      <a class="button" href="#tips">Dicas para o seu negócio</a>
    </div>
  </div>
</template>

<style>
strong {
  font-weight: 500;
}
.welcome {
  background: linear-gradient(to bottom, #669bbc, #003049);
  background:#003049 ;
  box-shadow: 3px 3px 4px 0px var(--grey-dark);
  overflow: hidden;
}

.welcome .nav {
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100%;
}

.welcome .nav a.button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: var(--grey-dark);
  background: #fffbf3;
  margin: 0;
  width: 100%;
  padding: 0 5px;
  font-size: 1.3rem;
  border: none;
  border-right: solid 1px var(--grey-dark);
  border-radius: 0;
}

.welcome .nav a.button:hover {
  color: var(--grey-dark);
}

.welcome h2 {
  color: white;
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  padding: 0px 0;
}

.welcome h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
}

.description {
  padding-bottom: 50px;
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
  border: solid 4px var(--orange);
  cursor: pointer;
  background-color: var(--green);
  color: white;
}

@media (max-width: 1090px) {
  .welcome h2 {
    margin-top: 60px;
  }
}

@media (max-width: 630px) {
  .welcome h2 {
    font-size: 2rem;
  }
}
</style>