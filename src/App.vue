<template>
  <div class="d-flex flex-column w-100">
    <Header />
    <main class="container mb-5 flex-grow-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style lang="scss">
@import './assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;400;500&display=swap');
:root {
  --background: #ffffff;
  --accent: #c90e00;
  --subtle: #6c757d;

  --footer-background: #454545;
  --footer-text: #eeeeee;
  --footer-subtle: #888888;

  /* --background: #131316; */
  /* --accent: #c90e00; */
  /* --subtle: #999999; */

  /* --footer-background: #fcfcfc; */
  /* --footer-text: #333333; */
  /* --footer-subtle: #aaaaaa; */

}

html, body {
  height: 100%;
  margin: 0;
  background-color: var(--background); 
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  min-height: 100%;
}

h1, h2, h3, h4, h5 {
  font-family: "Roboto Mono";
}
</style>
