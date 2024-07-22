<script>
import { ref } from 'vue';
import { defineElement } from '@vueform/vueform';
import Explorer from '../components/explorer/Explorer.vue';

export default defineElement({
    name: 'CustomElement',
    components: { Explorer },
    setup(props, { element }) {
        const defaultClasses = ref({
            container: '', // added automatically to the element's outermost DOM in ElementLayout
            input: 'form-text-input',
            input_danger: 'has-errors',
            $input: (classes, { isDanger }) => ([
                classes.input,
                isDanger ? classes.input_danger : null,
            ])
        });

        const selectedFolderId = ref('');

        function handleFolderSelected(folderId) {
            selectedFolderId.value = folderId;
        }

        return {
            defaultClasses,
            selectedFolderId,
            handleFolderSelected,
        };
    }
});
</script>

<template>
    <ElementLayout>
        <template #element>
            <input v-model="selectedFolderId" :class="defaultClasses.input" />
            <Explorer server="test" @folderSelected="handleFolderSelected" />
        </template>
    </ElementLayout>
</template>

<style lang="scss">
.form-text-input {
    border: 1px solid black;
    outline: none;
    width: 100%;

    &.has-errors {
        border: 1px solid red;
    }
}
</style>
