import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入自定义主题
import '@/theme/index.less'
//引入iconfont
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont'
//引入动画插件
import animate from 'animate.css'
import { AneDesignVue } from '@/core/index'

createApp(App)
  .use(store)
  .use(router)
  .use(AneDesignVue)
  .mount('#app')
