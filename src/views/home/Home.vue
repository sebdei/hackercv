<template>
  <div class="row d-flex justify-content-between">
    <div class="col-12 col-md-7 col-lg-6">
      <h2 class="mb-4">
        {{ content.title }}
      </h2>
      <p>
        {{ content.subTitle }}
      </p>
    </div>
    <div class="col-12 col-md-5 col-lg-3">
      <img class="img-fluid rounded" :src="content.avatarUrl" alt="hacker" />
    </div>
  </div>
</template>

<script>
import content from '@/ressources/views/home/content.json'

export default {
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
