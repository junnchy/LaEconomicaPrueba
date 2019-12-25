<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h1>Categorias</h1>
                </div>
                <div class="col-4">
                    <router-link :to="{name:'MenuProductos'}">
                        <button class="btn btn-danger">Volver</button>
                    </router-link>
                </div>
            </div>
            <form class="form-inline my-4">

                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="busca">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">buscar</button>
            </form>
            <div class="container">
                <button class="btn btn-success btn-block my-5">
                    Agregar Categoria
                </button>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(categoria, index) in categorias" :key="index" >
                            <th>{{categoria.id}}</th>
                            <td v-if="categoria.nro === 2"> ----{{categoria.nombre}}</td>
                            <td v-if="categoria.nro === 1"> --{{categoria.nombre}}</td>
                            <td v-if="categoria.nro === 0"> <strong>{{categoria.nombre}}</strong></td>
                            <td>
                                <router-link :to="{name: 'verEditarCategoria', params:{id: categoria.id}}">
                                    <button  class="btn btn-warning btn-sm">Ver / Editar</button>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                busca: ''
            }
        },
        methods: {
            ...mapActions(['getCategoriasO'])
        },
        created() {
            this.getCategoriasO()
        },
        computed: {
            ...mapState(['categorias'])
        },
    }
</script>