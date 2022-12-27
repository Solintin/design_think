import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import VueAos from "vue-aos";
import VueAnalytics from "vue-analytics";

Vue.use(VueAos);
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
  position: "top-center",
};

Vue.use(VueAnalytics, {
  id: "UA-347538808",
  router,
});

Vue.use(Toast, options);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
