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
          url: '/musique.jpeg',
          title: 'Musique',
          description: 'Mon style préféré est le Hip-Hop, j\'aime particulièrement Damso. La musique me détend et m\'aide a me concenter.'
        },
        {
          url: '/musculation.jpg',
          title: 'Musculation',
          description: 'Mon exercice préféré est le développé couché. Haltérophile en devenir, la musculation est pour moi bien plus qu\'un simple loisir. Elle prouve ma discipline.'
        },
        {
          url: '/cuisine.jpg',
          title: 'Cuisine',
          description: 'Je suis un véritable gourmet et j\'aime aussi mettre la main à la pâte. Cuisiner me permet de partager des moments avec ma famille ou mes amis.'
        },
        {
          url: '/anime.png',
          title: 'Animé / Manga',
          description: 'Depuis petit je suis passionné par les animés et les mangas. J\'aime particulièrement les animés de type Shonen comme Naruto, One Piece, Bleach, etc.'

        },
        {
          url: '/esport.png',
          title: 'Esport',
          description: 'L\'esport n\'est pas seulement un jeu, c\'est une compétition. J\'adore suivre les tournois et soutenir mes équipes préférées.'
        },
      ],
    };
  },
  methods: {

  }
  
}
</script>