<template>
  <View title="About" :sub-title="content.subTitle">
    <Timeline class="mb-6" />

    <div class="d-flex justify-content-center">
      <CtaLink :title="content.ctaTitle" :to="{ name: 'Projects' }" />
    </div>
  </View>
</template>

<script>
import content from '@/ressources/views/about/content.json'

import CtaLink from '@/components/buttons/CtaLink'
import Timeline from '@/components/Timeline'
import View from '@/components/layout/View'

export default {
  components: {
    CtaLink,
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
