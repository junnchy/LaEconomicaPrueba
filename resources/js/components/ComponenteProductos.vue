<template>
    <div class="container">
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                nombre: "Nombre de Prueba"
            }
        },
        mounted(){
            console.log('component productos mounted')
        }
    }
</script>
