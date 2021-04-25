<template>
  <div class="d-flex justify-content-center">
    <span class="me-3">
      Find me
    </span>

    <div class="link-icon mx-1">
      <a :href="content.link_github" v-if="content.link_github">
        <img class="img-fluid" src="./icons/github.svg" />
      </a>
    </div>

    <div class="link-icon mx-1">
      <a :href="content.link_linkedin" v-if="content.link_linkedin">
        <img class="img-fluid" src="./icons/linkedin.png" />
      </a>
    </div>
  </div>
</template>

<script>
import content from '@/ressources/components/layout/footer/find_me.json'

export default {
  computed: {
    content: function () {
      return content
    }
  }
}
</script>

<style scoped>
.link-icon {
  height: 27px;
  width: 27px;
}
</style>
