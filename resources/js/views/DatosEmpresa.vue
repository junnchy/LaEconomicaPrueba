<template>
    <div>
        <div class="row shadow-sm p-3 text-center text-white bg-secondary rounded">
            <div class="col-12">
                <h2>Datos de La Empresa <i class="fas fa-building"></i></h2> 
            </div>
        </div>
        <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuesta != null">
            {{respuesta}} 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="container mt-5">
            <form @submit.prevent="editarDatos(datos)">
                <formilarioEmpresa v-bind:datos="datos"/>
                <button type="submit" class="btn btn-warning btn-block mt-4">
                    Guardar Cambios <i class="fas fa-save"></i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import formilarioEmpresa from '../components/FormularioDatosEmpresa'
export default {
    data() {
        return {
        }
    },
    components:{
        formilarioEmpresa
    },
    created(){
        this.getDatos()
    },
    destroyed(){
        this.resetResp()
    },
    methods:{
        ...mapActions('datos', ['getDatos', 'editarDatos','resetResp']),
    },
    computed:{
        ...mapState('datos', ['datos', 'respuesta']),
    }
    
}
</script>