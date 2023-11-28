<template>
    <div class="listprojet">
        <h1> PROJETS DISPONIBLES </h1>

        <table>
            <tr>
                <th> Titre </th>
                <th> Description </th>
                <th> Date de debut </th>
                <th> Date de fin </th>
            </tr>
            <tr v-for="projet in projets" :key="projet.titre">
                <td> {{ projet.prenom }} </td>
                <td> {{ projet.description }} </td>
                <td> {{ projet.debut }} </td>
                <td> {{ projet.fin }} </td>
            </tr>
        </table>

        <h1> Merci </h1>

    </div>
</template>
  
<script setup>
const projets = [
    {
        titre: "Projet 1",
        description: "Description du projet 1",
        debut: "2023-01-01",
        fin: "2023-02-01"
    },
    {
        titre: "Projet 2",
        description: "Description du projet 2",
        debut: "2023-03-01",
        fin: "2023-04-01"
    },
    {
        titre: "Projet 3",
        description: "Description du projet 3",
        debut: "2023-05-01",
        fin: "2023-06-01"
    }
];
</script>
  
<style scoped>
.about {
    margin: 50px 0px;
}

.about h1 {
    margin: 60px 0px;
}

table,
th,
td {
    border: 1px solid;
    padding: 20px;
}

table {
    width: 80%;
    margin: auto;
    border-collapse: collapse;
}</style>
  