<template>
  <div>
    <div class="row d-flex justify-content-between mb-5">
      <div class="d-flex flex-column col-12 col-md-7 col-lg-6">
        <h2 class="mb-4">
          {{ content.title }}
        </h2>
        <p>
          {{ content.subTitle }}
        </p>

        <div class="mb-5">
          <CtaLink :title="content.ctaTitle" :to="{ name: 'About' }" />
        </div>
      </div>
      <div class="col-12 col-md-5 col-lg-3">
        <img class="img-fluid rounded-circle" :src="content.avatarUrl" alt="hacker">
      </div>
    </div>
  </div>
</template>

<script>
import content from '@/ressources/views/home/content.json'

import CtaLink from '@/components/buttons/CtaLink'

export default {
  components: {
    CtaLink
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
