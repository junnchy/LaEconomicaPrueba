<template>
    <div class="container">
        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#agregarCatProv" data-whatever="@mdo">
            Agregar Categoria <i class="fas fa-plus-circle"></i>
        </button>
        <div class="modal fade" id="agregarCatProv" tabindex="-1" role="dialog" aria-labelledby="agregarCatProvLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="agregarCatProvLabel">Agregar Categoria a Proveedor</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetResp(null)">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="agregarCategoriaProveedor([categoria, proveedor, descuento])">
                            <h4>Proveedor: {{proveedor.nombre}}</h4>
                            <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuesta != null">
                                {{respuesta}} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Categoria:</label>
                                <select class="form-control" v-model="categoria">
                                    <option v-for="(categoria, index) in categorias" :key="index" :value="categoria.id">{{categoria.id}} - {{categoria.nombre}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Descuento:</label>
                                <input type="number" v-model="descuento" :placeholder="reset" class="form-control">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetResp(null)">Cerrar</button>
                                <button type="submit" class="btn btn-success btn-block">Agregar</button>
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
        props:{
            proveedor:{
                type: Object,
                required: true
            }
        },
        data() {
            return{
                descuento:0,
                categoria: 0
            }
        },
        mounted(){
            console.log('component mounted')
        },
        methods: {
        ...mapActions('proveedores',['agregarCategoriaProveedor', 'resetResp'])
        },
        created() {
        },
        computed: {
            ...mapState('categorias',['categorias']),
            ...mapState('proveedores',['respuesta']),
            reset(){
                if(this.$store.state.proveedores.respuesta != null){
                    this.descuento =0,
                    this.categoria= 0
                    return this.descuento
                }else{
                    return this.descuento
                }
            }
        }
    }
</script>