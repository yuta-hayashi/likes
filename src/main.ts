import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "@/firebase";
import VuePwaInstallPlugin from "vue-pwa-install";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";

Vue.use(VuePwaInstallPlugin);
Vue.use(VueFilterDateFormat);

Vue.config.productionTip = false;
Vue.prototype.$analytics = firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
