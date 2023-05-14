<template>
  <TheHeader/>
  <main class="main">
    <NuxtPage/>
  </main>
  <TheFooter/>
</template>

<script setup>
import TheHeader from '~/components/Organisms/TheHeader.vue'
import TheFooter from '~/components/Organisms/TheFooter.vue'

useHead({
  bodyAttrs: {
    class: 'body'
  }
})
</script>
