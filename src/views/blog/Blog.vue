<template>
  <ViewPage header="Blog">
    <p v-html="content.title"/>

    <div class="row">
      <Card class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-6" :key="project.id" :subTitle="project.subTitle" :title="project.title" v-for="project in content.articles">
        {{ project.content }}
      </Card>
    </div>
  </ViewPage>
</template>

<script>
import content from '@/ressources/views/blog/content.json'

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
