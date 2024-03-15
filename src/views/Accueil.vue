<template>
  <div class="main-container">
    <div class="content">
      <img src="/fond.png" alt="Image de fond" class="background-image">
    </div>
  </div>
  
  <cadregauche/>
  <Competence/>
  <Carousel :data="images" />
</template>
  
<style scoped>
    .main-container {
    height: 87vh;
    display: flex;
    flex-direction: column;
   
  }

  .bleu_foncee {
    color:var(--violet)
  }
  .background-image {
    margin-top: 5vh;
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    
  }


</style>

<script>
import Carousel from '../components/Carousel.vue';
import cadregauche from '../components/cadregauche.vue';
import Competence from '../components/Competence.vue';

export default {
  name: 'Accueil',
  components: {
    cadregauche,
    Competence,
    Carousel
},
  data() {
    return {
      images: [
        {
          url: '/musculation.jpg',
          title: 'Musculation',
          description: 'Mon exercice préféré est le développé couché. Haltérophile en devenir, la musculation est pour moi bien plus qu\'un simple loisir. C\'est à la fois une discipline, une passion et un moyen de me surpasser chaque jour.'
        },
        {
          url: '/musique.jpeg',
          title: 'Musique',
          description: 'Mon style préféré est le Hip-Hop, j\'aime particulièrement Damso. La musique me transporte et me permet d\'exprimer mes sentiments et mes émotions.'
        },
        {
          url: '/Veille_technologique.png',
          title: 'Veille Technologique',
          description: 'La technologie évolue rapidement, et il est essentiel de rester informé. Je consacre du temps chaque semaine à découvrir les dernières innovations et tendances dans le domaine technologique.'
        },
        {
          url: '/cuisine.jpg',
          title: 'Cuisine',
          description: 'Je suis un véritable gourmet et j\'aime aussi mettre la main à la pâte. Cuisiner me permet d\'exprimer ma créativité et de partager des moments de bonheur autour d\'un bon repas. Chaque plat que je prépare est une histoire d\'amour et de passion.'
        },
        {
          url: '/journalisme.jpeg',
          title: 'Journalisme',
          description: 'L\'information est le pilier de notre société. Je suis passionné par le journalisme car il donne une voix aux sans-voix et illumine les coins sombres de notre monde.'
        },
        {
          url: '/esport.png',
          title: 'Esport',
          description: 'L\'esport n\'est pas seulement un jeu, c\'est une compétition, une passion et un mode de vie. J\'adore suivre les tournois et soutenir mes équipes préférées.'
        },
      ],
    };
  },
  methods: {

  }
      
      // Ajoutez ici toute autre logique de navigation que vous pourriez avoir
    
  
}
</script>