<template>
  <div v-for="projet in projets" :key="projet.id">
    <Projet  :projet="projet" />
  </div>
</template>

<style scoped>
</style>

<script>
import ProjetsData from '../Json/ProjetsData.json';
import Projet from '../components/Projet.vue';

export default {
  name: 'Projets',
  components: {
    Projet
  },
  data() {
    return {
      
      projets: ProjetsData.projets
    }
 
  }
  
}
</script>
