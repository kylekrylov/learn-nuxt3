<template>
  <article class="card-options">
    <CardImage class="card-options__image"/>

    <div class="card-options__title _title">
      Option {{ num }}
    </div>

    <p class="card-options__description _text">
      Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
      "рыбой" для текстов на латинице с начала XVI века.
    </p>
  </article>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
  num: {
    type: Number,
    default: ''
  }
});

import CardImage from "~/components/Atoms/CardImage.vue";
</script>

<style lang="scss">

.card-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  background: var(--color-white);
  border-radius: 12px;
  transition: box-shadow .2s ease-in-out;

  // .card-options__images
  &__images {
    max-height: 42px;
    transition: all .2s ease-in-out;

    path {
      transition: fill .2s ease-in-out;
    }
  }

  // .card-options__title
  &__title {
    margin-top: 32px;
    font-size: 32px;
  }

  // .card-options__description
  &__description {
    margin-top: 16px;
    text-align: center;
    font-size: 16px;
  }

  &:hover {
    box-shadow: 0 4px 30px rgba(67, 116, 229, 0.4);

    .card-options {
      // .card-options__images
      &__images {
        path {
          fill: #4374E5;
        }
      }
    }
  }
}
</style>
