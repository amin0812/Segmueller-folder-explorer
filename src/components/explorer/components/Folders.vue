<template>
    <ul class="folder-list">
        <li v-for="folder in folders" :key="folder.Id">
            <span @click="loadProducts(folder.Id)" class="folder-item">
                <i v-if="folder.Id == openFolderId" class="las la-folder-open"></i>
                <i v-if="folder.Id != openFolderId" class="las la-folder"></i>                
                {{ folder.Name }}
            </span>
            <ul>
                <li v-for="product in explorer.products.value.filter(p => p.CategoryId == folder.Id)" :key="product.Id">
                    <span class="product-item">
                        <i class="las la-box"></i>
                        {{ product.Name }}           
                    </span>
                    
                </li>
            </ul>
            <Folders v-if="folder && folder.ChildCategories && folder.ChildCategories.length &&  folder.Id == openFolderId"
                :folders="folder.ChildCategories" :explorer="explorer"
                @folderSelected="$emit('folderSelected', $event)" />
        </li>
    </ul>
</template>
<script>
import { ref } from 'vue';
export default {
    name: "Folders",
    props: ["folders", "explorer"],
    methods: {
        loadProducts(folderId) {
            this.openFolderId = this.openFolderId != folderId ? folderId : -1;
            this.explorer.products.value = this.explorer.getCategoryProducts(folderId) || [];
            this.$emit('folderSelected', folderId);
        }
    },
    emits: ['folderSelected'],
    setup() {
        const openFolderId = ref(-1);
        return {
            openFolderId
        }
    }
}
</script>

<style scoped>
.folder-list {
    list-style-type: none;
    text-align: center;
}

.folder-item {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px 0;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    display: flex;
    align-items: center;
    max-width: 200px;
}

.folder-item i {
    margin-right: 8px;
    /* Add some space between the icon and the text */
}

.folder-item:hover {
    background-color: #f0f0f0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.folder-item.selected {
    background-color: #e0e0e0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.folder-list>li>ul {
    padding-left: 20px;
    list-style-type: none;
    /* Ensure nested lists also don't have bullet points */
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
    margin-left: 50px;
}
</style>
