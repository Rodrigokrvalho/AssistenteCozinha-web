<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");

:root {
  --orange: #FF6700;
  --green: #008e97;
  --green-dark: #015c62;
  --white: #f0f0f0;
  --transparent: rgba(255, 255, 255, 0.25);
  --wheat: rgb(255, 230, 185);
  --red: rgb(195, 0, 0);
  --red-light: rgb(255, 100, 100);
  --grey-dark: rgb(47, 47, 47);
  --grey: rgb(70, 70, 70);
  --grey-light: rgb(104, 104, 104);
  --blue-light: #669bbc;
  --blue: #003049;
  --brown-transparent: #ffab5d4d;

}

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
background: #fdf0d5;

  background-blend-mode: screen;
  font-size: 18px;
}
</style>
