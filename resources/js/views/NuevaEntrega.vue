<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Corrdinacion de Entrega</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                 <router-link :to="{name:'menuComercial'}" >
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

