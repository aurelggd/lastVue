<template>
  <div class="home">
    <img class="logo" alt="Logo Gestion de Projet" src="../assets/logoProjetVue.png">
    <HelloWorld msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .logo{
    width: 100px;
    height: 100px;
  }

  .home{
    padding: 0;
    margin: 0;
    display: flex;
  }
</style>
