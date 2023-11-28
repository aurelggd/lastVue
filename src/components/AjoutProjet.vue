<template>
    <div class="ajoutprojet">

        <h1>Création de Projet</h1>

        <!-- Formulaire de création de projet -->
        <form @submit.prevent="ajouterProjet()">
            <label for="titre">Titre du Projet:</label>
            <input type="text" id="titre" v-model="newProject.titre_projet" required>

            <label for="description">Description du Projet:</label>
            <textarea id="description" v-model="newProject.description_projet" required></textarea>

            <label for="dateDebut">Date de Début:</label>
            <input type="date" id="dateDebut" v-model="newProject.date_debut_projet" required>

            <label for="deadline">Deadline:</label>
            <input type="date" id="deadline" v-model="newProject.deadline_projet" required>

            <button type="submit">Ajouter Projet</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const newProject = ref({
  titre_projet: '',
  description_projet: '',
  date_debut_projet: '',
  deadline_projet: ''
});

console.log(newProject.value)

// envoyer newProject dans la base de donnée

</script>

<style>
label {
    display: block;
    margin: 10px 0px;
}
</style>