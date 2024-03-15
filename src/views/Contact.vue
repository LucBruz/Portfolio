<template>
  <div class="contact-page">
    <h1>Contactez-Moi</h1>
    <div class="icons-container">
      <a class="icon-box gmail" href="mailto:lucbruzzone@gmail.com" target="_blank" rel="noopener noreferrer"></a>
      <a class="icon-box linkedin" href="https://www.linkedin.com/in/luc-bruzzone/" target="_blank" rel="noopener noreferrer"></a>
      <a class="icon-box instagram" href="https://www.instagram.com/luc_bruz/" target="_blank" rel="noopener noreferrer"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
};
</script>

<style scoped>
.contact-page {
  max-width: 90vw;
  margin: 2em auto;
  padding: 2em;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  color: var(--beige);
}

h1 {
  text-align: center;
  margin-bottom: 1.5em;
}

.icons-container {
  display: flex;
  justify-content: center;
  gap: 10vh; 
}

.icon-box {
  width: 15vh; /* Augmentation de la taille */
  height: 15vh; /* Augmentation de la taille */
  border: 1px solid var(--bleu_foncee);
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10vh;
}


.gmail {
  background: url('/gmail.png') center/cover no-repeat;
}

.linkedin {
  background: url('/LinkedIn.png') center/cover no-repeat;
}

.instagram {
  background: url('/instagram.png') center/cover no-repeat;
}
</style>
