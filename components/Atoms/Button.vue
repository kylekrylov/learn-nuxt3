<template>
  <button :class="mainClass">
    {{ props.text }}
  </button>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Кнопка'
  },
  modifier: {
    type: String,
    validator(value) {
      return ['bright', 'normal'].indexOf(value) !== -1;
    },
    default: 'normal',
  },
})

const mainClass = computed(() => {
  const className = 'button';
  return [
    className,
    {
      [`${className}--bright`]: props.modifier === 'bright',
    },
  ];
})

const text = ref('button')
</script>

<style lang="scss">
.button {
  padding: 10px 40px;
  background: var(--color-white);
  border-radius: 8px;
  transition: box-shadow .2s ease-in-out;

  &--bright {
    background: #60A3F2;
  }

  @media (any-hover: hover) {
    &:hover {
      box-shadow: inset 0 0 4px 4px rgba(0, 0, 0, 0.25)
    }
  }
}
</style>
