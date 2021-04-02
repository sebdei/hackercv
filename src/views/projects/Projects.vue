<template>
  <ViewPage header="Projects">
    <p v-html="content.title" />

    <div class="row">
      <Card v-for="project in content.projects" :key="project.id"
            :sub-title="project.subTitle"
            :title="project.title" class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-6">
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
