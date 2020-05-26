// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'babel-polyfill';
import store from './store';
import './api/fetch';
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import '../static/css/element_ui.scss';
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import libs from '@/libs'; // 引入全局插件
import directives from './directives';
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import fetch from '../../chatServer/http'

Vue.prototype.$http=fetch;
import VueBetterCalendar from 'vue-better-calendar'
Vue.use(VueBetterCalendar)
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
// import 'swiper/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]));
Vue.use(VueLazyload, {
    preLoad: 1,
    error: require('./assets/img/zwsj5.png'),
    loading: require('./assets/img/zwsj5.png')

});
Vue.use(libs);
Vue.use(VueSocketio, socketio(process.env.SOCKETIO));
Vue.use(ElementUI);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
