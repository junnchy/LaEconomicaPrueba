<template>
    <div class="container">
            <div class="row">
                <div class="col-10">
                    <h1 class="text-center">
                        <i class="fas fa-sitemap"></i> Categorias de Gastos
                    </h1>
                </div>
                <div class="col-2">
                    <button class="btn btn-outline-danger" @click="$router.go(-1)">
                        Volver <i class="fas fa-arrow-alt-circle-left"></i>
                    </button>
                </div>
            </div>
            <form class="my-4">
                <div class="row">
                    <div class="col-8">
                        <input class="form-control mr-sm-2 form-block" type="search" placeholder="Search" aria-label="Search">
                    </div>
                    <div class="col-4">
                        <agregarCategoria/>
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
                        <tr v-for="categoria in categorias" :key="categoria.id" >
                            <th>{{categoria.id}}</th>
                            <td v-if="categoria.nro === 2"> ------{{categoria.nombre}}</td>
                            <td v-if="categoria.nro === 1"> ---{{categoria.nombre}}</td>
                            <td v-if="categoria.nro === 0"> <strong>{{categoria.nombre}}</strong></td> 
                            <td>
                                <button  class="btn btn-outline-primary btn-sm">
                                    <i class="fas fa-eye"></i> / <i class="fas fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script>
import agregarCategoria from '../components/Caja/Gastos/ModalAgregarCategoriaGasto'
import { mapActions, mapState } from 'vuex'
export default {
    created(){
        this.getCategorias()
    },
    components:{
        agregarCategoria
    },
    methods:{
        ...mapActions('categoriaGastos', ['getCategorias'])
    },
    computed:{
        ...mapState('categoriaGastos', ['categorias'])
    }
    
}
</script>