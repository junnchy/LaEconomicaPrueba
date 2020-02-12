<template>
    <div class="py-3 border border-secondary rounded">
        <div class="row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded">
            <div class="col-12">
                <h1>Nuevo Presupuesto <i class="fas fa-file-alt"></i></h1>
            </div>
        </div>
        <form @submit.prevent="agregarPresupuesto(npre)">
            <encabezado v-bind:npresupuesto="npre"/>
            <productos v-bind:npresupuesto="npre"/>
            <div class="d-flex justify-content-center sticky-button">
                <button type="submit" class="btn btn-warning btn-block w-75">
                    Grabar Prespuesto <i class="fas fa-save"></i>
                </button>
            </div>
        </form>
        {{vendedorC}}
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import encabezado from '../components/Comprobante-Encabezado'
import productos from '../components/Comprobrante-Productos'
export default {
    data() {
        return {
            npre:{
                cliente:{
                    id: null, nombre:'Cliente',
                    direccion: '', localidad: '', 
                    condicion_iva:{ 
                        denominacion: ''
                    }
                },
                vendedor:{

                },
                fecha: '',
                detalles: '',
                total: 0,
                vendedor_id: null,
                lineas:[],
                id: null
            }
        }
    },
    methods:{
        ...mapActions(['cambiarEstado']),
        ...mapActions('presupuestos',['agregarPresupuesto']),
        ...mapActions('usuarios', ['getVendedorActual']),
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
    created(){
        this.getVendedorActual(this.$userId)
        this.getSetFechaActual()
        this.cambiarEstado(5)
        this.npre.vendedor_id = this.$userId
    },
    computed:{
        ...mapState('usuarios', ['vendedorActual']),
        vendedorC(){
            this.npre.vendedor = this.vendedorActual
        },
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