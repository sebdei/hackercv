<template>
  <div>
    <h2 class="mb-4">
      {{ title }}
    </h2>
    <p v-if="subTitle" class="mb-5">
      {{ subTitle }}
    </p>
    
    <slot />
  </div>
</template>

<script>
export default {
  props: {
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
