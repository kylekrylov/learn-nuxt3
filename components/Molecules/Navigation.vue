<template>

  <nav
      class="nav"
      :class="mainClass"
  >
    <NuxtLink
        v-for="(item , i) in nav"
        :key="i"
        :to="`/${item.link}`"
        class="nav__link _link"
        @click="closeMenu"
    >
      {{ item.name }}
    </NuxtLink>
  </nav>

  <Burger
      class="nav__burger"
      @activeBurger="changedMenu"
      :active="activeMenu"
  />
</template>

<script setup>
import {computed, ref} from 'vue';
import nav from '~/simulationDate/navigation'

import Burger from '~/components/Atoms/Burger.vue';

const activeMenu = ref(false);

const closeMenu = () => {
  changedMenu(false);
  toggleBodyClass()
}

const toggleBodyClass = () => {
  document.body.classList.toggle('_lock')
};
const changedMenu = (newValue) => {
  activeMenu.value = newValue;
}

const mainClass = computed(() => {
  const className = 'nav'
  return [
    {
      [`${className}--active`]: activeMenu.value,
    }
  ]
})
</script>

<style lang="scss">

.nav {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 100vh;
  padding-top: var(--header-height);
  background: rgba(255, 255, 255, .3);
  border-bottom: 1px solid #CCCCCC;
  opacity: 0;
  transform: translateY(-10%);
  transition: all ease-in-out var(--time-animation);
  pointer-events: none;
  backdrop-filter: blur(8px);

  &--active {
    opacity: 1;
    transform: translateY(0%);
    pointer-events: visible;
  }

  @include md() {
    backdrop-filter: none;
    position: static;
    flex-direction: row;
    width: auto;
    padding-top: unset;
    background: none;
    border: none;
    opacity: 1;
    transform: translateY(0%);
    pointer-events: visible;
  }

  // .nav__link
  &__link {
    width: 100%;
    padding: 32px 12px;
    color: #323450;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    white-space: nowrap;

    @media (any-hover: hover) {
      &:hover {
        color: #4374E5;
        text-decoration: none;
      }
    }

    @include md() {
      padding: unset;
      font-size: 16px;
      line-height: 20px;

      &:not(:first-child) {
        margin-left: 32px;
      }
    }
  }
}
</style>

