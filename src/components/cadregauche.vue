<template>
  <div>
    <div class="qui">
      Qui suis-je ?
    </div>
    <div class="uneligne">
    <div class="main_conteneur">
      <div class="conteneur_selfi">
        <img src="/selfi.jpg" alt="Luc Bruzzone">
      </div>
      <div class="conteneur">
      <h2>Développeur Full-Stack</h2>
      <p>Je m'appelle Luc, j'ai 21 ans, je suis passioné par le développement informatique.
         Je suis actuellement en train de valider ma 3ème année de BUT informatique. </p>
    </div>
  </div>
    <div class="bouton">
      <a href="/cv.pdf" target="_blank" class="cv-button">CV</a>
   
  </div>
    </div>

  </div>
  </template>
  
<style scoped>
.uneligne{
  display: flex;
  margin-top: 35vh;
    margin-left: 10vh;
    margin-right: 10vh;
    margin-bottom: 20vh;
    position: relative;

    
    
}
.qui {
  position: absolute;
  font-size: 64px;
  color: var(--beige);
  bottom: 0;
  right: 0;
  margin-right: 30px;
  margin-bottom: -30px; /* Marge inférieure pour éviter tout chevauchement */
}
.main_conteneur {
    display: flex;
    justify-content: space-between; /* Spreads the children containers apart */
    align-items: flex-end; /* Aligne les enfants verticalement en bas */
    justify-content: flex-start; /* Aligne les enfants horizontalement à gauche */
    padding: 3vh 5vh; /* Adds space around the main container */
    background-color:  var(--bleu_clair); /* Pink border around the main container */
    border-radius: 10px;

}

.conteneur_selfi > img {
  max-width: 450px !important;
  width: 100% !important;
  height: auto;
  border-radius: 10px;
  margin-top: -30vh;
  
}


.conteneur {
  
    margin-left: 5vh;

    padding: 5vh; /* Adds space around the text */
    flex: 1; /* Takes up the remaining horizontal space in the main container */
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Aligns text to the left */
    justify-content: end; /* Vertically centers the text in the container */
    gap: 2vh; /* Space between h2 and p */
  

}

.conteneur h2, .conteneur p {
    margin: 0; /* Removes default margins */
    color: var(--beige); /* Sets text color to white */
}

.bouton {
    margin-left: 3vh; /* Space between the text container and the button */
    
    align-content: center;
    align-items: center;
    display: flex;
  
}

.bouton .cv-button, .bouton button {
      display: inline-block;
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
    name: 'Cadregauche'
}
</script>