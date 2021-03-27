<template>
  <section>
    Find me:
    <span v-for="item in links" :key="item.link" class="mx-2">
      <a href="{{ item.link }}"><span v-html="item.text"/></a>
    </span>
  </section>
</template>
<script>

export default {
  name: 'FooterLinks',
  props: {
    links: {
      type: Array
    }
  }
}

</script>
<style scoped>

</style>

