<template>
  <h4>{{ title }}</h4>
  <div class="timeline-post">
    {{ subTitle }}
  </div>

  <small>
    {{ description }}
  </small>
</template>
<script>

export default {
  name: 'TimelinePost',
  props: {
    description: {
      type: String,
      default: ''
    },
    subTitle: {
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
.timeline-post {
  font-size: 1em;
}
</style>
