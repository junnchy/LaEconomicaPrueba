<template>
    <div>
        <button class="btn btn-outline-dark" 
        type="button" data-toggle="collapse" data-target="#MenuLateral" 
        aria-expanded="false" aria-controls="MenuLateral">
            <div v-html="icono">
            </div>
        </button>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Boton',
    data() {
        return {
            icono: '<i class="fas fa-angle-right"></i>'
        }
    }
}
</script>

