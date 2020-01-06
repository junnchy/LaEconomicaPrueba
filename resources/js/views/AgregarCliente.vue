<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h3>Ingreso de Nuevo Cliente</h3>
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
            <componente-fdatoscliente/>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'AgregarCliente',

    methods: {
    ...mapActions('clientes', ['resetResp'])
    },
    created() {
        
    },
    computed: {
        ...mapState('clientes', ['respuestaS']),    
    }
    
}
</script>