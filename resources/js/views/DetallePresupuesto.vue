<template>
    <div class="py-3 border border-secondary rounded">
        <div class="row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded">
            <div class="col-11">
                <h1>Presupuesto <i class="fas fa-file-alt"></i></h1>
            </div>
            <div class="col-1">
                <button class="btn btn-outline-danger btn-sm" @click="$router.go(-1)">
                    Volver <i class="fas fa-arrow-alt-circle-left"></i>
                </button>
            </div>
        </div>
        <encabezado v-bind:npresupuesto="presupuesto"/>
        <productos v-bind:npresupuesto="presupuesto"/>
        <hr>
        <div class="d-flex flex-row-reverse p-2 my-2">
            <div class="mx-1">
                <router-link :to="{name:'editarPresupuesto', params:{id: presupuesto.id}}">
                    <button class="btn btn-outline-info btn-sm">
                        Editar <i class="fas fa-pen"></i>
                    </button>
                </router-link> 
            </div>
            <div class="mx-1">
                <button class="btn btn-outline-danger btn-sm" @click="rechazar()">
                    Rechazar <i class="fas fa-ban"></i>
                </button> 
            </div>
            <div class="mx-1">
                <button class="btn btn-outline-success btn-sm" @click="confirmar()">
                    Confirmar <i class="fas fa-check-circle"></i>
                </button> 
            </div>
            <div class="mx-1">
                <button class="btn btn-warning btn-sm mr-1" @click="seguir()">
                    Seguimiento <i class="fas fa-running"></i>
                </button> 
            </div>
            <div class="mx-1">
                <button class="btn btn-outline-primary btn-sm" @click="imprimirPrespuesto(presupuesto.id)">
                    Imprimir <i class="fas fa-print"></i>
                </button> 
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import encabezado from '../components/Comprobante-Encabezado'
import productos from '../components/Comprobante-DetalleLineasProducto'
export default {
    data() {
            return {
                id: this.$route.params.id,
            }
        },
        created(){
            this.getPresupuesto(this.id)
        },
    methods:{
        ...mapActions('presupuestos', ['getPresupuesto', 'imprimirPrespuesto', 'cambiarEstadoPresupuesto']),
        confirmar(){
            this.presupuesto.estadoPresupuesto_id = 3
            this.cambiarEstadoPresupuesto(this.presupuesto)
        },
        rechazar(){
            this.presupuesto.estadoPresupuesto_id = 4
            this.cambiarEstadoPresupuesto(this.presupuesto)
        },
        seguir(){
            this.presupuesto.estadoPresupuesto_id = 2
            this.cambiarEstadoPresupuesto(this.presupuesto)
        }
    },
    computed:{
        ...mapState('presupuestos', ['presupuesto'])
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