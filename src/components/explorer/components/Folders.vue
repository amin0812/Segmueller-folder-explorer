<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <ul class="folder-list">
        <li v-for="folder in folders" :key="folder.id">
            <span @click="handoverId(folder)" class="folder-item">
                <i class="fa-regular fa-folder-open"></i>
                {{ folder.id }}
            </span>
            <Folders v-if="folder.childCategories.length" 
                     :folders="folder.childCategories" 
                     :explorer="explorer"
                     @folderSelected="$emit('folderSelected', $event)" />
        </li>
    </ul>
</template>

<script>
export default {
    name: "Folders",
    props: ["folders", "explorer"],
    methods: {
        handoverId(folder) {
            console.log("folderid :" + folder.id);
            this.$emit('folderSelected', folder.id);
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
    max-width: 70px;
}

.folder-item i {
    margin-right: 8px; /* Add some space between the icon and the text */
}

.folder-item:hover {
    background-color: #f0f0f0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.folder-item.selected {
    background-color: #e0e0e0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.folder-list > li > ul {
    padding-left: 20px;
    list-style-type: none; /* Ensure nested lists also don't have bullet points */
}
</style>
