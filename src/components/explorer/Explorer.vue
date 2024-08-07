<template>
  <div class="container">
    <Folders :folders="explorer.folders" :explorer="explorer" @folderSelected="forwardFolderSelected" />
    <ul class="product-list">
      <li v-for="product in explorer.products.value" :key="product.Id">
        <span class="product-item" @click="selectProduct(product)">
          <i class="las la-box"></i>
          {{ product.Name }}           
        </span>
      </li>
    </ul>
      <!-- Product Details -->
      <div v-if="selectedProduct" class="product-details">
        <div v-html="selectedProduct.detailsHtml"></div>
      </div>
  </div>
</template>

<script setup>
import Folders from './components/Folders.vue';
import Explorer from './classes/Explorer';
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps(["server"]);
const explorer = new Explorer(props.server);

const emit = defineEmits(['folderSelected']);

// Add this ref to manage the selected product
const selectedProduct = ref(null);

// Add this method to handle product selection
function selectProduct(product) {
  selectedProduct.value = product;
  console.log('Selected product:', product); // Log the selected product to the console

}


function forwardFolderSelected(folderId) {
  emit('folderSelected', folderId);
}
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
  padding-right: 150px;
  
}

.container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background-color: #ccc;
}

.product-list {
  list-style-type: none;
  padding: 0;
  margin-left: auto;
}

.product-item {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  display: flex;
  align-items: center;
  max-width: 200px;
  background-color: blanchedalmond;
}


</style>
