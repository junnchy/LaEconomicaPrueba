<template>
    <div class="container">
        <router-view/>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        props:['proveedores'],
        data() {
            return{
                nombre: "Nombre de Prueba"
            }
        }
    }
</script>
