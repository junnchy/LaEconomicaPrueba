

require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('componente-prueba', require('./components/ComponentePrueba.vue').default);


const app = new Vue({
    el: '#app',
});
