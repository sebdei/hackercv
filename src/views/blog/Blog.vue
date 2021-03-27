<template>
  <ViewPage header="Blog">
    <p v-html="content.title"/>
  </ViewPage>
</template>

<script>
import content from '@/ressources/views/blog/content.json'

import ViewPage from '@/components/view/ViewPage'

export default {
  components: {
    ViewPage
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
