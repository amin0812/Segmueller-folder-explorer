<script setup>
import { onUpdated, ref } from 'vue';
import sdkclass from 'blocksdk';
const sdk = new sdkclass();

const formValues = ref({});



function setcont(){
  const content = document.querySelector("#widget-content").innerHTML;
  console.log(content);

  
  sdk.setContent(content);
  console.log(sdk);
}
/*sdk.getContent(function (content) {
  content = document.querySelector("#widget-content").innerHTML;;
  sdk.setContent(content, function (setContent) {
    // block content is now its original content + '.'
  });
});*/

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

onUpdated(setcont);


</script>


<template>
  <Vueform v-bind="vueform" />
  <div id="widget-content">
    <h1> {{ formValues.headline }}</h1>
    <div v-html="formValues.content"></div>
  </div>


</template>