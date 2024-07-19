<template>
    <ul>
        <li v-for="folder in folders" :key="folder.Id">
            {{ folder.Name }}
                <Folders v-if="folder.ChildCategories.length" :folders="folder.ChildCategories"/>
        </li>
    </ul>
</template>

<script>

export default {
    name: "Folders",
    props: ["folders"]
}

</script>