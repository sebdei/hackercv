<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mb-2">{{ title }}</h5>
        <h6 class="card-subtitle mb-3 text-muted">{{ subTitle }}</h6>

        <p class="card-text">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content', 'subTitle', 'title']
}
</script>

<style scoped>
.card-body {
  padding: 1.5rem;
}
</style>