<template>
    <div>
        <div class="container mt-5">
            <table class="table table-hover">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre y Apellido</th>
                    <th scope="col">CUIL</th>
                    <th scope="col">DNI</th>    
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in arregloPaginado" :key="usuario.id">
                        <th scope="row">{{usuario.id}}</th>
                        <td class="mt-2">{{usuario.nombre}}</td>
                        <td class="mt-2">{{usuario.cuil}}</td>
                        <td class="mt-2">{{usuario.dni}}</td>
                        <td>
                            <router-link :to="{name: 'detalleUsuario', params:{id: usuario.id}}">
                                <button  class="btn btn-warning btn-sm">
                                    Ver Más <i class="fas fa-eye"></i>
                                </button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Paginacion v-bind:filtered="filtered_usuarios" v-bind:nro_filas="7"/>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import Paginacion from '../components/Paginacion'
export default {
    name: 'ListadoUsuarios',
    data() {
        return {
        }
    },
    components:{
        Paginacion
    },
    created() {
        this.$store.commit('setArregloPaginado', this.filtered_usuarios)
    },
    computed: {
        ...mapState(['arregloPaginado']),
        ...mapState('usuarios', ['usuarios']),
        ...mapGetters('usuarios', ['filtered_usuarios'])
    },
    mutations:{
        ...mapMutations(['setArregloPaginado']),
    }
}
</script>        
