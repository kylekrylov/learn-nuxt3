<template>
  <footer class="footer">
    <div class="footer__container _container">
      <Button
          class="footer__btn"
          :text="'Do It'"
          :modifier="'bright'"
      />
      <Button
          class="footer__btn"
          :text="'Cancel'"/>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from "~/components/Atoms/Button.vue";

</script>

<style lang="scss">
.footer {
  padding: 25px 0;
  background: #303030;

  // .footer__container
  &__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  // .footer__btn
  &__btn {
    &:not(:first-child){
      margin-left: 32px;
    }
  }
}
</style>
