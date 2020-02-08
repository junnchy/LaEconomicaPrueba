<template>
    <div>
        <h1>
            <i class="fas fa-handshake"></i> Seccion Comercial
        </h1>
        <div class="alert alert-primary alert-dismissible fade show text-center" role="alert">
            <h4>Bienvenido {{usuarioActual.name}}</h4>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
            <div class="container shadow-sm mt-3 p-3 bg-white rounded">
                <div class="row">
                    <div class="col-12">
                        <router-link :to="{name:'nuevoPrespuesto'}">
                            <button class="btn btn-outline-success">
                                Nuevo Presupuesto <i class="fas fa-plus-circle"></i>
                            </button> 
                        </router-link> 
                    </div>
                </div>
            </div>
            <div class="container shadow-sm mt-3 p-3 text-white bg-secondary rounded">
                <h2>
                    <i class="fas fa-chart-bar"></i> Estadisticas
                </h2>
                <div class="row mt-2">
                    <div class="col-12 text-center">
                        <h4 class="my-2">
                            <i class="fas fa-chart-line"></i> Ventas
                        </h4>
                        <estadisticaventas/>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-6">
                        <h4 class="my-2">
                            <i class="fas fa-boxes"></i> Tipo de Producto
                        </h4>
                        <estadisticaproducto/>
                    </div>
                    <div class="col-6">
                        <h4 class="my-2">
                            <i class="fas fa-boxes"></i> Tipo de Producto
                        </h4>
                        <estadisticalinea/>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import estadisticaventas from '../components/EstadisticaVentas'
import estadisticaproducto from '../components/EstadisticaTipoDeProductos'
import estadisticalinea from '../components/Estadistica-Linea'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        estadisticaventas,
        estadisticaproducto,
        estadisticalinea
    }, 
    created(){
        console.log(this.$userId)
        this.getUsuarioActual(this.$userId)
    },
    methods:{
        ...mapActions('usuarios', ['getUsuarioActual'])
    },
    computed: {
        ...mapState('usuarios', ['usuarioActual'])
    },
}
</script>
