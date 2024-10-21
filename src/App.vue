<script setup>
</script>

<template>
  <component :is="$route.meta.layout || 'layout'">
    <router-view></router-view>
  </component>
</template>