<template lang="html">
  <div id="App">
    <header v-if="$route.meta.header === 1">
      <navMenu></navMenu>
    </header>
    <router-view></router-view>
    <footer v-if="$route.meta.footer === 1">
      <footerMenu></footerMenu>
    </footer>
  </div>
</template>
<script>
import navMenu from "./components/navigation.vue"
import footerMenu from "./components/footer.vue"

export default {
  name : "App",
  components :{
    navMenu,
    footerMenu,
  }
  
}
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

html,body {
  background-color: #060606;
  font-family: 'Poppins',sans-serif;
}
  
</style>