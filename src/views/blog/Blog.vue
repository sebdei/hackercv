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
import Card from '@/components/card/Card'
import GridContent from '@/components/layout/GridContent'
import View from '@/components/layout/View'

import axios from "axios";

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
  methods: {
   getContent() {
     axios
       .get(this.content_api + 'content.json')
       .then(response => (this.content = response.data));
   }
 },
 mounted(){
  this.getContent();
 }
}
</script>
