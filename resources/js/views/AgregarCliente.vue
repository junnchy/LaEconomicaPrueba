<template>
    <div>
        <div class="row">

            <div class="col-8">
                <h3> <i class="fas fa-address-card"></i> Ingreso de Nuevo Cliente</h3>
            </div>
            <div class="col-4">
                <router-link :to="{name:'menuClientes'}">
                    <button class="btn btn-warning" v-if="respuestaS != null" @click="cancelar()">
                        Finalizar
                    </button>
                </router-link>
                <router-link :to="{name:'menuClientes'}" v-if="respuestaS === null">
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
            <form @submit.prevent="agregarCliente(ncliente)" v-if="respuestaS === null">
                <componente-fdatoscliente v-bind:cliente="ncliente"/>
                <button type="submit" class="btn btn-success btn-block sticky-button" v-if="respuestaS === null">
                    Agregar Cliente <i class="fas fa-check-circle"></i>
                </button>
            </form>

            <form @submit.prevent="editarCliente(cliente)" v-if="respuestaS != null">
                <componente-fdatoscliente v-bind:cliente="cliente"/>
                <button type="submit" class="btn btn-warning btn-block sticky-button">
                    Guardar Cambios <i class="fas fa-save"></i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
    name: 'AgregarCliente',
    data() {
        return {
            ncliente:{
                id: null,
                nombre:'', cuit:'', telefono:'', celular:'', email:'', direccion:'', 
                localidad_id: 0, cat_clientes_id: 0, condicion_iva_id: 0,
                localidad:{nombre: '', cod_postal: ''},
                categoria:{denominacion: ''},
                condicion_iva:{denominacion: ''}
            }
        }
    },
    methods: {
        ...mapActions('clientes', ['resetResp', 'agregarCliente', 'resetError', 'editarCliente']),
        ...mapActions(['cambiarEstado']),
        cancelar(){
            this.resetError()
            this.resetResp(null)
        }
    },
    created(){
        this.cambiarEstado(3)       
    },
    destroyed(){
        this.resetError()
        this.resetResp(null)
    },
    computed: {
        ...mapState('clientes', ['respuestaS', 'errors', 'cliente']),            
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


