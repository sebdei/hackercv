<template>
  <ViewPage header="Blog">
    <span>{{ content.title }}</span>
  </ViewPage>
</template>

<script>
import content from './content.json'

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
