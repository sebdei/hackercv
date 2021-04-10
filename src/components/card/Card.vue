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
    content: String,
    subTitle: String,
    title: String
  }
}
</script>

<style scoped>
.card-body {
  padding: 1.5rem;
  background-color: var(--background);
}

.card-subtitle {
  min-height: 2.5em;
  color: var(--subtle) !important;
}
</style>
