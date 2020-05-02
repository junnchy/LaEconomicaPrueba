<template>
    <div>
        <div class="row m-2">
            <div class="col-8">
                
            </div>
            <div class="col-4">

            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                  <listaMovimientos v-bind:movimientos="movimientos"/>
            </div>
        </div>
    </div>
</template>
<script>
import listaMovimientos from './ListaMovimientos'
export default {
    data() {
        return {
            fecha: null
        }
    },
    components:{
        listaMovimientos
    },
    props:{
        movimientos:{
            type: Array,
            required: true
        }
    },
    computed:{
        
    }
}
</script>