<template>
  <View title="Projects" sub-title="Welcome to my block!">
    <GridContent :items="items">
      <template #default="itemScope">
        <Card class="d-flex h-100" :sub-title="itemScope.item.subTitle" :title="itemScope.item.title">
          {{ itemScope.item.description }}
        </Card>
      </template>
    </GridContent>
  </View>
</template>

<script>
import api from '@/service/api'

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
      this.items = await api.getItems("projects")
    }
  }
}
</script>
