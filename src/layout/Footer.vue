<template>
  <footer>
    <div class="dev">
      <p>Developed by</p>
      <h3>Rodrigo S. Carvalho</h3>
      <div class="social">
        <a href="https://github.com/Rodrigokrvalho"
          ><img src="../assets/icons/github.png" alt="icon" /> Github</a
        >
        <a href="https://www.linkedin.com/in/rodrigokrvalho/"
          ><img src="../assets/icons/linkedin.png" alt="icon" /> LinkedIn</a
        >
      </div>
    </div>
    <div class="dev">
      <p>Design</p>
      <h3>Mayara S. R. Carvalho</h3>
    </div>
  </footer>
</template>



<style scoped>
footer {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  grid-area: footer;
  font-size: 18px;
  padding: 10px;
  flex-wrap: wrap;

  border: solid 3px white;
  border-bottom: none;
  margin: 0 25px;
  border-radius: 10px 10px 0 0;
  box-shadow: 4px -4px 4px 1px var(--grey-dark);
  background-color: rgba(255, 255, 255, 0.15);
}

.dev {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
}

.social a {
  text-decoration: none;
  color: black;
  padding: 0px 10px;
  display: flex;
  align-items: center;
}

.social img {
  height: 25px;
  width: 25px;
}
</style>