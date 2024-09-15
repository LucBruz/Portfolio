<template>

  <div class="conteneur">
    <a href="https://lucbruzzone.com/projet" target="_blank" rel="noopener noreferrer" class="lien">
      <svg class="croix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.707 15.293a.999.999 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414L10.586 12 5.293 6.707a.999.999 0 1 1 1.414-1.414L12 10.586l5.293-5.293a.999.999 0 1 1 1.414 1.414L13.414 12l5.293 5.293z"/>
      </svg>
    </a>
    <h1 class="grostitre">{{ projet.details.titre }}</h1>
    <h2 class="titre"> Contexte :</h2>
    <p class="description">{{ projet.details.contexte }}</p>
    <h2 class="titre"> Objectifs :</h2>
    <p class="description">{{ projet.details.objectifs }}</p>
    <h2 class="titre"> Technologies :</h2>
    <div class="conteneur_images">
      <img v-for="(image, index) in projet.details.images" :key="index" :src="image" class="image_projet" />
    </div>
  </div>
</template>

<style scoped>
.conteneur_images {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
}

.image_projet {
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
}

.lien {
  position: absolute;
  top: 10px;
  right: 10px;
}

.croix {
  width: 30px;
  height: 30px;
  fill: red; /* Couleur de la croix */
}

.conteneur {
  position: relative; /* assure que la position absolue de la croix est par rapport à ce conteneur */
  margin: 0 auto;
  border-radius: 30px;
  background-color: var(--bleu_clair);
  display: flex ;
  flex-direction: column;
  padding: 100px;
  width: 35%;
  margin-top: 5vh;
  color: var(--beige);
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 1);
  margin-bottom: 5vh;
}

.grostitre {
  margin-bottom: 5vh;
  text-align: center;
}

.titre {
  margin-bottom: 6vh;
}

.description {
  margin-bottom: 5vh;
}
</style>

<script>
export default {
  name: 'ProjetDetail',
  props: {
    projet: Object
  }
}
</script>
