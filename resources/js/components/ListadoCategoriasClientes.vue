<template>
    <div>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Denominacion</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(categoria, index) in categoriasCli" :key="index">
                    <th scope="row">{{categoria.id}}</th>
                    <td>{{categoria.denominacion}}</td>
                    <td>
                        <button class="btn btn-warning btn-sm">
                            Editar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'ListadoCategorias',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('clientes', ['getCategoriasCli'])
    },
    created() {
        this.getCategoriasCli()
    },
    computed: {
        ...mapState('clientes', ['categoriasCli']),
    },
}
</script>