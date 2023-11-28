<template>
  <nav>
<<<<<<< HEAD
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/auth">Authentication</router-link>
=======
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <div class="routes">
      <router-link to="/about">About</router-link>
    </div>
>>>>>>> 5cd756bd80e23f4d6f5137cb21eeb95758a223f4
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
