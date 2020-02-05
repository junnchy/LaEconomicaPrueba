<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h3><i class="fas fa-user-edit"></i> Editar Proveedor</h3>
            </div>
            <div class="col-4">
                <router-link :to="{name:'listadoProveedores'}">
                    <button class="btn btn-danger" @click="resetError()">
                        Cancelar
                    </button>
                </router-link>
            </div>
        </div> 
        <form @submit.prevent="editarProveedor(proveedor)">
            <componente-fdatosprov v-bind:proveedor="proveedor"/>
            <button type="submit" class="btn btn-warning btn-block">Guardar Cambios <i class="fas fa-save"></i> </button>
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
        ...mapActions('proveedores',['getProveedor', 'editarProveedor', 'resetError'])
    },
    created() {
        this.getProveedor(this.id)
    },
    computed: {
        ...mapState('proveedores', ['proveedor'])
    },
}
</script>