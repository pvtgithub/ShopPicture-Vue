import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/LanguageStore'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueCryptojs from 'vue-cryptojs'

const app = createApp(App);

app.use(VueCryptojs).use(store).use(router).use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app');