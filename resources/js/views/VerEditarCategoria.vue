<template>
    <div>
         <form>
            <div class="form-group mt-5">
                <div class="row">
                    <div class="col-8">
                        <h3>Editar Categoria</h3>
                    </div>
                    <div class="col-4">
                        <router-link :to="{name: 'listadoCategorias'}" >
                            <button class="btn btn-danger">
                                Volver
                            </button>
                        </router-link>
                    </div>
                </div> 
                <div class="form-group">
                    <label>Nombre Categoria</label>
                    <input type="text" v-model="categoria.nombre" class="form-control" >
                </div>                   
            </div>
            <button type="submit" class="btn btn-success btn-block">Guardar</button>
        </form>
        <h3 class="mt-5">SubCategorias</h3>
        <div class="list-group mt-3">
            <button type="button" class="list-group-item list-group-item-action" 
            v-for="(cat, index) in categoria.children" :key="index">{{cat.id}}-{{cat.nombre}}</button>
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
        ...mapActions(['getCategoria'])
    },
    created() {
        this.getCategoria(this.id)
    },
    computed: {
        ...mapState(['categoria'])
    }
}
</script>
