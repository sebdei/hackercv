<template>
  <div>
    <h2 class="mb-4">
      {{ title }}
    </h2>
    <p class="mb-5" v-if="subTitle">
      {{ subTitle }}
    </p>
    
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>
