<template>

  <div class="conteneur">
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



.conteneur {
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
