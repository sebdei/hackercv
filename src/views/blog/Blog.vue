<template>
  <View title="Blog" :sub-title="content.subTitle">
    <GridContent :items="content.articles">
      <template #default="itemScope">
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
import Card from '@/components/card/Card'
import GridContent from '@/components/layout/GridContent'
import View from '@/components/layout/View'

export default {
  components: {
    Card,
    GridContent,
    View
  },
  data() {
    return {
      content: {}
    };
  },
  mounted() {
    this.getContent().catch(error => {
      console.log(error.message);
      /* TODO: throw 400 if post doesnt exist or 500 in case of API error */
    });
  },
  methods: {
    getContent: async function () {
      let path = `${this.content_api}/content.json`;
      const response = await fetch(path);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const text = await response.json();
      this.content = text;
   }
  }
}
</script>
