// vueform.config.(js|ts)

import en from '@vueform/vueform/locales/en'
import vueform from '@vueform/vueform/dist/vueform'
import { defineConfig } from '@vueform/vueform'
import CustomeElement from './src/components/CustomeElement.vue';
import CustomTestElement from './src/components/CustomTestElement.vue'

// You might place these anywhere else in your project
import '@vueform/vueform/dist/vueform.css';

export default defineConfig({
  theme: vueform,
  locales: { en },
  locale: 'en',
  elements: [CustomeElement, CustomTestElement]
})