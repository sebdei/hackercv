<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-2">{{ title }}</h5>
      <h6 class="card-subtitle mb-3 text-muted">{{ subTitle }}</h6>

      <p class="card-text">
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      default: '',
      type: String
    },
    subTitle: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped lang="scss">

.card-body {
  padding: 1.5rem;
  background-color: $background;
}

.text-muted {
  min-height: 2.5em;
  color: $subtle !important;
}
</style>
