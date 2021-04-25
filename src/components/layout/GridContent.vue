<template>
  <div class="grid">
    <div v-for="item in items" :key="item.id">
      <slot :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      default: () => [],
      type: Array
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;

  grid-gap: 2.5em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
