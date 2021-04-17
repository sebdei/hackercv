<template>
  <div v-html="compiledMarkdown" />
</template>

<script>
/* import NotFound404 from '@/components/error/NotFound404' */

import axios from 'axios'
import marked from 'marked'
import highlight from 'highlight.js';
/* import 'highlight.js/styles/github.css'; */
import 'highlight.js/styles/solarized-dark.css';

export default {
  data() {
    return {
      content: {}
    };
  },
  computed: {
    compiledMarkdown: function() {
      // check if content is loaded
      if (typeof this.content === "string") {
        return marked(this.content, {
          highlight(md) {
            return highlight.highlightAuto(md).value
          }
        });
      }
      return 'Try loading content...';
    }
  },
  mounted(){
    this.getContent(this.$route.params.fileName);
  },
  methods: {
    getContent(fileName) {
     axios
       .get(this.content_api + 'posts/' + fileName + '.md')
       .then(response => (this.content = response.data));
       /* TODO: add error 404 */
    }
  }
}
</script>

// scoped sytle doesn't work with highlight.js for unknown reason
<style module lang="scss">
  pre {
    background-color: $background-code;
    padding: 20px;
    border: $border-code;
    border-radius: 4px;
  }
</style>
