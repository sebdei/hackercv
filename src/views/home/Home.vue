<template>
  <div v-if="item">
    <div class="row d-flex justify-content-between">
      <div class="col-12 col-md-7 col-lg-6">
        <h2 class="mb-4">
          {{ item.title }}
        </h2>
        <p>
          {{ item.subTitle }}
        </p>
      </div>
      <div class="col-12 col-md-5 col-lg-3">
        <img class="img-fluid rounded" :src="assetUrl" alt="hacker">
      </div>
    </div>

    <CtaLink :title="item.ctaTitle" :to="{ name: 'About' }" />
  </div>
</template>

<script>
import api from '@/service/api'
import { getAssetUrlForItem } from '@/service/apiHelper'

import CtaLink from '@/components/buttons/CtaLink'

export default {
  components: {
    CtaLink
  },
  data () {
    return {
      item: null
    }
  },
  computed: {
    assetUrl: function () {
      return getAssetUrlForItem(this.item)
    }
  },
  mounted () {
    this.setItem()
  },
  methods: {
    setItem: async function () {
      const items = await api.getItems('home')
      this.item = items?.length && items[0]
    }
  }
}
</script>
