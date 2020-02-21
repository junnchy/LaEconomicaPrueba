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
                <button type="submit" class="btn btn-warning btn-block w-75" v-if="$store.state.presupuestos.status != 200">
                    Grabar Prespuesto <i class="fas fa-save"></i>
                </button>
                <button type="button" 
                @click="imprimirPrespuesto(presupuesto.id)"
                class="btn btn-outline-info btn-block w-75" 
                v-if="$store.state.presupuestos.status === 200">
                    Imprimir Prespuesto <i class="fas fa-print"></i>
                </button>
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