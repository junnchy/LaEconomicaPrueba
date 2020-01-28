<template>
    <div>
        <form @submit.prevent="agregarProveedor(proveedor)">
            <componente-fdatosprov v-bind:proveedor="proveedor"/>
            <button type="submit" class="btn btn-success btn-block">
                Agregar <i class="fas fa-check-circle"></i>
            </button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'agregarProv', 
    data() {
        return {
                proveedor: {nombre: '', cuit:'', telefono: '', direccion: '', email: '', 
                localidad_id: 0, condicion_iva_id: 0,
                localidad:{nombre: '', cod_postal: ''},
                condicion_iva:{denominacion: ''}
            }
        }
    },
    methods: {
        ...mapActions('proveedores',['agregarProveedor']),
        ...mapActions(['cambiarEstado']),
    },
    created() {
        this.cambiarEstado(3)
    },
    computed: {
    },
}
</script>