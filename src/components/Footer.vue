<template>
  <footer class="text-center container rounded">

    <div v-if="links.length > 0 ">
      <div class="container py-3">
        <FooterLinks :links="links"/>
      </div>
    </div>

    <!-- Theme -->
    <div class="text-center py-3">
      Theme created with
      <a href="https://github.com/sebdei/hackercv">hackercv</a>
      by Seb &#38; Nicho.
    </div>
    <!-- Theme -->

    <!-- Disclaimer -->
    <div class="container pb-3">
      <a href="disclaimer" class="mx-1 disclaimer">Disclaimer</a>
      <a href="gdpr" class="mx-1 disclaimer">GDPR</a>
    </div>
    <!-- Disclaimer -->

  </footer>
</template>
<script>
import FooterLinks from './FooterLinks'
import links from '@/ressources/components/footer_links.json'

export default {
  name: 'Footer',
  components: {
    FooterLinks
  },
  computed: {
    links: function () {
      return links
    }
  }
}
</script>
<style scoped>
  footer {
    background-color: #454545;
    color: #eeeeee;
  }

  .disclaimer:link {
    color: #888888;
    font-size: 0.7em;
  }
</style>
