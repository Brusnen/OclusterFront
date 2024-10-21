<script setup>
import Header from "../../widgets/Header.vue";
import LeftMenu from "../../widgets/LeftMenu.vue";
</script>

<template>
  <Header/>
  <div class="flex flex-row">
    <LeftMenu/>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>