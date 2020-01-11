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
                <componente-fagregarcategoria/>
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
                ncat: {nombre:'', categoria_id: ''},
                searched: ''
            }
        },
        methods: {
            ...mapActions('categorias',['getCategoriasO','agregarCategoria'])
        },
        created() {
            this.getCategoriasO()
        },
        computed: {
            ...mapState('categorias',['categorias']),
            ...mapGetters('categorias',['filtered_categorias']),
            search:{
                get(){
                    return this.$store.state.categorias.filter.query;
                },
                set(val){
                    this.$store.commit('categorias/SET_QUERY', val)
                }
            }
        },
        
        mutations:{
            ...mapMutations('categorias',['SET_QUERY'])
        }
    }
</script>

