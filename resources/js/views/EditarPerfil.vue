<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h3>Editar Contraseña</h3>
            </div>
            <div class="col-4">
                <button href="/" class="btn btn-warning" v-if="status === 200" @click="finalizar()">
                        Finalizar
                </button>
                <button href="/" class="btn btn-danger" v-if="status != 200" @click="resetError()">
                        Cancelar
                </button>
            </div>
        </div>
        <div class="alert alert-success alert-dismissible fade show mt-4" v-if="status === 200">
            {{message}} 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="container mt-5">
            <form @submit.prevent="editarUsuario(usuario)">
                <FormularioPasswordUsuario v-bind:usuario="usuario"/>
                <button type="submit" class="btn btn-warning btn-block sticky-button" v-if="message === null">
                    Guardar Cambios <i class="fas fa-save"></i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import FormularioPasswordUsuario from '../components/FormularioPasswordUsuario.vue'
export default {
    name: 'EditarPerfil',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components: {
        FormularioPasswordUsuario
    },
    methods: {
        ...mapActions('usuarios',['resetResp','getUsuario','editarUsuario','resetError']),
        finalizar(){
            this.resetError()
            this.resetResp(null)
        }
    },
    created() {
        this.getUsuario(this.id)
    },
    computed: {
        ...mapState('usuarios',['message','status','usuario']),   
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