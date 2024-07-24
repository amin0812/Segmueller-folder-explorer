<template>
    <div class="wrapper">
        <ul class="folder-list">
            <li v-for="folder in folders" :key="folder.Id">
                <span @click="loadProducts(folder.Id)" class="folder-item">
                    <i v-if="folder.Id == openFolderId" class="las la-folder-open"></i>
                    <i v-if="folder.Id != openFolderId" class="las la-folder"></i>
                    {{ folder.Name }}
                </span>
                <ul v-show="folder.Id == openFolderId">
                    <Folders
                        v-if="folder && folder.ChildCategories && folder.ChildCategories.length && folder.Id == openFolderId"
                        :folders="folder.ChildCategories" :explorer="explorer"
                        @folderSelected="$emit('folderSelected', $event)" />
                </ul>
            </li>
        </ul>
    </div>
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

.wrapper{

    width: 500px;
}
.folder-list {
    list-style-type: none;
    padding-left: 20px;
    position: relative;
}

.folder-list:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    max-height: 300px;
    width: 1px;
    background: #ccc;
}

.folder-list>li {
    position: relative;
}

.folder-list>li:before {
    content: '';
    position: absolute;
    top: 10px;
    left: -20px;
    height: 1px;
    width: 20px;
    background: #ccc;
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
    position: relative;
    background-color: #f9f9f9;
    /* Normal background color */
    color: #333;
    /* Normal text color */
}

.folder-item i {
    margin-right: 8px;
}

/* Hover effect */
.folder-item:hover {
    background-color: #e0e0e0;
    /* Hover background color */
    color: #000;
    /* Hover text color */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Selected effect */
.folder-item.selected {
    background-color: #d0d0d0;
    /* Selected background color */
    color: #000;
    /* Selected text color */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.folder-list>li>ul {
    padding-left: 20px;
    list-style-type: none;
    position: relative;
}

.folder-list>li>ul:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -20px;
    width: 1px;
    background: #ccc;
}
</style>
