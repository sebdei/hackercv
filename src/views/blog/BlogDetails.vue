<template>
  <div id="markdown-content" v-html="compiledMarkdown" />
</template>

<script>
/* import NotFound404 from '@/components/error/NotFound404' */

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
      return '<div class="text-center"><div class="spinner-border" role="status"></div></div>';
    }
  },
  mounted() {
    this.getContent(this.$route.params.fileName).catch(error => {
      console.log(error.message);
      /* TODO: throw 400 if post doesnt exist or 500 in case of API error */
    });
  },
  methods: {
    getContent: async function (fileName) {
      let path = `${this.content_api}/posts/${fileName}.md`;
      const response = await fetch(path);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const text = await response.text();
      this.content = text;
    }
  }
}
</script>
