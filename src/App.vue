<template>
  <div>
    <Menu  />
    <particles />
    <router-view />
  </div> 
</template>

<style>
  /* Vos styles ici */
</style>

<script>
import Accueil from './views/Accueil.vue';
import Carousel from './components/Carousel.vue';
import Competence from './components/Competence.vue';
import Cadregauche from './components/cadregauche.vue';
import Contact from './views/Contact.vue';
import Menu from './components/Menu.vue';
import Projets from './views/Projets.vue';
import particles from './components/particles.vue';

export default {
  components: {
    Accueil,
    Carousel,
    Competence,
    Cadregauche,
    Contact,
    Menu,
    Projets,
    particles

  },
  data() {
    return {
      currentComponent: 'Accueil'
    };
  },
  methods: {
    handleNavigation(pageName) {
      if (pageName === 'Contact') {
        this.currentComponent = pageName;
      } else {
        this.currentComponent = pageName;
      }
    }
  }
}
</script>
