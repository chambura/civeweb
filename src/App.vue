<template>
  <div id="main">
    <MainNavigation></MainNavigation>  
  </div>
  <div class="pictureslides">
    <PictureSlide></PictureSlide>
  </div>
  <div class="contents">
    <HomePage></HomePage>
  </div>
  <div class="footer">
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import FooterNav from "./components/FooterNav.vue";
import MainNavigation from "@/components/MainNavigation.vue";
import PictureSlide from "./components/PictureSlide.vue";

export default {
  name: 'App',
  components: {
    HomePage,
    FooterNav,
    MainNavigation,
    PictureSlide
}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.footer {
    bottom: 0%;
    position: fixed;
    left:0%;
    width:100%;
    text-align: center;
    background-color: rgb(12, 230, 161);
    /* flex: content;
    display: block; */
}
</style>
