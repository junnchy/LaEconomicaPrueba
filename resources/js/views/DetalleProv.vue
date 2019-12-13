<template>
    <div>
        <h1>Detalle Proveedor</h1>
        {{id}}
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name:'DetalleProv',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getProveedor'])
    },
    created() {
        this.getProveedor(this.id)
    },
    computed: {
        ...mapState(['proveedores'])
    },

}
</script>