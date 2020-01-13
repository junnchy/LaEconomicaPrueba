<template>
    <div>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Localidad</th>
                    <th scope="col">Codigo Postal</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(localidad, index) in localidades" :key="index">
                    <th scope="row">{{localidad.id}}</th>
                    <td>{{localidad.localidad}}, {{localidad.provincia.iso_nombre}} </td>
                    <td>{{localidad.cod_postal}}</td>
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
    name: 'ListadoLocalidades',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('localidades', ['getLocalidades'])
    },
    created() {
        this.getLocalidades()
    },
    computed: {
        ...mapState('localidades', ['localidades']),
    },
}
</script>