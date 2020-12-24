import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';



Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,  // 각 페이지의 컴포넌트 연결
  store, // 여러 컴포넌트 간에 공유되는 데이터의 속성
}).$mount('#app')
