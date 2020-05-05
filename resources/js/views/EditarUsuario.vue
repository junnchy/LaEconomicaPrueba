<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h3>Editar Usuario</h3>
            </div>
            <div class="col-4">
                <router-link :to="{name:'menuUsuarios'}">
                    <button class="btn btn-warning" v-if="respuestaS != null" @click="cancelar()">
                        Finalizar
                    </button>
                </router-link>
                <router-link :to="{name:'menuUsuarios'}" v-if="respuestaS === null">
                    <button class="btn btn-danger" @click="resetError()">
                        Cancelar
                    </button>
                </router-link>
            </div>
        </div>
        <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuestaS != null">
            {{respuestaS}} 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="container mt-5">
            <form @submit.prevent="editarUsuario(usuario)">
                <FormularioDatosUsuario v-bind:usuario="usuario"/>
                <button type="submit" class="btn btn-warning btn-block sticky-button" v-if="respuestaS === null">
                    Guardar Cambios <i class="fas fa-save"></i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import FormularioDatosUsuario from '../components/FormularioDatosUsuario'
export default {
    name: 'EditarUsuario',
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions('usuarios',['resetResp','getUsuario','editarUsuario','resetError']),
        cancelar(){
            this.resetError()
            this.resetResp(null)
        }
    },
    created() {
        this.getUsuario(this.id)
    },
    computed: {
        ...mapState('usuarios',['respuestaS','usuario']),   
    }   
}
</script>

<style>
    .sticky-button {
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    bottom: 10px;
    }
</style>