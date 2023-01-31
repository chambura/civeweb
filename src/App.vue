<template>
  <div id="main">
    <MainNav></MainNav>  
  </div>
  <div class="contents">
    <HomePage></HomePage>
  </div>
  <div class="footer">
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HomePage from "./components/HomePage.vue";
import FooterNav from "./components/FooterNav.vue";

export default {
  name: 'App',
  components: {
    MainNav,
    HomePage,
    FooterNav
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
    margin-bottom: 0px;
    float: inherit;
    flex: content;
    display: block;

}
</style>
