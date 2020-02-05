<template>
    <div>
        <h1>Seccion Comercial</h1>
            <div class="mt-4">
                <h3>
                    <i class="fas fa-chart-bar"></i>Estadisticas
                </h3>
                <estadisticaventas/>
            </div>
    </div>
</template>
<script>
import estadisticaventas from '../components/EstadisticaVentas'
export default {
    components:{
        estadisticaventas
    }
}
</script>
