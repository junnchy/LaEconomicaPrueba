<template>
    <div class="py-3 border border-secondary rounded">
        <div class="row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded">
            <div class="col-12">
                <h1>Editar Presupuesto <i class="fas fa-file-alt"></i></h1>
            </div>
        </div>
        <form @submit.prevent="agregarPresupuesto(presupuesto)">
            <encabezado v-bind:npresupuesto="presupuesto"/>
            <productos v-bind:npresupuesto="presupuesto"/>
            <div class="d-flex justify-content-center sticky-button">
                <div class="p-2  w-75" v-if="$store.state.presupuestos.status != 200">
                    <button type="submit" class="btn btn-warning btn-block" >
                        Grabar Prespuesto <i class="fas fa-save"></i>
                    </button>
                </div>
                <div class="p-2 w-75" v-if="$store.state.presupuestos.status === 200">
                    <button type="button" 
                    @click="imprimirPrespuesto(presupuesto.id)"
                    class="btn btn-outline-secondary btn-block w-75" >
                        Imprimir Prespuesto <i class="fas fa-print"></i>
                    </button>
                </div>
                <div class="p-2" v-if="$store.state.presupuestos.status === 200">
                    <router-link :to="{name:'listadoPresupuestos'}" >
                        <button type="button" 
                        class="btn btn-outline-primary">
                            Finalizar <i class="fas fa-check-circle"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </form>
        {{vendedorC}}{{preC}}
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import encabezado from '../components/Comprobante-Encabezado'
import productos from '../components/Comprobrante-Productos'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods:{
        ...mapActions(['cambiarEstado']),
        ...mapActions('presupuestos',['agregarPresupuesto','resetStatus', 'resetResp', 'imprimirPrespuesto', 'getPresupuesto']),
        ...mapActions('usuarios', ['getVendedorActual']),
        getSetFechaActual(){
            var today = new Date();
            var dd = String(today.getDate());
            var mm = String(today.getMonth()); //January is 0!
            var yyyy = today.getFullYear();
            var aux = new Date(yyyy, mm, dd);
            console.log(aux)
            this.presupuesto.fecha_emision = aux
        }
    },
    created(){
        this.getPresupuesto(this.id)
        this.getVendedorActual(this.$userId)
        this.cambiarEstado(5)
        this.presupuesto.vendedor_id = this.$userId
    },
    destroyed(){
        this.resetStatus()
        this.resetResp(null)
    },
    computed:{
        ...mapState('usuarios', ['vendedorActual']),
        ...mapState('presupuestos', ['presupuesto']),
        vendedorC(){
            this.presupuesto.vendedor = this.vendedorActual
        },
        preC(){
            if(this.presupuesto.id != null){
                this.getSetFechaActual()
                this.presupuesto.id = null
            }
        }
    },
    components:{
        encabezado,
        productos
    }
}
</script>

<style >
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