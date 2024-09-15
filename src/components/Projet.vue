<template>
  <div>
    <div>
      <div class="main_conteneur">
        <div class="conteneur_image" :style="{ backgroundImage: 'url(' + projet.img + ')' }"></div>
        <div class="conteneur_description">
          <h1 class="titre">{{ projet.titre }}</h1>
          <div class="date">{{ projet.date }}</div>
          <p class="description">{{ projet.objectif }}</p>
          <p class="description">{{ projet.description }}</p>
          <p class="description">{{ projet.technologies }}</p>
          <p class="description">{{ projet.type_projet }}</p>
        </div>
      </div>
      <router-link :to="'/projet/' + projet.id" class="button">Plus d'information </router-link>
    </div>
  </div>
</template>

<style scoped>
.button {
  display: block;
  width: 200px;
  height: 50px;
  margin: 20px auto;
  background-color: var(--bleu_clair);
  text-align: center;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  line-height: 50px;
  text-decoration: none;
  margin-bottom: 10vh;
}

.description {
  margin-left: 1vw;
  text-align: left;
  font-size: 1rem;
  margin-top: 2vh;
  color: var(--beige);
}

.titre {
  text-align: center;
  font-size: 2rem;
  margin-top: 1vh;
  color: var(--beige);
}

.date {
  text-align: center;
  font-size: 1rem;
  margin-top: 1vh;
  color: var(--beige);
}

.main_conteneur {
  margin-right: 10vw;
  margin-left: 10vw;
  gap: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3vh 5vh;
  margin: auto;
  border-radius: 10px;
}

.conteneur_description {
  width: 400px;
  height: 400px;
  background-color: var(--bleu_clair);
  border-radius: 10px;
}

.conteneur_image {

  height: 400px;
  width: 800px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}


</style>

<script>
import ProjetsData from '../Json/ProjetsData.json';

export default {
  name: 'Projets',
  props: {
    projet: Object
  },
  data() {
    return {
      projets: ProjetsData.projets,
    }
  }
}
</script>
