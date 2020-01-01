<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-10">
                    <h1>Categorias</h1>
                </div>
                <div class="col-2">
                    <button class="btn btn-danger" @click="$router.go(-1)">Volver</button>
                </div>
            </div>
            <form class="my-4">
                <div class="row">
                    <div class="col-10">
                        <input class="form-control mr-sm-2 form-block" type="search" placeholder="Search" aria-label="Search" v-model="search">
                    </div>
                    <div class="col-2">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </div>
                </div>
            </form>
            <div class="container">
                <button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Agregar</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Agregar Categoria</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="agregarCategoria(ncat)">
                                    <div class="form-group">
                                        <label class="col-form-label">Nombre de la Nueva Categoria:</label>
                                        <input type="text" v-model="ncat.nombre" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Categoria Padre:</label>
                                        <select class="custom-select" v-model="ncat.categoria_id">
                                            <option selected="selected" :value='null'>0 - Vacio</option>
                                            <option v-for="(categoria, index) in categorias" :key="index">{{categoria.id}} - {{categoria.nombre}}</option>
                                        </select>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="submit" class="btn btn-success btn-block">Agregar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="categoria in filtered_categorias" :key="categoria.id" >
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
    import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                ncat: {nombre:'', categoria_id: ''}
            }
        },
        methods: {
            ...mapActions(['getCategoriasO','agregarCategoria'])
        },
        created() {
            this.getCategoriasO()
        },
        computed: {
            ...mapState(['categorias']),
            ...mapGetters(['filtered_categorias']),
            search:{
                get(){
                    return this.$store.state.filter.query;
                },
                set(val){
                    this.$store.commit('SET_QUERY', val);
                }
            }
        },
        
        mutations:{
            ...mapMutations(['SET_QUERY'])
        }
    }
</script>