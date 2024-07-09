<template>
    <ul>
        <li v-for="folder in folders" :key="folder.id">
            {{ folder.id }}
                <Folders v-if="folder.childCategories.length" :folders="folder.childCategories"/>
        </li>
    </ul>
</template>

<script>

export default {
    name: "Folders",
    props: ["folders"]
}

</script>