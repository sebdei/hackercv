<template>
  <View title="Projects" :sub-title="content.subTitle">
    <GridContent :items="content.projects">
      <template v-slot:default="itemScope">
        <Card
          class="d-flex h-100"
          :sub-title="itemScope.item.subTitle"
          :title="itemScope.item.title">
          {{ itemScope.item.content }}
        </Card>
      </template>
    </GridContent>
  </View>
</template>

<script>
import content from '@/ressources/views/projects/content.json'

import Card from '@/components/card/Card'
import GridContent  from '@/components/layout/GridContent'
import View from '@/components/layout/View'

export default {
  components: {
    Card,
    GridContent,
    View
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
