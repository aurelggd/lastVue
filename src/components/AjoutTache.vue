<template>
    <div class="ajouttache">

        <h1>Création de Tâches</h1>

        <!-- Formulaire de création de tache -->
        <form @submit.prevent="ajouterTache()">
            <label for="titre">Titre de la tâche :</label>
            <input type="text" id="titre" v-model="newTache.titre_tache" required>

            <label for="description">Description de la tâche :</label>
            <textarea id="description" v-model="newTache.description_tache" required></textarea>

            <label for="etat">Etat de la tâche :</label>
            <select id="etat" v-model="newTache.etat">
                <option value="pas_encore">Pas encore commencée</option>
                <option value="en_cours">En cours</option>
                <option value="complete">Complétée</option>
            </select>

            <label for="dateDebut">Date de debut la tâche :</label>
            <input type="date" id="dateDebut" v-model="newTache.date_debut_tache" required>

            <label for="deadline">Date de fin la tâche::</label>
            <input type="date" id="deadline" v-model="newTache.deadline_tache" required>

            <br><br>
            <button type="submit">Ajouter Tâche</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const newTache = ref({
  titre_tache: '',
  etat: '',
  description_tache: '',
  date_debut_tache: '',
  deadline_tache: ''
});

console.log(newTache.value)

// envoyer newTache dans la base de donnée

</script>

<style scoped>
h1 {
    margin: 30px 0px;
}
form {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
    width: 500px;
    height: 600px;
    overflow: hidden;
    background: skyblue;
    border-radius: 10px;
    box-shadow: 5px 3px 10px #000;
    margin: auto;
    padding: auto;
    padding-top: 11px;
}
label {
    display: block;
    margin: 5px 0px;
}
input, textarea {
    width: 400px;
    outline: none;
    padding: 20px;
    border: 1px solid rgb(78, 78, 78);
    border-radius: 5px;
}
button {
    padding: 20px;
    width: 400px;
    outline: none;
    margin: 10px 0px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

#etat{
    padding: 20px;
    width: 400px;
    outline: none;
    margin: 10px 0px;
}

</style>