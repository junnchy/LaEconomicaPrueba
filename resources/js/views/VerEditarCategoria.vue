<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h3>Editar Categoria</h3>
                </div>
                <div class="col-4">
                    <router-link :to="{name:'listadoCategorias'}">
                        <button class="btn btn-warning" v-if="respuesta != null" @click="resetResp(null)">
                            Finalizar
                        </button>
                    </router-link>
                    <button class="btn btn-danger" v-if="respuesta === null" @click="$router.go(-1)">
                        Cancelar
                    </button>
                </div>
            </div>
            <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuesta != null">
                {{respuesta}} 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <form @submit.prevent="editarCategoria(categoria)">
            <div class="mt-5">
                <div class="form-group">
                    <label>Nombre Categoria</label>
                    <input type="text" v-model="categoria.nombre" class="form-control" >
                </div>    
                <div class="form-group">
                    <div class="form-group">
                        <label>Categoria Padre</label> 
                        <select class="custom-select" v-model="categoria.categoria_id">
                            <option selected="selected" v-if="categoria.padre != null" :value="categoria.categoria_id">{{categoria.padre.id}} - {{categoria.padre.nombre}}</option>
                            <option selected="selected" v-if="categoria.categoria_id === null" :value="categoria.categoria_id">0 - Vacio</option>
                            <option selected="selected" v-if="categoria.padre != null" :value='null'>0 - Vacio</option>
                            <option v-for="(cate, index) in categorias" :key="index">{{cate.id}} - {{cate.nombre}}</option>
                        </select>
                    </div>
                </div>               
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-warning btn-block">Guardar Cambios <i class="fas fa-save"></i></button>
            </div>
        </form>
        <h3 class="mt-5" v-if="categoria.cant_hijos > 0">SubCategorias</h3>
        <div class="list-group mt-3">
            <button type="button"  @click="getCategoria(cat.id)" class="list-group-item list-group-item-action" 
            v-for="(cat, index) in categoria.children" :key="index">
                {{cat.id}}-{{cat.nombre}}
            </button>
        </div>

    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'verEditarCategoria',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions('categorias',['getCategoria','getCategoriasO', 'editarCategoria', 'resetResp'])
    },
    created() {
        this.getCategoria(this.id)
        this.getCategoriasO()
    },
    computed: {
        ...mapState('categorias',['categoria', 'categorias', 'respuesta'])
    }
}
</script>
