<template>
  <div class="container">
    <div class="es-not-found">
      <h1>{{ $content().route.headline }}</h1>
      <p>{{ $content().route.description }}</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.es-not-found {
  text-align: center;
  padding: 100px 0;
}
</style>
