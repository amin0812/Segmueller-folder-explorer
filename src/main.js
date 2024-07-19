import { createApp } from 'vue'
import './style.css'
import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css';
import App from './App.vue'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

const app = createApp(App)
app.use(Vueform, vueformConfig)
app.mount('#app')