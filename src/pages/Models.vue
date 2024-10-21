<script setup>

import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import InputIcon from "primevue/inputicon";
import IconField from "primevue/iconfield";
import FileUpload from "primevue/fileupload";
import Dialog from "primevue/dialog";
import {ref} from "vue";
const dialogVisible = ref(false)
const fileupload = ref();
const upload = () => {
  fileupload.value.upload();
};

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
</script>

<template>
  <Dialog v-model:visible="dialogVisible" modal header="New Model">
    <div>
      <p>Upload new Model</p>
      <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" :maxFileSize="1000000" @upload="onUpload" />
    </div>
  </Dialog>
  <div class="ml-6 flex flex-col w-full">
    <div class="flex justify-between">
      <h1 class="text-3xl mb-6 font-bold">Models</h1>
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