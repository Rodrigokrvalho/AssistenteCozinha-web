<template>
  <div class="main">
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
      <Content />
      <Calculator />
      <KnowMore />
      <Footer />
    </main>

    <div class="prop-left vertical">
      <AdSense adClient="ca-pub-6998861137482717" adSlot="9248778139" />
      <AdSense adClient="ca-pub-6998861137482717" adSlot="1418196055" />
    </div>

    <div class="prop-right vertical">
      <AdSense adClient="ca-pub-6998861137482717" adSlot="7748828355" />
      <AdSense adClient="ca-pub-6998861137482717" adSlot="5335020649" />
      <AdSense adClient="ca-pub-6998861137482717" adSlot="4871383575" />
      <AdSense adClient="ca-pub-6998861137482717" adSlot="5216489191" />
    </div>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Welcome from "../layout/Welcome";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import KnowMore from "../layout/KnowMore";
import Calculator from "../components/Calculator";
import AdSense from "../components/AdSense";
export default {
  components: {
    Header,
    Welcome,
    Footer,
    Content,
    Calculator,
    KnowMore,
    AdSense,
  },
};
</script>


<style>
.main {
  display: grid;
  grid-template-columns: 280px 1fr 280px;
  grid-template-areas:
    "headers headers headers"
    "prop-left content-main prop-right";
}

.prop-left {
  display: none;
  justify-content: center;
  align-items: center;
  grid-area: prop-left;
}

.prop-right {
  display: none;
  justify-content: center;
  align-items: center;
  grid-area: prop-right;
}

.headers {
  grid-area: headers;
  width: 100%;
}

.content-main {
  grid-area: content-main;
  width: 100%;
}

.vertical {
  display: none;
}

.ads-horizontal {
  display: none;
}
@keyframes fadein {
  0% {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 0%;
    opacity: 0;
  }
  100% {
    opacity: 1;
    height: 100%;
  }
}

@keyframes fadeinLabel {
  0% {
    height: 0%;
    opacity: 0;
    font-size: 0;
  }
  50% {
    height: 100%;
    font-size: 1rem ;
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


@media (max-width: 1200px) {
  html {
    font-size: 19px;
  }
  .main {
    display: flex;
    flex-direction: column;
  }

  .vertical {
    display: none;
  }

  .ads-horizontal {
    display: none;
  }
}

@media (max-width: 900px) {
  html {
    font-size: 16px;
  }
}
</style>