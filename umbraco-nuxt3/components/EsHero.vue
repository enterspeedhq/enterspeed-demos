<template>
  <div class="es-hero">
    <img
      class="es-hero__image"
      src="~/assets/img/fairy-tale-header.jpg"
      :alt="$content().route.heroHeader"
    />

    <div class="es-hero__content">
      <h1 class="es-hero__title">{{ $content().route.heroHeader }}</h1>
      <p class="es-hero__text">{{ $content().route.heroDescription }}</p>

      <NuxtLink
        v-if="$content().route.heroCTALink"
        :to="$content().route.heroCTALink.view.url"
        class="button"
      >
        {{ $content().route.heroCTACaption }}
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.es-hero {
  position: relative;
  background: var(--color-black);
  color: var(--color-white);
  text-align: center;
  padding: 5rem 0;

  @media (--viewport-sm-min) {
    padding: 9rem 0;
  }

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
    font-size: 1.5rem;
    color: var(--color-primary-light);

    @media (--viewport-sm-min) {
      font-size: 2.25rem;
    }

    @media (--viewport-md-min) {
      font-size: 3.75rem;
    }
  }

  &__text {
    margin: 3.5rem;
  }

  &__content {
    max-width: 48rem;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
}
</style>
