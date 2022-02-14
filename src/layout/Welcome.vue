<template>
  <div class="welcome">
    <h2>Bem Vinda(o)!</h2>
    <h3>
      Esta é a sua calculadora de preços totalmente <strong>gratuita!</strong>
    </h3>
    <div class="description">
      <p>Para usar a calculadora é muito simples:</p>
      <ul>
        <li>Passo 1: Adicione todos os ingredientes da sua receita</li>
        <li>
          Passo 2: Adicione outras despesas que você pode ter com a receita e
          produção
        </li>
        <li>Passo 3: Veja seu resultado e preço sugerido</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  color: white;
}

.welcome h2 {
  font-size: 2.5rem;
}

.welcome .description {
  margin: 1rem;
}
</style>