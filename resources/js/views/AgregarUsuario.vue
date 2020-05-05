<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h3>Ingreso de Nuevo Usuario</h3>
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
        <div class="alert alert-danger alert-dismissible fade show mt-4" v-if="errors.length > 0">
            {{errors}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="container mt-5">
            <form @submit.prevent="agregarUsuario(usuario)">
                <FormularioDatosUsuario v-bind:usuario="usuario"/>
                <button type="submit" class="btn btn-success btn-block sticky-button" v-if="respuestaS === null">
                    Agregar Usuario <i class="fas fa-check-circle"></i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import FormularioDatosUsuario from '../components/FormularioDatosUsuario'
export default {
    name: 'AgregarUsuario',
    data() {
        return {
            usuario:{
                id: null,
                nombre: '', email: '', dni: '', cuil:'', telefono:'', celular:'',
                fecha_nacimiento: '', password: '', direccion: '', localidad_id: 0, 
                localidad:{nombre: '', cod_postal: ''}, password: ''
            }
        }
    },
    methods: {
        ...mapActions('usuarios,'['resetResp','agregarUsuario','resetError']),
        ...mapActions(['cambiarEstado']),
        cancelar(){
            this.resetError()
            this.resetResp(null)
        }
    },
    created(){
        this.cambiarEstado(3)
    },
    computed: {
        ...mapState('usuarios', ['respuestaS', 'errors']),            
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
