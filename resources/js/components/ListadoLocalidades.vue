<template>
    <div>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Localidad</th>
                    <th scope="col">Codigo Postal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(localidad, index) in arregloPaginado" :key="index">
                    <th scope="row">{{localidad.id}}</th>
                    <td>{{localidad.nombre}}, {{localidad.provincia.iso_nombre}} </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center" v-if="localidades.length < 4000"> 
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <paginacion v-bind:filtered="localidades" v-bind:nro_filas="15"/>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import paginacion from './Paginacion'
export default {
    name: 'ListadoLocalidades',
    data() {
        return {
        }
    },
    components:{
        paginacion
    },
    methods: {
        ...mapActions('localidades', ['getLocalidades'])
    },
    created() {
        this.getLocalidades()
        this.$store.commit('setArregloPaginado', this.localidades)

    },
    computed: {
        ...mapState(['arregloPaginado']),
        ...mapState('localidades', ['localidades']),
    },
    mutations:{
        ...mapMutations(['setArregloPaginado']),
    }
}
</script>
