<!-- CustomElement.vue -->

<script>
import { defineElement } from '@vueform/vueform'

export default defineElement({
    name: 'CustomTestElement',
    setup(props, { element }) {
        const { update } = element
        console.log(Object.keys(element))


        // This will update the element's value,
        // using the GenericElement's `update` method:
        update('value')
    }
})
</script>


<template>
    <ElementLayout>
        <template #element>
            <input :value="value" v-bind="aria" @input="handleInput" />
        </template>
    </ElementLayout>
</template>