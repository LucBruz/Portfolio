<template>
  <div class="conteneur">
    <h1 class="grostitre">Intégration d'un chatbot au CTIFL</h1>
    <h3 class="titre"> Contexte :</h3>
    <p class="description"> Le <a href="https://www.ctifl.fr/">Centre technique interprofessionnel des fruits et
        légumes </a> est une entreprise qui aide les
      professionnels à être compétitifs et innovants tout en ayant une production durable. <br />
      Lors de mon stagr de fin d'étude, j'ai pu intégrer dans cette entreprisr un chatbot en interne </p>
    <h3 class="titre"> <br />Objectifs : </h3>
    <ul>
      <li>Accélérer le transfert vers les professionnels de la filière des fruits et légumes</li>
      <li>Faire un pas dans l’IA</li>
      <li>Optimiser le temps de recherche d’information.</li>
      <li>Mieux exploiter les ressources du CTIFL.</li>
      <li>Améliorer la qualité des réponses.</li>
    </ul>

    <h3 class="titre"> <br />Les étapes du projet :</h3>
    <p>Pendant ces 16 semaines, j'ai donc pu faire</p>
    <ul>
      <li>Récupération d'information</li>
      <li>Veille technologique</li>
      <li>Rédaction de cahier des charges</li>
      <li>Implémentation du fonctionnement</li>
      <li>Implémentation de l'interface</li>
      <li>Mise en recette</li>
    </ul>
    <h3 class="titre"> <br />Les résultats :</h3>
    <p>Le chatbot est maintenant en production et est utilisé par les employés du CTIFL.
      Il permet de répondre à des questions simples et complexes en utilisant les données de l'entreprise grâce au RAG.
      Pour le choix du modèle, Mistral a été choisi pour sa capacité a être performant malgré son poids.
      Le chatbot cite toujours les sources utilisé et un lecteur de PDF a été intégré pour permettre de lire les
      différents documents utilisés.
      Pour conclure ce stage a été une réussite et m'a permis de découvrir le monde de l'entreprise et de l'IA. Ainsi
      que d'obtenir mon anée de But Informatique haut la main avec un 17.40 en note de stage.
    </p>
    <h3 class="titre"> <br />Mon rapport</h3>
    <a href="rapport_de_stage"></a>
    <div class="bouton">
      <a href="/rapport_de_stage.pdf" target="_blank" class="cv-button">Rapport de stage</a>
    </div>
    <h3 class="titre"> <br />Technologies :</h3>
    <div class="conteneur_image">
      <img width="150" class="test" src="/python.png" />
      <img width="150" class="test" src="/blazor.png" />
    </div>
  </div>
</template>

<style scoped>
.conteneur_image {
  gap: 3vw;
  justify-content: center;
  display: flex;
  margin-top: 5vh;
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

.bouton {

  /* Space between the text container and the button */
  background-color: var(--bleu_foncee);
  align-content: center;
  align-items: center;
  display: flex;
  margin: auto;

}

.bouton .cv-button,
.bouton button {

  text-decoration: none;
  background-color: var(--bleu);
  border: none;
  border-radius: 30px;
  padding: 10px 30px;
  color: var(--beige);
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 150px;
  text-align: center;
}

.bouton .cv-button:hover {
  background-color: var(--beige);
  color: var(--bleu);
}
</style>
<script>
export default {

  name: 'Portfolio'

}
</script>
