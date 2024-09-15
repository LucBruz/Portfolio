<template>
  <div class="conteneur">
    <h1 class="grostitre">On Va Ou</h1>
    <h3 class="titre"> Contexte :</h3>
    <p class="description"> En parralèle a mes études et pour améliorer mes compétences j'ai décidé de m'engager dans un
      projet</p>
    <h3 class="titre"> <br />Description : </h3>
    <p>L'objectif de ce site est assez simple et fonctionne en 3 étapes : </p> <br>
    <ul>
      <li>Récupérer la méthéo des 30 villes les plus touristiques en france via API et script pyton</li>
      <li>L'utilisateur rentre alors ces dates de voyages</li>
      <li>Puis le nombre de jours de mauvais temps tolérés</li>
      <li>Il peut enssuite regarder les différetes villes qui correspondent a ces choix et peut les trier</li>
    </ul>
    <h3 class="titre"> <br />Technologies :</h3>
    <div class="conteneur_image">
      <img height="150" class="test" src="/python.png" />
      <img height="150" class="test" src="/Logo-Vuejs.png" />
    </div>
  </div>
</template>

<style scoped>
.conteneur_image {
  gap: 3vw;
  justify-content: center;

}

.conteneur {
  width: 40%;
  /* Définit la largeur du conteneur à 30% de la largeur de l'écran */
  margin-left: auto;
  /* Centrer le conteneur */
  margin-right: auto;
  /* Centrer le conteneur */
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  height: 85vh;
  /* Vous pouvez ajuster cette valeur en fonction de vos besoins */
  color: var(--beige);
}

.grostitre {
  margin-bottom: 5vh;
  text-align: center;
  /* Ajout de cette ligne pour centrer le texte */
}

.titre {
  margin-bottom: 6vh;
}

.description {
  margin-bottom: 5vh;
}

.test {
  margin-top: -5vh;
}
</style>
<script>
export default {

  name: 'Portfolio'

}
</script>
