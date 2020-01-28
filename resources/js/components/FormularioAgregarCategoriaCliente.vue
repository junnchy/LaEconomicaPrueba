<template>
   <div class="container">
        <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
            Agregar Categoria <i class="fas fa-plus-circle"></i>
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar Categoria de Cliente</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetResp(null)">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="agregarCategoriaCli(ncate)">
                            <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuestaS != null">
                                {{respuestaS}} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Nombre de la Nueva Categoria:</label>
                                <input type="text" v-model="ncate.denominacion" :placeholder="reset" class="form-control">
                            </div>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetResp(null)">Cerrar</button>
                                <button type="submit" class="btn btn-success btn-block">Agregar Categoria</button>
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
                ncate: {denominacion:''}
            }
        },
        mounted(){
            console.log('component mounted')
        },
        methods: {
            ...mapActions('clientes', ['agregarCategoriaCli', 'resetResp'])
        },
        created() {
        },
        computed: {
            ...mapState('clientes', ['respuestaS']),
            reset(){
                if(this.$store.state.clientes.respuestaS != null){
                    this.ncate.denominacion=''
                    return this.ncate.denominacion
                }else{
                    return this.ncate.denominacion
                }
            }
        }
    }
</script>