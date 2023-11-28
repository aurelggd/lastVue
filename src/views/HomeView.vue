<template>
  <div class="home">
    
    <div class="homeContent">
      <HelloWorld msg="Welcome to our Vue.js App"/>
    </div>
    
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



  .home{
    position: relative;
    height: calc(100vh - 124px);
    }

  .homeContent{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
  }
</style>
