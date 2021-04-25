<template>
  <div id="markdown-content" v-html="compiledMarkdown" />
</template>

<script>
/* import NotFound404 from '@/components/error/NotFound404' */

import axios from 'axios'
import marked from 'marked'
import Prism from 'prismjs'

import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism.css'

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
          highlight(md, lang) {
            //TODO: extract if code
            let prismLang = '';

            switch(lang) {
              case 'java':
                prismLang = Prism.languages.java;
                break;
              case 'python':
                prismLang = Prism.languages.python;
                break;
              default:
                prismLang = Prism.languages.javascript;
            }

            return Prism.highlight(md, prismLang, lang);
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
