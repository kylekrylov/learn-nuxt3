<template>
  <div
      :class="mainClass"
      @click="toggleClass"
  >
    <span class="burger__line"></span>
    <span class="burger__line"></span>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps, ref, watch} from "vue";

const emit = defineEmits(['statusChanged']);

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
});

const activeBurger = ref(false);

watch(() => props.active, (newVal) => {
  activeBurger.value = newVal;
});

const mainClass = computed(() => {
  const className = 'burger'
  return [
    className,
    {
      [`${className}--active`]: activeBurger.value
    }
  ]
})

const toggleClass = () => {
  changeStatus()
  toggleBodyClass()
  emit('activeBurger', activeBurger.value);
}

const changeStatus = () => {
  activeBurger.value = !activeBurger.value;
};

const toggleBodyClass = () => {
  document.body.classList.toggle('_lock')
};
</script>

<style lang="scss">

.burger {
  --size: 3em;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--size);
  height: calc(var(--size) * 3 / 8);


  @include md() {
    display: none;
  }

  &__line {
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #323450;
    border-radius: 5px;
    transform-origin: center;
    transition: transform var(--time-animation) ease-in-out,
    top var(--time-animation) ease-in-out var(--time-animation),
    bottom var(--time-animation) ease-in-out var(--time-animation);

    &:first-child {
      top: 0;
    }

    &:last-child {
      bottom: 0;
    }
  }

  &--active {

    .burger {
      &__line {
        transition-delay: var(--time-animation), 0s, 0s;

        &:first-child {
          top: calc(50% - (5px / 2));
          transform: rotate(45deg);
        }

        &:last-child {
          bottom: calc(50% - (5px / 2));
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
