<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light my-5">
      <div class="container">
        <h1>Hacker CV</h1>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex flex-grow-1 justify-content-end"> 
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item" :key="view" v-for="view in views">
                <router-link class="nav-link" :to="{ name: view }">{{ view }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    views: function () {
      return ['About', 'Projects']
    }
  }
}
</script>
