<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import IconField from "primevue/iconfield";
import InputText from "primevue/inputtext";
import InputIcon from "primevue/inputicon";
import {ref} from "vue";
import {useRouter} from "vue-router";
import Button from "primevue/button";
const router = useRouter()
import Dialog from 'primevue/dialog';

const onRowSelect = (event) => {
  router.push(event.data.link)
}
const selectedRow = ref()
const dialogVisible = ref(false)
const data = ref([
  {
    id: 1,
    runnerName: "runner1",
    state: true,
    working: true,
    currentModel: "mistal",
    availableModels: "mistal, llama",
    address: "192.168.0.1",
    resources: "RTX 3090",
    link: "/models/1"
  },
  {
    id: 2,
    runnerName: "runner2",
    state: false,
    working: true,
    currentModel: "mistal",
    availableModels: "mistal, llama",
    address: "192.168.0.1",
    resources: "RTX 4090",
    link: "/models/2"
  }
])

const token = ref()

const getToken = () => {
  console.log("clicked")
}
</script>

<template>
  <Dialog v-model:visible="dialogVisible" modal header="New runner">
    <div>
      <p>How to register new runner</p>
      <p>Your token</p>
      <div @click="getToken">
        <IconField>
          <InputText disabled placeholder="hawa@441sad"></InputText>
          <InputIcon></InputIcon>
        </IconField>
      </div>
      <code>
        print("zalupa")
      </code>
    </div>
  </Dialog>
  <div class="ml-6 flex flex-col w-full">
    <div class="flex justify-between">
      <h1 class="text-3xl mb-6 font-bold">Runners</h1>
      <Button label="new" class="h-fit mr-6" @click="dialogVisible = true"></Button>
    </div>
    <DataTable v-model:selection="selectedRow" :value="data" selection-mode="single" class="w-full" data-key="id" @rowSelect="onRowSelect">
      <Column header="Name" :sortable="true" field="runnerName"></Column>
      <Column header="Current Model" :sortable="true" field="currentModel"></Column>
      <Column header="Available Models" field="availableModels"></Column>
      <Column header="Address" field="address"></Column>
      <Column header="Is available" :sortable="true" field="state"></Column>
      <Column header="Resources" field="resources"></Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>