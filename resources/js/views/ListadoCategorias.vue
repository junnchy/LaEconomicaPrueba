<template>
    <div>     
        <div class="container">
            <div class="row">
                <div class="col-10">
                    <h1 class="text-center">Categorias</h1>
                </div>
                <div class="col-2">
                    <button class="btn btn-danger" @click="$router.go(-1)">Volver</button>
                </div>
            </div>
            <form class="my-4">
                <div class="row">
                    <div class="col-8">
                        <input class="form-control mr-sm-2 form-block" type="search" placeholder="Search" aria-label="Search" v-model="search">
                    </div>
                    <div class="col-4">
                        <componente-fagregarcategoria/>
                    </div>
                </div>
            </form>
            <div class="container">
                <table class="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="categoria in arregloPaginado" :key="categoria.id" >
                            <th>{{categoria.id}}</th>
                            <td v-if="categoria.nro === 2"> ------{{categoria.nombre}}</td>
                            <td v-if="categoria.nro === 1"> ---{{categoria.nombre}}</td>
                            <td v-if="categoria.nro === 0"> <strong>{{categoria.nombre}}</strong></td>
                            <td>
                                <router-link :to="{name: 'verEditarCategoria', params:{id: categoria.id}}">
                                    <button  class="btn btn-warning btn-sm">
                                        <i class="fas fa-eye"></i> / <i class="fas fa-edit"></i>
                                    </button>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Paginacion v-bind:filtered="filtered_categorias" v-bind:nro_filas="7"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'
    import Paginacion from '../components/Paginacion'
    export default {
        data() {
            return {
                ncat: {nombre:'', categoria_id: ''},
                searched: '',
            }
        },
        components:{
            Paginacion
        },
        methods: {
            ...mapActions('categorias',['getCategoriasO','agregarCategoria']),
            ...mapActions(['cambiarEstado']),
        },
        created() {
            this.getCategoriasO(),
            this.cambiarEstado(1),
            this.$store.commit('setArregloPaginado', this.filtered_categorias)
        },
        computed: {
            ...mapState(['arregloPaginado']),
            ...mapState('categorias',['categorias']),
            ...mapGetters('categorias',['filtered_categorias']),
            search:{
                get(){
                    return this.$store.state.categorias.filter.query;
                },
                set(val){
                    this.$store.commit('categorias/SET_QUERY', val)
                }
            },
        },
        mutations:{
            ...mapMutations('categorias',['SET_QUERY']),
            ...mapMutations(['setArregloPaginado']),
        }
    }
</script>

