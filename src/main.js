import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'

const app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.content_api = 'https://raw.githubusercontent.com/rappertomate/content/master/';