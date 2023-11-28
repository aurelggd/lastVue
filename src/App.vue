<template>
  <nav>
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <div class="routes">
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: skyblue;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

nav img {
  width: 60px;
}

.routes {
  line-height: 60px;
}

nav a {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  color: #2c3e50;
  margin: 0px 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
