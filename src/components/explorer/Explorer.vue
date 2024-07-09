<script setup>
import Folders from './components/Folders.vue';
import Explorer from './classes/Explorer';

const props = defineProps(["server"])

const explorer = new Explorer(props.server);

</script>

<template>
    <ul>
      <li>
        Root:
        <Folders  :folders="explorer.folders" />
      </li>
    </ul>
  </template>