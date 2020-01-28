<template>
    <div>
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