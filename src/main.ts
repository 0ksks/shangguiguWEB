import App from '@/App.vue'
import ElementPlus from 'element-plus'
import GlobalComponent from '@/components'
import router from './router'

import 'element-plus/dist/index.css'
import 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'

import { createApp } from 'vue'
import { zhCn } from 'element-plus/es/locales.mjs'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(GlobalComponent)
app.use(router)
app.mount('#app')
