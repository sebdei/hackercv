<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light my-5">
      <div class="container-fluid">
        <span>Hacker CV</span>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex flex-grow-1 justify-content-end"> 
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'Projects'}">Projects</router-link>
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

}
</script>
