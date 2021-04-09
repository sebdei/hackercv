<template>
  <View title="Blog" :subTitle="content.subTitle">
    <GridContent :items="content.articles">
      <template v-slot:default="itemScope">
        <router-link :to="{ name: 'BlogDetails', params: { fileName: itemScope.item.fileName }}">
          <Card
            class="d-flex h-100"
            :sub-title="itemScope.item.subTitle"
            :title="itemScope.item.title">
            {{ itemScope.item.content }}
          </Card>
        </router-link>
      </template>
    </GridContent>
  </View>
</template>

<script>
import content from '@/ressources/views/blog/content.json'

import Card from '@/components/card/Card'
import GridContent from '@/components/layout/GridContent'
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
