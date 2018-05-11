import 'babel-polyfill'
import Vue from 'vue'
import appConst from './AppConst'
import App from './Component/AppRoot.vue'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

new Vue({
    el: '#app',
    render: h => h(App)
});
