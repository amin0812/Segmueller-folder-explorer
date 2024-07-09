<!-- CustomElement.vue -->

<script>
import { ref } from 'vue'
import { defineElement } from '@vueform/vueform'
import Explorer from './explorer/Explorer.vue';



export default defineElement({
    name: 'CustomElement',
    components : {Explorer : Explorer},
    setup(props, { element }) {
        const defaultClasses = ref({
            container: '', // added automatically to the element's outermost DOM in ElementLayout
            input: 'form-text-input',
            input_danger: 'has-errors',
            $input: (classes, { isDanger }) => ([
                classes.input,
                isDanger ? classes.input_danger : null,
            ])
        })

        return {
            defaultClasses,
        }
    }
})
</script>


<template>
    <ElementLayout>
        <template #element>
            <Explorer server="test"/>
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