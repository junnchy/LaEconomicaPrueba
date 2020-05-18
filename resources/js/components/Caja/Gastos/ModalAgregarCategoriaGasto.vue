<template>
   <div class="container">
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-success" 
        data-toggle="modal" 
        data-target="#AgregarCategoriaGasto" 
        data-whatever="@mdo"
        >
            Agregar Categoria de Gasto <i class="fas fa-plus-circle"></i>
        </button>
        <div class="modal fade" id="AgregarCategoriaGasto" tabindex="-1" role="dialog" aria-labelledby="AgregarCategoriaGastoLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="AgregarCategoriaGastoLabel">
                            Agregar Categoria de Gasto <i class="fas fa-plus-circle"></i>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="alert alert-success alert-dismissible fade show mt-4" v-if="status === 200">
                                    {{message}} 
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                           <form @submit.prevent="agregarCategoria(ncat)">
                                <div class="form-group">
                                    <label class="col-form-label">Nombre de la Nueva Categoria:</label>
                                    <input type="text" v-model="ncat.nombre" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Categoria Padre:</label>
                                    <select class="form-control" v-model="ncat.cat_id" type="number" >
                                        <option selected  :value='null'>0 - Vacio</option>
                                        <option v-for="(categoria, index) in categorias" :key="index" :value="categoria.id">
                                            <p v-if="categoria.nro === 1">--- </p><p v-if="categoria.nro === 2">------ </p>{{categoria.nombre}}
                                        </option>
                                    </select>
                                </div>
                                <div class="modal-footer">

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
   </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return{
                ncat:{
                    id: null,
                    nombre: '',
                    cat_id: null
                }
            }
        },
        props:{
        },
        components:{
          
        },
        methods: {
            ...mapActions('categoriaGastos', ['agregarCategoria']),
            LNB(){
                $('#MenuLateral').collapse('show')
            }
        },
        destroyed(){
    
        },
        computed: {
            ...mapState('categoriaGastos', ['categorias', 'status', 'message'])
                  
        }
    }
</script>