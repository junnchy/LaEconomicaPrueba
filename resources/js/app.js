import Vue from 'vue'
import router from './router/index.js'
import store from './store'



require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('componente-prueba', require('./components/ComponentePrueba.vue').default);


const app = new Vue({
    router,
    store,
    el: '#app'
});

