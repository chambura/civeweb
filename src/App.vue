<template>
  <img alt="Vue logo" src="../public/logo.png">
  <MainNav msg1="Department of Computer Science | "
          msg2="College of Informatics and Virtual Education | "
            msg3="University of DODOMA"/>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
img {
  height: 100px;
  width: 100px;
  align-content: flex-start;
  background-color: #2c3e50;
}
</style>
