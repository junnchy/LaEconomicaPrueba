<template>
    <div>
        {{cliente}}
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name:'DetalleCliente',
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions('clientes',['getCliente'])
    },
    created() {
        this.getCliente(this.id)
    },
    computed: {
        ...mapState('clientes',['cliente'])
    },

}
</script>