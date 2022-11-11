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
import Footer from './components/layout/footer/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';

@font-face {
    font-family: "Roboto Mono";
    src: url('/assets/font/RobotoMono-Medium.woff') format('woff')
}

h1, h2, h3, h4, h5 {
  font-family: "Roboto Mono", monospace;
}

html, body {
  height: 100%;
  margin: 0;
  background-color: $background;
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
</style>
