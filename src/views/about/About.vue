<template>
  <ViewPage header="About">
    <p v-html="content.title" />
  </ViewPage>
  <Timeline />
</template>

<script>
import content from '@/ressources/views/about/content.json'

import ViewPage from '@/components/view/ViewPage'
import Timeline from '@/components/Timeline'

export default {
  components: {
    Timeline,
    ViewPage,
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
