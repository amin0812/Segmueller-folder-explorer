<script setup>
import Categories from './components/Categories.vue';
import Explorer from './classes/Explorer';

const props = defineProps(["server"])

const explorer = new Explorer(props.server);

</script>

<template>
    <ul>
      <li>
        Root:
        <Categories  :categories="explorer.folders" />
      </li>
    </ul>
  </template>