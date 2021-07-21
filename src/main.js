import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'   // index.js 생략가능 index 를 사용하면 알아서 찾아줌 

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')



