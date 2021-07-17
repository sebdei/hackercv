<template>
  <View title="Projects" sub-title="Welcome to my block!">
    <GridContent :items="items">
      <template #default="itemScope">
        <Card
          class="d-flex h-100"
          :sub-title="itemScope.item.subTitle"
          :title="itemScope.item.title">

          <div v-html="itemScope.item.text"/>
          {{ itemScope.item.description }}
        </Card>
      </template>
    </GridContent>
  </View>
</template>

<script>
import apiClient from '@/service/api'

import Card from '@/components/card/Card'
import GridContent  from '@/components/layout/GridContent'
import View from '@/components/layout/View'

export default {
  components: {
    Card,
    GridContent,
    View
  },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.setItems()
  },
  methods: {
    setItems: async function () {
      const response = await apiClient.getEntries()
      this.items = response.items.map(item => item.fields)
    }
  }
}
</script>
