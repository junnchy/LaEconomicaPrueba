<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Coordinacion de Entrega <i class="fas fa-truck"></i></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                 <router-link :to="{name:'nuevoPago'}" >
                    <button type="button" 
                    class="btn btn-outline-primary">
                        Finalizar <i class="fas fa-check-circle"></i>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('ventas',['ventaActual'])
    },
}
</script>

