<template>
  <div>
  <div class="conteneurbouton">
    <div class="bouton">
      <a href="/cv.pdf" target="_blank" class="cv-button" download>Télécharger mon CV</a>
    </div>
  </div>
  <div class="conteneur">
    <iframe src="/cv.pdf" width="850" height="1210" style="border: none;"></iframe>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cv'
}
</script>

<style>

.conteneurbouton {

  justify-content: center;
  display: flex;

}
.conteneur {

  justify-content: center;
  display: flex;
  margin-bottom: 50px;
}
.cv-button {
  display: block;
  text-decoration: none;
  background-color: var(--bleu);
  border: none;
  border-radius: 30px;
  padding: 10px 30px;
  color: var(--beige);
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 300px;
  text-align: center;
  margin: 5vh auto;
}

.cv-button:hover {
  background-color: var(--beige);
  color: var(--bleu);
}
</style>
