import Vue from 'vue'
import router from './router/index.js'
import store from './store'
import CKEditor from '@ckeditor/ckeditor5-vue'
import * as VueGoogleMaps from 'vue2-google-maps' 
import VueGoogleCharts from 'vue-google-charts'
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';



Vue.use(VueToast);
Vue.use( CKEditor );
Vue.use(VueGoogleCharts);

Vue.use(require('vue-shortkey'))

// MAPS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCbASazHk3QISMptpk_C-AN99YU1gO5JFM',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})
// MAPS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

Vue.prototype.$userName = document.querySelector("meta[name='user-name']").getAttribute('content');
Vue.prototype.$userId = document.querySelector("meta[name='user-id']").getAttribute('content');

require('./bootstrap');


window.Vue = require('vue');

Vue.component('v-select', vSelect)
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('componente-prueba', require('./components/ComponentePrueba.vue').default);
Vue.component('componente-productos', require('./components/ComponenteProductos.vue').default);
Vue.component('componente-clinetes', require('./components/ComponenteClientes.vue').default);
Vue.component('componente-comercial', require('./components/ComponenteComercial.vue').default);
Vue.component('componente-facp', require('./components/FormularioAgregarCategoriaProveedor.vue').default);
Vue.component('componente-fcosto', require('./components/FormularioCostoProducto.vue').default);
Vue.component('componente-frentabilidad', require('./components/FormularioRentabilidadProducto.vue').default);
Vue.component('componente-fdatosprod', require('./components/FormularioDatosProducto.vue').default);
Vue.component('componente-listadoClientes', require('./components/ListadoClientes.vue').default);
Vue.component('componente-fdatoscliente', require('./components/FormularioDatosCliente.vue').default);
Vue.component('componente-fagregarcategoria', require('./components/FormularioAgregarCategoria.vue').default);
Vue.component('componente-lidadolocalidades', require('./components/ListadoLocalidades.vue').default);
Vue.component('componente-lidadocategoriascli', require('./components/ListadoCategoriasClientes.vue').default);
Vue.component('componente-lidadocondicionesiva', require('./components/ListadoCondicionesDeIva.vue').default);
Vue.component('componente-fagregarlocalidad', require('./components/FormularioAgregarLocalidad.vue').default);
Vue.component('componente-fagregarcatecli', require('./components/FormularioAgregarCategoriaCliente.vue').default);
Vue.component('componente-fdatosprov', require('./components/FormularioDatosProveedor.vue').default);
Vue.component('componente-gmap', require('./components/PruebaGMap.vue').default);
Vue.component('componente-leftbar', require('./components/LeftNavbar.vue').default);
Vue.component('componente-filtroproductos', require('./components/ComponenteFiltrosDeProductos.vue').default);
Vue.component('componente-LNBAddCliente', require('./components/LNBAddCliente.vue').default);
Vue.component('componente-menuboton', require('../js/components/BotonMenu.vue').default);
Vue.component('componente-notificacionesnavbar', require('../js/components/NavBarNotificaciones.vue').default);
Vue.component('componente-cajas', require('../js/components/ComponenteCajas.vue').default);


const app = new Vue({
    router,
    store,
    el: '#app'
});

