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
                        <tr v-for="categoria in paginado" :key="categoria.id" >
                            <th>{{categoria.id}}</th>
                            <td v-if="categoria.nro === 2"> ------{{categoria.nombre}}</td>
                            <td v-if="categoria.nro === 1"> ---{{categoria.nombre}}</td>
                            <td v-if="categoria.nro === 0"> <strong>{{categoria.nombre}}</strong></td>
                            <td>
                                <router-link :to="{name: 'verEditarCategoria', params:{id: categoria.id}}">
                                    <button  class="btn btn-warning btn-sm">Ver / Editar</button>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Pensar como pasar todo el navegador a un componente -->
                 <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end pagination-sm">
                        <li :class="downType">
                        <a class="page-link" href="#" aria-label="Previous"  @click="changePageDown()">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item" v-for="(item, index) in count" :key="index">
                            <a class="page-link" href="#" @click="nro = item">{{item}}</a>
                        </li>
                        <li :class="upType">
                        <a class="page-link" href="#" aria-label="Next" @click="changePageUp()">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
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
                searched: '',
                upType: "page-item",
                downType:"page-item disabled",
                cantidadDeLineas: 0,
                linePerPage: 7,
                nro: 0,
                paginas: [],
                act: 1,
                nroItems: 3,
                pDesde: 0,
                PHasta: 3
            }
        },
        methods: {
            ...mapActions('categorias',['getCategoriasO','agregarCategoria']),
            ...mapActions(['cambiarEstado']),
            changePageUp(){
                this.act++
                this.pDesde += this.nroItems
                this.PHasta += this.nroItems
                if (this.act === 1) {
                    this.downType = "page-item disabled"
                }else{
                    this.downType = "page-item"
                }
            },
            changePageDown(){
                this.act--
                this.pDesde -= this.nroItems
                this.PHasta -= this.nroItems
            },
        },
        created() {
            this.getCategoriasO(),
            this.cambiarEstado(1)
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
            },
            count(){
                let aux
                this.paginas = []
                this.cantidadDeLineas = this.filtered_categorias.length
                aux = Math.ceil(this.cantidadDeLineas / this.linePerPage)
                for (let index = 0; index < aux; index++) {
                    this.paginas.push(index)
                }
                return this.paginas.slice(this.pDesde, this.PHasta) 
            },
            paginado(){
                let desde 
                let hasta
                if (this.nro === 0) {
                    desde = 0
                    hasta = this.linePerPage
                }else{
                    desde = this.nro*this.linePerPage
                    hasta = desde + this.linePerPage
                }
                return this.filtered_categorias.slice(desde,hasta)
            }
        },
        mutations:{
            ...mapMutations('categorias',['SET_QUERY']),
        }
    }
</script>

