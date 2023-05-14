<template>
  <section class="sections-options">
    <div class="sections-options__container _container">
      <CardOption
          v-for="i in 2"
          :key="i"
          class="sections-options__card"
          :num="i"
      />
    </div>
  </section>
</template>

<script setup>
import CardOption from "~/components/Molecules/Cards/CardOption.vue";

</script>

<style lang="scss">
.sections-options {
  padding-top: 80px;
  padding-bottom: 80px;

  // .sections-options__container
  &__container {
    display: flex;
    //flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;

    @include md() {
      flex-direction: row;
    }
  }

  // .sections-options__card
  &__card {

    @include md() {
      max-width: 352px;
    }

    &:not(:first-child) {
      margin-top: 16px;

      @include md() {
        margin-top: unset;
        margin-left: 32px;
      }
    }
  }
}
</style>
