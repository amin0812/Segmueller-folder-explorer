<script setup>
import { onUpdated, ref } from 'vue';
import sdk from 'blocksdk';

const formValues = ref({});
function setContent(){
  const content = document.querySelector("#widget-content").innerHTML;
  //console.log(content);
  sdk.setContent(content);
}

const vueform = ref({

  size: 'md',
  displayErrors: false,
  onChange: (Values) => { formValues.value = Values },
  schema: {
    title: {
      type: 'static',
      content: 'Custom Widget',
      tag: 'h1'
    },

    headline: {
      type: 'text',
    },

    content: {
      type: 'editor',
    }

  }

})

onUpdated(setContent);


</script>


<template>
  <Vueform v-bind="vueform" />
  <div id="widget-content">
    <h1> {{ formValues.headline }}</h1>
    <div v-html="formValues.content"></div>
  </div>


</template>