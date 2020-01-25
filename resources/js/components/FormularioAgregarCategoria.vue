<template>
   <div class="container">
        <button type="button" class="btn btn-outline-success btn-block" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
            Agregar Categoria <i class="fas fa-plus-circle"></i>
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar Categoria</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetResp(null)">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="agregarCategoria(ncat)">
                            <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuesta != null">
                                {{respuesta}} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Nombre de la Nueva Categoria:</label>
                                <input type="text" v-model="ncat.nombre" :placeholder="reset" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Categoria Padre:</label>
                                <select class="form-control" v-model="ncat.categoria_id" type="number" >
                                    <option selected  :value='null'>0 - Vacio</option>
                                    <option v-for="(categoria, index) in categorias" :key="index" :value="categoria.id">{{categoria.id}} - {{categoria.nombre}}</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetResp(null)">Cerrar</button>
                                <button type="submit" class="btn btn-success btn-block">
                                    Agregar <i class="fas fa-check-circle"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return{
                ncat: {nombre:'', categoria_id: 0},
                aux: ''
            }
        },
        mounted(){
            console.log('component mounted')
        },
        methods: {
            ...mapActions('categorias', ['getCategoriasO','agregarCategoria', 'resetResp'])
        },
        created() {
            this.getCategoriasO()
        },
        computed: {
            ...mapState('categorias',['categorias', 'respuesta']),
            ...mapState('proveedores',['proveedores']),
            reset(){
                if(this.$store.state.categorias.respuesta != null){
                    this.ncat.nombre=this.aux,
                    this.ncat.categoria_id=0
                    return this.aux
                }else{
                    return this.ncat.nombre
                }
            }
        }
    }
</script>