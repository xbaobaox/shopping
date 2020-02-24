import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router/router";
import store from "./store/";
import ajax from "./config/ajax";
import "./style/common";
import "./config/rem";
// import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
// import { IndexBar, IndexAnchor } from 'vant';
// import { Button } from 'vant';
// Vue.use(IndexBar).use(IndexAnchor);
import Vant from "vant";
import "vant/lib/index.css";
// Vue.use(Button);
Vue.use(Vant);
// Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes
});
new Vue({
  router,
  store
}).$mount("#app");
