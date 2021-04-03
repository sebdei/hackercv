<template>
  <h4>{{ title }}</h4>
  {{ text }}
</template>
<script>

export default {
  name: 'TimelinePost',
  props: {
    text: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }

  }
}
</script>
<style scoped>
</style>

