import Vue from 'vue'
import VueRouter from 'vue-router'
import 'sanitize.css/sanitize.css'
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App2'
import VueCordova from 'vue-cordova'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(MintUI)

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App, routes },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
