<template>
  <div class="body">
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true">

      <div class="signup">
        <form>
          <label for="chk" aria-hidden="true">Sign Up</label>
          <input type="text" name="txt" placeholder="User name" required>
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="pswd" placeholder="Password" required>
          <button>Sign Up</button>

        </form>
      </div>

      <div class="login">
        <form @submit.prevent="redirect_path">
          <label for="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="pswd" placeholder="Password" required>
          <button>Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';

const redirect_path = () => {
  alert("You will be redirect to the management dashboard")

  // normalement apres verification ... 
  router.push({ name: 'profil', params: { username: 'eduardo' } })
}
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0 0 220px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Jost', sans-serif;
  background: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

.main {
  width: 350px;
  height: 500px;
  background: red;
  overflow: hidden;
  background: url("../assets/imgProjet.jpg") no-repeat center / cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
}

#chk {
  display: none;
}

.signup {
  position: relative;
  width: 100%;
  height: 100%;
}

label {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}

input {
  width: 60%;
  height: 30px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}

button {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: .2s ease-in;
  cursor: pointer;
}

button:hover {
  background: #6d44b8;
}

.login {
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: .8s ease-in-out;
}

.login label {
  color: #573b8a;
  transform: scale(.6);
}

#chk:checked~.login {
  transform: translateY(-500px);
}

#chk:checked~.login label {
  transform: scale(1);
}

#chk:checked~.signup label {
  transform: scale(.6);
}
</style>
