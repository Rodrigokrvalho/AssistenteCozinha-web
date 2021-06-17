<template>
  <div class="main">
    <div class="prop-1 vertical">
      <AdSense adClient="ca-pub-6998861137482717" adSlot="9248778139" />
    </div>

    <div class="prop-2 vertical">
      <AdSense adClient="ca-pub-6998861137482717" adSlot="1418196055" />
    </div>

    <div class="prop-3 vertical">
      <AdSense adClient="ca-pub-6998861137482717" adSlot="7748828355" />
      <AdSense adClient="ca-pub-6998861137482717" adSlot="5335020649" />
    </div>

    <div class="prop-4 vertical">
      <AdSense adClient="ca-pub-6998861137482717" adSlot="4871383575" />
      <AdSense adClient="ca-pub-6998861137482717" adSlot="5216489191" />
    </div>

    <div class="headers">
      <header class="content-header">
        <div class="prop-5 ads-horizontal">
          <AdSense adClient="ca-pub-6998861137482717" adSlot="4951877269" />
        </div>
        <Header />
      </header>

      <div class="content-welcome">
        <Welcome />
        <div class="prop-6 ads-horizontal">
          <AdSense adClient="ca-pub-6998861137482717" adSlot="7076365775" />
        </div>
      </div>
    </div>

    <main class="content-main">
      <Calculator />
      <Footer/>
      <AdSense adClient="ca-pub-6998861137482717" adSlot="5963714219" />
      <AdSense adClient="ca-pub-6998861137482717" adSlot="5352220567" />
    </main>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Welcome from "../layout/Welcome";
import Footer from "../layout/Footer"
import Calculator from "../components/Calculator";
import AdSense from "../components/AdSense";
export default {
  components: { Header, Welcome, Footer, Calculator, AdSense },
};
</script>

<style>
.main {
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  /* grid-template-rows: 1fr 1fr 1fr ; */
  grid-template-areas:
    "prop-1 headers prop-2"
    "prop-3 content-main prop-4";
}

.prop-1 {
  display: block;
  justify-content: center;
  grid-area: prop-1;
  height: 600px;
}

.prop-2 {
  display: block;
  justify-content: center;
  grid-area: prop-2;
  height: 600px;
}

.prop-3 {
  display: block;
  justify-content: center;
  align-items: center;
  grid-area: prop-3;
}

.prop-4 {
  display: block;
  justify-content: center;
  align-items: center;
  grid-area: prop-4;
}

.headers {
  background-color: rgb(255, 230, 185);
  grid-area: headers;
  width: 100%;
}

.content-main {
  grid-area: content-main;
  width: 100%;
}

.vertical {
  display: block;
}

.ads-horizontal {
  display: none;
}

@media (max-width: 1200px) {
  html {
    font-size: 18px;
  }
  .main {
    display: flex;
    flex-direction: column;
  }

  .vertical {
    display: none;
  }

  .ads-horizontal {
    display: block;
  }
}
</style>