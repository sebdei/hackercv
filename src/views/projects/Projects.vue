<template>
  <View title="Projects" :sub-title="content.subTitle">
    <GridContent :items="content.projects">
      <template #default="itemScope">
<<<<<<< Updated upstream
        <Card
          :sub-title="itemScope.item.subTitle"
          :title="itemScope.item.title"
          class="d-flex h-100"
        >
          {{ itemScope.item.content }}
        </Card>
=======
        <a :href="itemScope.item.url" target="_blank">
          <Card
            :sub-title="itemScope.item.subTitle"
            :title="itemScope.item.title"
            class="d-flex h-100"
          >
            {{ itemScope.item.content }}
          </Card>
        </a>
>>>>>>> Stashed changes
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
