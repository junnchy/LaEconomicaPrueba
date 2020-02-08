<template>
    <div class="py-3 border border-secondary rounded">
        <div class="row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded">
            <div class="col-12">
                <h1>Nuevo Presupuesto <i class="fas fa-file-alt"></i></h1>
            </div>
        </div>
        <encabezado v-bind:npresupuesto="npre"/>
        <productos v-bind:npresupuesto="npre"/>

    </div>
</template>

<script>
import encabezado from '../components/Comprobante-Encabezado'
import productos from '../components/Comprobrante-Productos'
export default {
    data() {
        return {
            npre:{
                cliente: {
                    id: null, nombre:'Cliente',
                    direccion: '', localidad: '', 
                    condicion_iva:{ 
                        denominacion: ''
                    }
                },
                fecha: '',
                vendedor_id: null
            }
        }
    },
    methods:{
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
        this.getSetFechaActual()
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
</style>