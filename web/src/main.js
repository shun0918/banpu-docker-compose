import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config/config'
import Utility from '../public/js/Utility'


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// app.use(config)

app.config.globalProperties.$config = config
app.config.globalProperties.$util = new Utility();