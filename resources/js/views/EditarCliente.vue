<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h3>Editar Cliente</h3>
            </div>
            <div class="col-4">
                <router-link :to="{name:'menuClientes'}">
                    <button class="btn btn-warning" v-if="respuestaS != null" @click="resetResp(null)">
                        Finalizar
                    </button>
                </router-link>
                <router-link :to="{name:'menuClientes'}" v-if="respuestaS === null">
                    <button class="btn btn-danger">
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
            <form @submit.prevent="editarCliente(cliente)">
                <componente-fdatoscliente v-bind:cliente="cliente"/>
                <div class="modal-footer" v-if="respuestaS === null">
                    <button type="submit" class="btn btn-warning btn-block">Actualizar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'EditarCliente',
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
    ...mapActions('clientes', ['resetResp', 'getCliente', 'editarCliente'])
    },
    created() {
        this.getCliente(this.id)
    },
    computed: {
        ...mapState('clientes', ['respuestaS', 'cliente']),    
    }   
}
</script>
