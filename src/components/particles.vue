<template>
  <div id="app">
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="particlesOptions" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Particles from "@tsparticles/vue3";

export default defineComponent({
  components: {
    Particles,
  },
  data() {
    return {
      particlesOptions: {
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 240,
        interactivity: {
          events: {

          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },

          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 0.75,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 75,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      },
    };
  },
  methods: {
    particlesLoaded(container) {
      console.log("Particles container loaded", container);
    },
  },
});
</script>

<style scoped></style>
