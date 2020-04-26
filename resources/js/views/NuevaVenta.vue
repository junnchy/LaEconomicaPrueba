<template>
    <div class="py-3 border border-secondary rounded">
        <div class="row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded">
            <div class="col-12">
                <h1>Nueva Venta <i class="fas fa-file-alt"></i></h1>
            </div>
        </div>
        <form @submit.prevent="agregarVenta(nvta)">
            <encabezado v-bind:npresupuesto="nvta"/>
            <productos v-bind:npresupuesto="nvta"/>
            <div class="d-flex justify-content-center sticky-button">
                <div class="p-2  w-75" v-if="$store.state.ventas.status != 200">
                    <button type="submit" class="btn btn-success btn-block border border-secondary" >
                        Grabar Venta <i class="fas fa-save"></i>
                    </button>
                </div>
                <!-- <div class="p-2 w-75" v-if="$store.state.ventas.status === 200">
                    <button type="button" 
                    @click="imprimirPrespuesto(presupuesto.id)"
                    class="btn btn-outline-secondary btn-block w-75" >
                        Imprimir Prespuesto <i class="fas fa-print"></i>
                    </button>
                </div> -->
                <div class="p-2" v-if="$store.state.ventas.status === 200">
                    <router-link :to="{name:'nuevaEntrega'}" >
                        <button type="button" 
                        class="btn btn-outline-primary">
                            Finalizar <i class="fas fa-check-circle"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </form>
        {{vendedorC}}
        {{fdp}}
    </div>
</template>
<script>
import { mapActions, mapState} from 'vuex'
import encabezado from '../components/Comprobante-Encabezado'
import productos from '../components/Comprobrante-Productos'
export default {
    components:{
        encabezado,
        productos
    },
    data() {
        return {
            nvta:{
                cliente:{
                    id: null, nombre:'Cliente',
                    direccion: '', localidad: '', 
                    condicion_iva:{ 
                        denominacion: ''
                    }
                },
                vendedor:{

                },
                formaDePago: {
                    id: null
                },
                fecha_emision: '',
                detalles: '',
                total: 0,
                vendedor_id: null,
                lineas:[],
                id: null,
                subtotal: 0, 
                iva: 0
            }
        }
    },
    created(){
        this.$store.commit('productos/resetFilters')
        this.getVendedorActual(this.$userId)
        this.getSetFechaActual()
        this.cambiarEstado(0)
        this.nvta.vendedor_id = this.$userId
    },
    destroyed(){
        this.resetStatus()
        this.resetResp(null)
    },
    methods:{
        ...mapActions(['cambiarEstado']),
        ...mapActions('usuarios', ['getVendedorActual']),
        ...mapActions('ventas', ['agregarVenta', 'resetStatus', 'resetResp']),
        getSetFechaActual(){
            var today = new Date();
            var dd = String(today.getDate());
            var mm = String(today.getMonth()); //January is 0!
            var yyyy = today.getFullYear();
            var aux = new Date(yyyy, mm, dd);
            console.log(aux)
            this.nvta.fecha_emision = aux
        }
    },
    computed:{
        ...mapState('usuarios', ['vendedorActual']),
        vendedorC(){
            this.nvta.vendedor = this.vendedorActual
        },
        fdp(){
            if(this.nvta.cliente.condicion_iva_id === 3){ /* Clientes Finales */
                this.nvta.lineas.forEach(linea => {
                    linea.producto.precio.precioVenta = linea.producto.precio.precioVentaSinIva *  ((linea.producto.precio.iva/100)+1)
                    if(this.nvta.formaDePago.id != 1 || this.nvta.formaDePago.id != null ){
                        linea.producto.precio.precioVenta =  (linea.producto.precio.precioVenta * this.nvta.formaDePago.coeficiente).toFixed(2)
                        
                    }
                });
            }else{ /* Responsables Incriptos */
                this.nvta.lineas.forEach(linea => {
                    linea.producto.precio.precioVentaSinIva = linea.producto.precio.precioVenta / ((linea.producto.precio.iva/100)+1)
                    if(this.nvta.formaDePago.id != 1 || this.nvta.formaDePago.id != null ){
                        linea.producto.precio.precioVentaSinIva =  (linea.producto.precio.precioVentaSinIva * this.nvta.formaDePago.coeficiente).toFixed(2)
                    }
                });
            }
        }
    }
}
</script>

<style>
    .bg-ecogray{
    background-color: #E9ECEF !important;
    }
    .sticky-button {
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    bottom: 10px;
    }
</style>