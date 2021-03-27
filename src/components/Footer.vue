<template>
  <!-- Footer -->
  <footer class="text-center ">
    <!-- Grid container -->
    <div class="container p-4">
      <FooterLinks :links="links"/>
    </div>

    <!-- Copyright -->
    <div class="text-center p-3">
      Theme created with
      <a href="https://github.com/sebdei/hackercv">hackercv</a>
      by Seb &#38; Nicho.
    </div>
    <!-- Copyright -->

  </footer>
  <!-- Footer -->
</template>
<script>
import FooterLinks from './custom/FooterLinks'
import links from './custom/footer_links.json'

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
</style>
