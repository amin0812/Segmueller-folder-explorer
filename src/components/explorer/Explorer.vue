<template>
  <Folders :folders="explorer.folders" :explorer="explorer" @folderSelected="forwardFolderSelected"/>
</template>

<script setup>
import Folders from './components/Folders.vue';
import Explorer from './classes/Explorer';
import { defineProps, defineEmits } from 'vue';

const props = defineProps(["server"]);
const explorer = new Explorer(props.server);

const emit = defineEmits(['folderSelected']);

function forwardFolderSelected(folderId) {
  emit('folderSelected', folderId);
}
</script>
