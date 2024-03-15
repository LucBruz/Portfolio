<script>
import TechCard from './TechCard.vue'
import json from '../Json/Skill.json'

export default {
  name: 'Competence',
  data() {
    return {
      couleurs:[
        "#E0E0E0",
        "#B3E5FC",
        "#FFECB3",
        "#C8E6C9"
    ],
      json: json
    }
  },
  components: {
    TechCard
  },

}
</script>


<template>
  <div>
      <div class="card-container front-end">

 
        <div class="ligne" v-for="categorie in json.categories">
          <div class="category-title">{{ categorie.type }} </div>
          <div class="techs" v-for="skill in categorie.skills">
            <TechCard :title="skill.title" :image="skill.imageLink" :description="skill.description" :couleur="categorie.couleur" :couleurBack="categorie.couleurBack" :lien="skill.lien"/>
          </div>
        </div>
      </div>

  </div>
</template>




<style scoped>

.ligne{
  display: flex;
  flex-direction: row;
  gap : 20px;
  margin-bottom: 5vh;
  

}

.category-section {
  display: flex;
  
}
.category-title {
  display: flex;
  justify-content: center;
  color: var(--beige);
  width: 400px;
  font-size: 4vh;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin: auto;
  /* transform: translateY(-50%); */
  /* Ajustement pour s'assurer qu'il est parfaitement centré */
}

.techs {
  display: flex;
  flex-wrap: wrap; /* Permet aux éléments de s'enrouler sur plusieurs lignes */
  justify-content: center;
  
}
.category {
  margin-bottom: 20px; /* Ajouter un espacement entre les catégories */
}
.card-container {
  margin-left: 20vh;
  margin-top: 20vh;
  display: flex;
align-items: flex-start;
  flex-direction: column; /* Modifier la direction de la colonne pour empiler verticalement */
  
} 



</style>

