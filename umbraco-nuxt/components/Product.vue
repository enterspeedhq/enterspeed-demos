<template>
  <div class="es-product">
    <div class="container">
      <div class="es-product__inner">
        <div class="es-product__content">
          <h1 class="es-product__title">{{ $content().route.name }}</h1>
          <p class="es-product__description">
            {{ $content().route.description }}
          </p>

          <button class="button">
            {{ $translate("BuyNow") }}
            {{ $content().route.price }}
            {{ $content().route.currency.view.defaultCurrency }}
          </button>
        </div>

        <div class="es-product__image">
          <img
            src="~/assets/img/the-flying-trunk-book.jpg"
            :alt="$content().route.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.es-product {
  background: var(--color-primary-lighter);
  padding: 8rem 0;

  &__title {
    font-family: var(--base-font-family);
    font-size: 1.875rem;

    @media (--viewport-md-min) {
      font-size: 3rem;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (--viewport-sm-min) {
      flex-direction: row;
    }
  }

  &__content {
    flex: 1 1 0%;
    padding: 2rem;

    :deep(.button) {
      width: 100%;
      display: block;

      @media (--viewport-sm-min) {
        width: auto;
        display: inline-block;
      }
    }
  }

  &__description {
    font-size: 1.125rem;
    margin-block: 1.5rem;
  }

  &__image {
    flex: 1 1 0%;
    border-radius: 0.375rem;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    margin: 0 -0.5rem;

    @media (--viewport-sm-min) {
      margin: 0;
    }
  }
}
</style>
