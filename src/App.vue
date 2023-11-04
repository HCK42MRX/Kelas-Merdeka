<template lang="html">
  <header>
    <NavMenu></NavMenu>
  </header>

  <homepage></homepage>

  <footer>
    <footerMenu></footerMenu>
  </footer>
</template>
<script>
import NavMenu from './components/navigation.vue';
import footerMenu from './components/footer.vue';
import homepage from './components/homepage.vue';


export default {
  components :{
    NavMenu,
    footerMenu,
    homepage,
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