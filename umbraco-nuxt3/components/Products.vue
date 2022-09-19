<template>
  <div>
    <EsPageHeader />

    <div class="container">
      <div class="es-products">
        <NuxtLink
          v-for="product in $content().route.products"
          :key="product.id"
          :to="product.view.href"
          class="es-products__product"
        >
          <img
            class="es-products__image"
            src="~/assets/img/the-flying-trunk-book.jpg"
            :alt="product.view.name"
          />

          <div class="es-products__content">
            <strong class="es-products__name">{{ product.view.name }}</strong>

            <p class="es-products__description">
              {{ product.view.description }}
            </p>

            <p class="es-products__price">
              {{ product.view.price }}
              {{ product.view.currency.view.defaultCurrency }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.es-products {
  display: grid;
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  @media (--viewport-sm-min) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  &__product {
    box-shadow: var(--box-shadow);
    background: var(--color-white);
    border-radius: 0.375rem;
    overflow: hidden;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-4px);
    }
  }

  &__content {
    padding: 1.5rem;
    text-align: center;
    font-style: italic;
  }

  &__description {
    color: var(--color-gray);
  }
}
</style>
