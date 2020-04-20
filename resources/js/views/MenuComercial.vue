<template>
    <div>
        <h1>
            <i class="fas fa-handshake text-secondary"></i> Seccion Comercial
        </h1>
            <div class="container shadow-sm mt-3 p-3 bg-white rounded border border-secondary">
                <div class="row">
                    <div class="col-12">
                        <router-link :to="{name:'nuevaVenta'}">
                            <button class="btn btn-outline-success">
                               <span class="text-dark"> Nueva Venta </span><i class="fas fa-plus-circle"></i>
                            </button> 
                        </router-link> 
                        <i class="fas fa-grip-lines-vertical"></i>
                        <router-link :to="{name:'nuevoPrespuesto'}">
                            <button class="btn btn-outline-success">
                               <span class="text-dark"> Nuevo Presupuesto </span><i class="fas fa-plus-circle"></i>
                            </button> 
                        </router-link> 
                        <router-link :to="{name:'listadoPresupuestos'}">
                            <button class="btn btn-outline-primary">
                               <span class="text-dark"> Listado Presupuestos </span><i class="fas fa-list-alt"></i>
                            </button> 
                        </router-link>
                        <i class="fas fa-grip-lines-vertical"></i>
                        <router-link :to="{name:'formasDePago'}">
                            <button class="btn btn-outline-info">
                                <span class="text-dark">Formas de Pago </span><i class="fas fa-credit-card"></i>
                            </button> 
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="container shadow-sm mt-3 p-3 text-white bg-wp rounded">
                <div class="row">
                    <div class="col-10">
                        <h2>
                            <i class="fas fa-chart-bar text-dark"></i> Estadisticas
                        </h2>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-outline-light btn-sm mt-1" @click="ve = !ve">
                            Ver <i class="fas fa-angle-down"></i>
                        </button>
                    </div>
                </div>
                <hr class="border border-white" v-if="ve === true">
                <div class="container" v-if="ve === true">
                    <div class="row mt-2">
                        <div class="col-12 text-center">
                            <h4 class="my-2">
                                <i class="fas fa-chart-line text-dark"></i> Ventas
                            </h4>
                            <estadisticaventas/>
                        </div>
                    </div>  
                    <div class="row mt-2">
                        <div class="col-6">
                            <h4 class="my-2">
                                <i class="fas fa-chart-pie text-dark"></i> Presupuestos
                            </h4>
                            <estadisticaproducto/>
                            <p>*Un mes para atras</p>
                        </div>
                        <div class="col-6">
                            <h4 class="my-2">
                                <i class="fas fa-chart-line text-dark"></i> Tipo de Producto
                            </h4>
                            <estadisticalinea/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import estadisticaventas from '../components/EstadisticaVentas'
import estadisticaproducto from '../components/EstadisticaTipoDeProductos'
import estadisticalinea from '../components/Estadistica-Linea'
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            ve: false
        }
    },
    components:{
        estadisticaventas,
        estadisticaproducto,
        estadisticalinea
    }, 
    created(){
        console.log(this.$userId)
        this.getUsuarioActual(this.$userId)
        this.recuentoPresupuestos(this.$userId)
        this.cambiarEstado(6)
    },
    methods:{
        ...mapActions(['cambiarEstado']),
        ...mapActions('usuarios', ['getUsuarioActual', 'recuentoPresupuestos']),
        ...mapActions('presupuestos',['imprimirPrespuesto'])
    },
    computed: {
        ...mapState('usuarios', ['usuarioActual', 'contadoresPresupuestos'])
    },
}
</script>

<style >
    .bg-ecogray{
        background-color: #E9ECEF !important;
    }
    .bg-wp{
        background-color: #5D6D7E !important;
    }
</style>
