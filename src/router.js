import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './views/Accueil.vue';
import Contact from './views/Contact.vue';
import Projets from './views/Projets.vue';
import Cv from './views/Cv.vue';
import Portfolio from './components/Portfolio.vue';
import ProjetDetail from './components/ProjetDetail.vue'; // Importez ProjetDetail.vue
import ProjetsData from './Json/ProjetsData.json';

const routes = [
  { path: '/', component: Accueil },
  { path: '/contact', component: Contact },
  { path: '/projet', component: Projets },
  { path: '/projet/portfolio', component: Portfolio },
  { path: '/cv', component: Cv },

  // Utilisez ProjetDetail.vue pour afficher les détails de chaque projet
  ...ProjetsData.projets.map(projet => ({
    path: `/projet/${projet.id}`,
    component: ProjetDetail, // Utilisez ProjetDetail.vue ici
    props: { projet: projet }
  }))
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
