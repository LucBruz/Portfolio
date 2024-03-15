// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importez le routeur
import Particles from "@tsparticles/vue3";
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import './assets/global.css';

const app = createApp(App);

app.use(Particles, {
  init: async (engine) => {
    const { loadSlim } = await import("@tsparticles/slim");
    await loadSlim(engine);
  },
});

app.use(router);
app.use(PerfectScrollbar);
app.mount('#app');
