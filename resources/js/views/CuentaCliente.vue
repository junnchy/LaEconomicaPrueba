<template>
    <div>
        <h2>Cuenta Cliente</h2>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    created(){
        this.getCuentaCliente(this.id)
    },
    methods:{
        ...mapActions('cuentaCliente', ['getCuentaCliente'])
    }
}
</script>