<template>
  <div>
    <h2 class="mb-4">About</h2>
    <span>{{ content.aboutMe }}</span>
  </div>
</template>

<script>
import about from './about.json'

export default {
  computed: {
    content: function () {
      return about
    }
  }
}
</script>
