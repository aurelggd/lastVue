<template>
  <div>
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true">

      <div class="signup">
        <form>
          <label for="chk" aria-hidden="true">Sign Up</label>
        </form>
      </div>
    </div>
  </template>

<style scoped>

form {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
