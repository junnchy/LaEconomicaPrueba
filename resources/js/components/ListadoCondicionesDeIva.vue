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
                <tr v-for="(condicion, index) in condicionIva" :key="index">
                    <th scope="row">{{condicion.id}}</th>
                    <td>{{condicion.denominacion}}</td>
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
    name: 'ListadoCondicionIva',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('condicionIva', ['getCondicionesIva'])
    },
    created() {
        this.getCondicionesIva()
    },
    computed: {
        ...mapState('condicionIva', ['condicionIva']),
    },
}
</script>