<template>
    <div class="profil">
        <h1> UTILISATEUR CONNECTÉ </h1>

        <p> Prénom : {{ utilisateur_actuel.prenom }} </p>
        <p> Nom : {{ utilisateur_actuel.nom }} </p>
        <p> Mail : {{ utilisateur_actuel.email }} </p>
    </div>
</template>

<script setup>

const utilisateur_actuel = { nom: "Doe", prenom: "John", email: "john.doe@example.com" };
</script>

<style scoped>


h1 {
  margin: 60px 0px;
}

</style>