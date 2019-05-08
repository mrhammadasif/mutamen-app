import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"
import "@fortawesome/fontawesome-free/css/all.css"

import Vue from "vue"
import axios from "axios"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import IonicVue from "@ionic/vue"

Vue.use(IonicVue)
axios.defaults.baseURL = "https://api-mutamen.herokuapp.com/"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
