<template>
    <div>
        <form @submit.prevent="editarProveedor(proveedor)">
            <div class="form-group mt-5">
                <div class="row">
                    <div class="col-8">
                        <h3>Editar Proveedor</h3>
                    </div>
                    <div class="col-4">
                        <router-link :to="{name: 'detalleProv', params:{id: id}}">
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
            <button type="submit" class="btn btn-success btn-block">Guardar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'editarProveedor', 
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions('proveedores',['getProveedor', 'editarProveedor']),
    },
    created() {
        this.getProveedor(this.id)
    },
    computed: {
        ...mapState('proveedores', ['proveedor'])
    },
}
</script>