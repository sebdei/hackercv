<template>
  <ViewPage header="Projects" :sub-title="content.subTitle">
    <div>
      <Card 
        v-for="project in content.projects" 
        :key="project.id"
        :sub-title="project.subTitle"
        :title="project.title">
        {{ project.content }}
      </Card>
    </div>
  </ViewPage>
</template>

<script>
import content from '@/ressources/views/projects/content.json'

import Card from '@/components/card/Card'
import ViewPage from '@/components/view/ViewPage'

export default {
  components: {
    Card,
    ViewPage
  },
  computed: {
    content: function () {
      return content
    }
  }
}
</script>
