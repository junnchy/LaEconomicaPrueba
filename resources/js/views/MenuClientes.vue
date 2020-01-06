<template>
    <div>
        <div class="row">
            <div class="col-12">
                    <h1 class="text-center">Sección Clientes</h1>
            </div>
        </div>
         <div class="row mt-5">
            <div class="col-9">
                    <input class="form-control my-3" type="search" placeholder="Buscar" aria-label="Search">
            </div>
            <div class="col-3">
                <router-link :to="{name:'agregarCliente'}">
                    <button class="btn btn-success btn-block my-3"> Agregar Cliente</button>
                </router-link>
            </div>
        </div>
        <componente-listadoClientes/>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'MenuClientes',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('clientes',['getClientes'])
    },
    created() {
        this.getClientes()
    },
    computed: {
        ...mapState('clientes', ['clientes']),
    },
}
</script>