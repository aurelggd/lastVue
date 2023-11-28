<template>
    <div class="profil">
        <h1> UTILISATEUR CONNECTÉ </h1>
        <button @click="disconnect"> Deconnexion </button>

        <p> Prénom : {{ utilisateur_actuel.prenom }} </p>
        <p> Nom : {{ utilisateur_actuel.nom }} </p>
        <p> Mail : {{ utilisateur_actuel.email }} </p>

        <router-link to="/about"> Créer un nouveau projet </router-link>
        <router-link to="/auth"> Créer une nouvelle tâche </router-link>
        <router-link to="/auth"> Liste des projets </router-link>
        <router-link to="/auth"> Liste des tâches </router-link>
    </div>
</template>

<script setup>

const utilisateur_actuel = { nom: "Doe", prenom: "John", email: "john.doe@example.com" };

const disconnect = () => {
    alert("Disconnect user")
}
</script>

<style scoped>
h1 {
    margin: 60px 0px;
}

button {
    padding: 20px;
    margin: 30px 0px;
    background-color: rgb(235, 25, 25);
    border: 1px solid #ccc;
    cursor: pointer;
}

a {
    text-decoration: none;
    border: 1px solid #ccc;
    background-color: grey;
    margin-top: 30px;
}
</style>