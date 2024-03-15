<template>
  <div class="menu">
    <ul>
      <li><router-link to="/">ACCUEIL</router-link></li>
      <li><router-link to="/projet">PROJETS</router-link></li>
      <li><router-link to="/cv">CV</router-link></li>
      <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
  .menu {
    margin-top: 1vh;
    margin-right: 1vh;
    padding: 10px 20px;
    text-align: right;
    font-weight: 300;
    font-family: 'Merriweather', serif;
  }
  .menu ul li a {
    font-size: 20px;
    text-decoration: none !important;
    color: var(--beige);
    position: relative;
    overflow: hidden;
  }
  .menu ul li a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 0%;
    background-color: var(--beige);
    transition: width 0.25s ease;
  }
  .menu ul li a:hover::before {
    width: 100%;
  }
  .menu ul li {
    display: inline;
    margin-left: 15vh;
  }
</style>