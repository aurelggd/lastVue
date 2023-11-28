<template>
  <div class="about">
    <h1> MEMBRES DU GROUPE </h1>

    <table>
      <tr>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Mail</th>
      </tr>
      <tr v-for="person in personnes" :key="person.email">
        <td> {{ person.prenom }} </td>
        <td> {{ person.nom }} </td>
        <td> {{ person.email }} </td>
      </tr>
    </table>

    <h1> Merci </h1>

  </div>
</template>

<script setup>
const personnes = [
            { nom: "Doe", prenom: "John", email: "john.doe@example.com" },
            { nom: "Smith", prenom: "Alice", email: "alice.smith@example.com" },
            { nom: "Johnson", prenom: "Bob", email: "bob.johnson@example.com" },
            { nom: "Williams", prenom: "Emily", email: "emily.williams@example.com" },
            { nom: "Brown", prenom: "David", email: "david.brown@example.com" }
        ]
</script>

<style scoped>
.about {
  margin: 50px 0px;
}

.about h1 {
  margin: 60px 0px;
}
table, th, td {
  border: 1px solid;
  padding: 20px;
}
table {
  width: 80%;
  margin: auto;
  border-collapse: collapse;
}
</style>
