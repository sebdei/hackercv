<template>
  <ViewPage header="About">
    <p>{{ content.title }}</p>
  </ViewPage>
</template>

<script>
import content from '@/ressources/views/about/content.json'

import ViewPage from '@/components/view/ViewPage'

export default {
  components: {
    ViewPage,
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
