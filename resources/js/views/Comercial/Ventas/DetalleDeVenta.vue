<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h2>Detalle de Venta</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                {{ventaActual}}
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    created(){
        this.getVenta(this.id)
    },
    methods:{
        ...mapActions('ventas', ['getVenta'])
    },
    computed:{
        ...mapState('ventas', ['ventaActual'])
    }
}
</script>