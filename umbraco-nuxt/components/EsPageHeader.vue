<template>
  <div class="es-page-header">
    <img
      class="es-page-header__image"
      src="~/assets/img/fairy-tale-header.jpg"
      alt=""
    />
    <h1 class="es-page-header__title">{{ $content().route.headline }}</h1>
  </div>
</template>

<style lang="postcss" scoped>
.es-page-header {
  position: relative;
  background: var(--color-black);
  padding: 5rem 0;
  border-bottom: 5px solid var(--color-primary);

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.25;
  }

  &__title {
    color: var(--color-white);
    position: relative;
    text-align: center;
    margin: 0;
    font-size: 2.25rem;

    @media (--viewport-md-min) {
      font-size: 3.75rem;
    }
  }
}
</style>
