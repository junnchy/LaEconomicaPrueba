<template>
    <div>
        <h1>Nuevo Presupuesto</h1>
        <encabezado v-bind:npresupuesto="npre"/>
    </div>
</template>

<script>
import encabezado from '../components/Comprobante-Encabezado'
export default {
    data() {
        return {
            npre:{
                cliente: null
            }
        }
    },
    components:{
        encabezado
    }
    
}
</script>