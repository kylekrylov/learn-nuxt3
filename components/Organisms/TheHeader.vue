<template>
  <header class="header">
    <div class="header__container _container">
      <NuxtLink
          to="/"
          class="header__logo"
      >
        <Logo/>
      </NuxtLink>

      <Navigation class="header__nav"/>
    </div>
  </header>
</template>

<script setup>
import Logo from "~/components/Atoms/Logo.vue";
import Navigation from "~/components/Molecules/Navigation.vue";

</script>

<style lang="scss">

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  padding: 8px 0;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    content: '';
    pointer-events: none;
    backdrop-filter: blur(8px);
  }

  // .header__container
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  // .header__logo
  &__logo {
    z-index: 1;
    max-width: 216px;
  }

  // .header__nav
  &__nav {
    margin-left: auto;
  }
}

</style>
