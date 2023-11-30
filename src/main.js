import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//导入全部的element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(router)
app.mount('#app')
