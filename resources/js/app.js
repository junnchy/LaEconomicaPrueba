import Vue from 'vue'
import router from './router/index.js'
import store from './store'

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('componente-prueba', require('./components/ComponentePrueba.vue').default);
Vue.component('componente-productos', require('./components/ComponenteProductos.vue').default);
Vue.component('componente-facp', require('./components/FormularioAgregarCategoriaProveedor.vue').default);
Vue.component('componente-fcosto', require('./components/FormularioCostoProducto.vue').default);
Vue.component('componente-frentabilidad', require('./components/FormularioRentabilidadProducto.vue').default);
Vue.component('componente-fdatosprod', require('./components/FormularioDatosProducto.vue').default);

const app = new Vue({
    router,
    store,
    el: '#app'
});

