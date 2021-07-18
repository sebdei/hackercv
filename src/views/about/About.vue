<template>
  <View :title="item.title" :sub-title="item.subTitle" v-if="item">
    <Timeline class="mb-6" />

    <div class="d-flex justify-content-center">
      <CtaLink :title="item.ctaTitle" :to="{ name: 'Projects' }" />
    </div>
  </View>
</template>

<script>
import api from '@/service/api'

import CtaLink from '@/components/buttons/CtaLink'
import Timeline from './timeline/Timeline'
import View from '@/components/layout/View'

export default {
  components: {
    CtaLink,
    Timeline,
    View
  },
  data () {
    return {
      item: null
    }
  },
  mounted () {
    this.setItem()
  },
  methods: {
    setItem: async function () {
      const items = await api.getItems('about')
      this.item = items?.length && items[0]
    }
  }
}
</script>
