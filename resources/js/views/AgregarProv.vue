<template>
    <div>
        <form @submit.prevent="agregarProveedor(proveedor)">
            <div class="form-group mt-5">
                <div class="row">
                    <div class="col-8">
                        <h3>Ingreso de Nuevo Proveedor</h3>
                    </div>
                    <div class="col-4">
                        <router-link :to="{name:'listadoProveedores'}">
                            <button class="btn btn-danger">
                                Cancelar
                            </button>
                        </router-link>
                    </div>
                </div> 
                <div class="form-group">
                    <label>Nombre Proveedor</label>
                    <input type="text" v-model="proveedor.nombre" class="form-control" >
                </div>                   
                <div class="form-group">     
                    <label>CUIT</label>
                    <input type="number" v-model="proveedor.cuit" class="form-control">
                </div>  
                <div class="form-group">
                    <label>Telefono</label>
                    <input type="number" v-model="proveedor.telefono" class="form-control">
                </div>
            </div>
            <button type="submit" class="btn btn-success">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'agregarProv', 
    data() {
        return {
            proveedor: {nombre: '', cuit:'', telefono: ''}
        }
    },
    methods: {
        ...mapActions(['agregarProveedor'])
    },
    created() {
    },
    computed: {
    },
}
</script>