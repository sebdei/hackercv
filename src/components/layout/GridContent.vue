<template>
  <div class="grid">
    <div :key="item.id" v-for="item in items">
      <slot v-bind:item="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;

  grid-gap: 2.5em;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
</style>
