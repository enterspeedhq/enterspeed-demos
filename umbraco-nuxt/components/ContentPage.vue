<template>
  <div>
    <EsPageHeader />

    <div class="es-content-page">
      <component
        v-for="(block, index) in $content().route.blocks"
        :key="index"
        :data="block"
        :is="block.alias"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.es-content-page {
  padding: 5rem 0;
}
</style>
