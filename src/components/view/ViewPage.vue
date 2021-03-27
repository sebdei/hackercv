<template>
  <div>
    <h2 class="mb-4">{{ header }}</h2>

    <slot></slot> 
  </div>
</template>

<script>
export default {
  props: ['header']
}
</script>

<style>

</style>