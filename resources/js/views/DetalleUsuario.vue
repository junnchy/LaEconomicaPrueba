<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>Detalle de Usuario </h2>
            </div>
            <div class="col-4">
                <router-link :to="{name: 'editarUsuario', params:{id: usuario.id}}">
                    <button class="btn btn-warning">
                        Editar <i class="fas fa-pen"></i>
                    </button>
                </router-link>
                <router-link :to="{name: 'menuUsuarios'}">
                    <button class="btn btn-danger">
                        Volver
                    </button>
                </router-link>
            </div>
        </div>
        <ul class="list-group mt-3">
            <li class="list-group-item"><strong><h3>{{usuario.nombre}}</h3></strong></li>
            <li class="list-group-item"><strong>Codigo: </strong> {{usuario.id}}</li>       
            <li class="list-group-item"><strong>Email: </strong> {{usuario.email}}</li>
            <li class="list-group-item"><strong>Celular: </strong> {{usuario.celular}}</li>
            <li class="list-group-item"><strong>Telefono: </strong>{{usuario.telefono}} </li>
            <li class="list-group-item"><strong>Fecha de Nacimiento: </strong> {{usuario.fecha_nacimiento}}</li>
            <li class="list-group-item" v-if="usuario.localidad"><strong>Direccion: </strong> {{usuario.direccion}} - {{usuario.localidad.nombre}}, {{usuario.localidad.provincia.iso_nombre}}</li>
            <li class="list-group-item"><strong>Ultima Actualizacion: </strong> {{usuario.updated_at}}</li>
        </ul>
        <div class="container mt-5">
            <h3><i class="fas fa-map-marker-alt"></i> Ubicacion en Mapa: </h3>
            <componente-gmap v-bind:usuario="usuario"/>
        </div>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name:'DetalleUsuario',
    data() {
        return {
            data() {
                return {
     
                }
            },
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions('usuarios',['getUsuario']),
    },
    created() {
        this.getUsuario(this.id)
        
    },
    mounted(){
    },
    computed: {
        ...mapState('usuarios',['usuario']),
    },

}
</script>