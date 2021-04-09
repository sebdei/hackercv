<template>
  <component :is="blogpostComponent" v-if="blogpostComponent"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

import NotFound404 from '@/components/error/NotFound404'

export default {
  computed:  {
    blogpostComponent: function () {
      const fileName = this.$route.params.fileName
      return defineAsyncComponent({
        loader: () => import(`@/ressources/views/blog/blogposts/${fileName}`),
        errorComponent: NotFound404
      })
    }
  }
}
</script>
