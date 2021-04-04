<template>
  <ViewPage header="About" :sub-title="content.subtitle">
    <Timeline />
  </ViewPage>
</template>

<script>
import content from '@/ressources/views/about/content.json'

import ViewPage from '@/components/layout/View'
import Timeline from '@/components/Timeline'

export default {
  components: {
    Timeline,
    ViewPage
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
