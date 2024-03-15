<template>
  <div class="conteneur">
    <h1 class="grostitre">Portfolio :</h1>
    <h3 class="titre"> Description</h3>
    <p class="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus diam vel risus volutpat gravida. Praesent quam diam, tincidunt ac ex vel, hendrerit malesuada purus. Etiam viverra sapien urna, eget fermentum sem tincidunt sed. Vivamus tincidunt ipsum ultricies volutpat condimentum. Maecenas gravida ex a mi tincidunt efficitur. Pellentesque eu libero ipsum. Etiam efficitur mauris sed massa bibendum bibendum. Nunc finibus arcu at fermentum scelerisque. Suspendisse a ipsum sem.</p>
    <h3 class="titre"> Technologies :</h3>
    <img class="test" src="/Logo-Vuejs.png" />
  </div>
</template>

<style scoped>
.conteneur {
  width: 30%; /* Définit la largeur du conteneur à 30% de la largeur de l'écran */
  margin-left: auto; /* Centrer le conteneur */
  margin-right: auto; /* Centrer le conteneur */
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  height: 100vh; /* Vous pouvez ajuster cette valeur en fonction de vos besoins */
  color: var(--beige);
}
.grostitre {
  margin-bottom: 5vh;
  text-align: center; /* Ajout de cette ligne pour centrer le texte */
}
.titre{
  margin-bottom: 6vh;
}
.description{
  margin-bottom: 5vh;
}
.test{
  margin-top: -5vh;
}


</style>
<script>
export default {
  
  name: 'Portfolio'
  
}
</script>

