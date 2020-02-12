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
        created(){
            this.getPresupuesto(this.id)
        },
    methods:{
        ...mapActions('presupuestos', ['getPresupuesto']),
        getSetFechaActual(){
            var today = new Date();
            var dd = String(today.getDate());
            var mm = String(today.getMonth() + 1); //January is 0!
            var yyyy = today.getFullYear();
            var aux = new Date(yyyy, mm, dd);
            console.log(aux)
            this.npre.fecha = aux
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