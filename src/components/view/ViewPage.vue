<template>
  <div>
    <h2 class="mb-4">{{ header }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String
    }
  }
}
</script>

<style>

</style>
