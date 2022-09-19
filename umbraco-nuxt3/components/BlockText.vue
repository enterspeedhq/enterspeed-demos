<template>
  <div class="container es-block-text" v-html="data.text" />
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="postcss">
.es-block-text {
  p {
    font-family: var(--secondary-font-family);
    font-size: 20px;
    line-height: 35px;
    color: var(--color-gray-dark);
    margin-bottom: 2rem;

    &:first-child {
      margin-top: 0;

      &::first-letter {
        font-size: 60px;
        margin-right: 4px;
        font-family: var(--header-font-family);
        color: var(--color-primary-dark);
        vertical-align: middle;
      }
    }
  }
}
</style>
