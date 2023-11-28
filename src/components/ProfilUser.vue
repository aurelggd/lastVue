<template>
    <div class="body">
        <div class="profil">
            <h1> UTILISATEUR CONNECTÉ </h1>

            <p> Prénom : {{ utilisateur_actuel.prenom }} </p>
            <p> Nom : {{ utilisateur_actuel.nom }} </p>
            <p> Mail : {{ utilisateur_actuel.email }} </p>

            <button @click="disconnect"> Deconnexion </button>
        </div>
        <div class="routes">
            <router-link to="/ajouterProjet"> Créer un nouveau projet </router-link>
            <router-link to="/ajouterTache"> Créer une nouvelle tâche </router-link>
            <router-link to="/listProjets"> Liste des projets </router-link>
            <router-link to="/listTaches"> Liste des tâches </router-link>
        </div>
    </div>
</template>

<script setup>

const utilisateur_actuel = { nom: "Doe", prenom: "John", email: "john.doe@example.com" };

const disconnect = () => {
    alert("Disconnect user")
}
</script>

<style scoped>
p {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
}

.body {

    min-height: 100vh;
    font-family: 'Jost', sans-serif;
    background: skyblue;
}

.profil {
    width: 350px;
    height: fit-content;
    overflow: hidden;
    background: url("../assets/5968949.jpg") no-repeat center / cover;
    border-radius: 10px;
    box-shadow: 5px 3px 10px #000;
    margin: auto;
    padding: auto;
}


h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    margin: 60px 0px;
}

button {
    padding: 20px;
    margin: 30px 0px;
    background-color: skyblue;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
}

.routes {
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.routes a {
    text-decoration: none;
    border: 1px solid #ccc;
    background-color: grey;
    padding: 20px;
    display: block;
}
</style>