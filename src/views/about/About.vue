<template>
  <View title="About" :sub-title="content.subTitle">
    <Timeline />
  </View>
</template>

<script>
import content from '@/ressources/views/about/content.json'

import View from '@/components/layout/View'
import Timeline from '@/components/Timeline'

export default {
  components: {
    Timeline,
    View
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
