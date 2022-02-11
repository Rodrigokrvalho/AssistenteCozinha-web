<template>
  <div class="header">
    <div class="background">
      <img src="../assets/img/logo-small-no-back.png" alt="logo" />
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 190px;
  width: 100%;
  justify-content: center;
  background-color: var(--blue);
  padding-bottom: 10px;
  border-bottom: solid 5px white;
}

.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 100%;
  padding-top: 10px;
  background-color: #fdf0d5;
}
.header img {
  width: 300px;
  background: #fdf0d5;
  border-radius: 10px;
}
.header h1 {
  text-align: center;
  color: white;
  font-weight: 200;
  font-size: 3rem;
  margin-bottom: 0px;
}
@media (max-width: 630px) {
  .header h1 {
    font-size: 2.2rem;
    margin: 15px 0;
  }
}
</style>