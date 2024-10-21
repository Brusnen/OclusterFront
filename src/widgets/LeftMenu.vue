<script setup>
import Menu from "primevue/menu";
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter()
const items = ref(
  [
      {
        label: "Ocluster",
        items: [
        {
          label: "Dashboard",
          command: () => {
            router.push('/dashboard');
          }
        }
        ]
      },
    {
      label: "Overview",
      items: [
        {
          label: "Models",
          command: () => {
            router.push('/models');
          }
        },
        {
          label: "Runners",
          command: () => {
            router.push('/runners');
          }
        }
      ]
    }
  ]
)
</script>

<template>
  <Menu :model="items" class="w-[10%] h-full"></Menu>
</template>

<style scoped>

</style>