import Vue from 'vue';
import App from './App';
import confs from './index.js';
import {init} from "./utils.js";
import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)

import VueI18n from 'vue-i18n'        //引入vue-i18n
Vue.use(VueI18n);    //通过插件的形式挂载

/*---------基本使用-----------*/
import language from './i18n/index';

const i18n = new VueI18n(language);


const {getInitRouter, getInitVuex} = init;
const router = getInitRouter.apply(null, confs.router);
const store = getInitVuex.apply(null, confs.store);
Vue.config.productionTip = false;
confs.callback && confs.callback.forEach(fn => {
  fn && fn({router, store})
});
export default new Vue({
  el: '#app',
  store: store,
  router,
  i18n,
  components: {App},
  render: h => h(App)
});
