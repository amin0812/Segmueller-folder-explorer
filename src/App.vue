<script setup>
import { onUpdated, ref } from 'vue';
import sdkclass from 'blocksdk';

const sdk = new sdkclass();


const formValues = ref({});



function setcont() {
  const content = document.querySelector("#widget-content").innerHTML;
  console.log(content);
  sdk.setContent(content);
  console.log(sdk);
}
function filteredList() {
          return formValues.filter((search) =>
          search.toLowerCase().includes(input.value.toLowerCase())
          );}


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
    search: {
      type: 'text',
      placeholder: 'Search...',
      onChange: (value) => {
        formValues.value.searchQuery = value;
          console.log('Search query:', value);
        }
      },

      headline: {
        type: 'text',
      },
      content: {
        type: 'editor',
      },
      customField: {
        type: 'custom',
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
    <div v-html="formValues.elem"></div>
  </div>


</template>