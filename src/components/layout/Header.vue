<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light my-5">
      <div class="container">
        <h1 class="headline">Hacker CV</h1>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <div class="d-flex flex-grow-1 justify-content-end">
            <ul class="navbar-nav mb-lg-0">
              <li v-for="view in views" :key="view" class="nav-item">
                <router-link class="nav-link" :to="{ name: view }">
                  {{ view }}
                </router-link>
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
      return ['About', 'Projects', 'Blog']
    }
  }
}
</script>

<style>
.headline {
  position: relative;
}
.headline:after {
  content: "";
  background: black;
  position: absolute;
  top: -10px;
  right: -22px;
  /* padding-right: 6px; */
  height: 80%;
  width: 6px;
}
.headline:before {
  content: "";
  background: black;
  position: absolute;
  top: -10px;
  right: -20px;
  padding-top: 6px;
  width: 45%;
  height: 1px;
}
.headline:hover {
  color: #c90e00;
}

.headline:hover:before, .headline:hover:after {
  background: #c90e00;
}


</style>
