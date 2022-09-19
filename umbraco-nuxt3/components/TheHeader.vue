<template>
  <nav class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink to="/" class="header__logo">
          <span>📙</span> The Flying Trunk
        </NuxtLink>

        <button
          @click="toggle()"
          class="header__trigger"
          aria-label="Toggle navigation"
        >
          <svg
            viewBox="0 0 24 24"
            :class="{ 'header__close-icon': open, 'header__open-icon': !open }"
          >
            <path
              v-if="open"
              fill="currentColor"
              d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            ></path>
            <path
              v-else
              fill="currentColor"
              d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
            ></path>
          </svg>
        </button>

        <div
          v-if="navigation.hasItems"
          class="header__links"
          :class="{ 'header__links--open': open }"
        >
          <div
            v-for="item in navigation.items"
            :key="item.id"
            class="header__item"
          >
            <NuxtLink class="header__link" :to="item.view.href">
              {{ item.view.label }}
            </NuxtLink>

            <button
              v-if="item.view.children && item.view.children.length"
              class="header__trigger-sub"
              :class="{ 'header__trigger-sub--active': activeSub == item.id }"
              @click="toggleSub(item.id)"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                ></path>
              </svg>
            </button>

            <div
              v-if="item.view.children && item.view.children.length"
              class="header__sub"
              :class="{ 'header__sub--active': activeSub == item.id }"
            >
              <NuxtLink
                v-for="child in item.view.children"
                :key="child.sortOrder"
                class="header__sub-item"
                :to="child.href"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useNavigation } from "../stores/navigation";
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

const navigation = useNavigation();

let open = ref(false);
const activeSub = ref("");

const toggle = () => {
  open.value = !open.value;
};

const toggleSub = (id: string) => {
  if (id == activeSub.value) {
    activeSub.value = "";
  } else {
    activeSub.value = id;
  }
};

onBeforeRouteUpdate(() => {
  open.value = false;
  activeSub.value = "";
});
</script>

<style lang="postcss" scoped>
.header {
  background: var(--color-white);
  min-height: 60px;
  display: flex;
  align-items: center;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;

    @media (--viewport-md-min) {
      flex-direction: row;
    }
  }

  &__trigger {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 0.375rem;

    &:hover,
    &:focus {
      background: var(--color-gray-light);
    }

    @media (--viewport-md-min) {
      display: none;
    }
  }

  &__trigger-sub {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 0.375rem;

    &:hover,
    &:focus {
      background: var(--color-gray-light);
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    &--active {
      transform: rotate(180deg);
    }

    @media (--viewport-md-min) {
      display: none;
    }
  }

  &__open-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  &__close-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  &__links {
    display: flex;
    width: 100%;
    left: 0;
    background: var(--color-white);
    z-index: 1;
    border-top: 1px solid var(--color-gray-light);
    flex-direction: column;
    transition: max-height 0.2s, padding 0.2s, opacity 0.4s;
    visibility: hidden;
    padding: 0;
    opacity: 0;
    position: absolute;
    top: 60px;

    @media (--viewport-md-min) {
      border-top: none;
      top: 0;
      position: relative;
      opacity: 1;
      width: auto;
      flex-direction: row;
      visibility: visible;
    }

    &--open {
      opacity: 1;
      padding: 0.5rem 0;
      display: flex;
      visibility: visible;
    }
  }

  &__item {
    position: relative;
    padding: 0.5rem;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (--viewport-md-min) {
      padding: 0;
      margin-left: 1rem;

      &:hover {
        .header {
          &__sub {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
          }
        }
      }
    }
  }

  &__link {
    opacity: 0.9;
    transition: opacity 0.2s;
    font-weight: 500;
    padding: 0.5rem;

    @media (--viewport-md-min) {
      font-size: 0.875rem;
    }

    &:hover {
      opacity: 1;
    }
  }

  &__logo {
    font-family: var(--header-font-family);
    font-weight: bold;
    color: var(--color-primary-dark);
    font-size: 18px;
  }

  &__sub {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.95);
    transition: all 0.3s;
    right: 0;
    z-index: 10;
    padding: 1rem;
    border-radius: 0 0 0.75rem 0.75rem;
    background: var(--color-white);
    transform-origin: top right;
    width: 100%;
    position: absolute;
    top: 100%;

    @media (--viewport-md-min) {
      border-radius: 0.75rem;
      width: 20rem;
    }

    &--active {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }

  &__sub-item {
    padding: 0.5rem 1rem;
    display: block;
    font-weight: 500;
    opacity: 0.9;
    transition: all 0.2s;
    border-left: 1px solid var(--color-gray-light);

    @media (--viewport-md-min) {
      border-left: none;
      padding: 0.5rem;
      margin-block: 0.5rem;
      border-radius: 0.5rem;
    }

    &:hover,
    &.router-link-exact-active {
      border-radius: 0.5rem;
      background: var(--color-primary-light);
      color: var(--color-primary);
    }
  }
}
</style>
