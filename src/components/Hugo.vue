<template>
  <div class="conteneur">
    <h1 class="grostitre">Refonte du site du département</h1>
    <h3 class="titre"> Contexte :</h3>
    <p class="description"> Le site internet actuel du Département Informatique Graphique, disponible à l'adresse <br/> https://ig.iut-clermont.fr/, présente différentes anomalies techniques :</p>
    <ul>
      <li>Lenteur du serveur</li>
      <li>Erreurs sporadiques (base de données ne répond plus, erreurs 50X)</li>
      <li>Logos obsolètes</li>
      <li>Non ou faiblement éco-responsable</li>
    </ul>
    <h3 class="titre"> <br/>Objectifs : </h3>
    <p>Votre objectif est de créer un site internet mettant en valeur les compétences des étudiants du département. Il devra donc être éco-conçu, accessible et mettre en avant vos compétences en Informatique Graphique. Il est totalement concevable d'y intégrer des contenus en 3D temps-réel par le biais du WebGL (écrit en bas niveau, ou à l'aide d'un moteur comme Unity ou Unreal Engine).

Il devra également être possible d'ajouter de nouveaux articles ou contenus par une interface dédiée (accès back-office en ligne, ou autre moyen).</p>
    <h3 class="titre"> <br/>Technologies :</h3>
    <div class="conteneur_image">
    <img  width="300" height="100" class="test" src="/hugo.png" />
    <img  width="100" height="100" class="test" src="/blowfish.png" />
  </div>
  </div>
</template>

<style scoped>
.conteneur_image{
  gap: 3vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.conteneur {
  width: 30%; /* Définit la largeur du conteneur à 30% de la largeur de l'écran */
  margin-left: auto; /* Centrer le conteneur */
  margin-right: auto; /* Centrer le conteneur */
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  height: 85vh; /* Vous pouvez ajuster cette valeur en fonction de vos besoins */
  color: var(--beige);
}
.grostitre {
  margin-bottom: 5vh;
  text-align: center; /* Ajout de cette ligne pour centrer le texte */
}
.titre{
  margin-bottom: 6vh;
}
.description{
  margin-bottom: 5vh;
}
.test{
  margin-top: -5vh;
}


</style>
<script>
export default {
  
  name: 'Portfolio'
  
}
</script>

