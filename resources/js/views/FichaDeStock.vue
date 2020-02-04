<template>
    <div>
        <div class="row shadow-sm p-3 text-white bg-dark rounded">
            <div class="col-10">
                <H1 v-if="fichaDeStock.producto.nombre">
                <i class="fas fa-box-open"></i> Ficha de Stock: {{fichaDeStock.producto.nombre}}</H1> 
            </div>
            <div class="col-2">
                <img :src="fichaDeStock.producto.imagen" class="rounded" width="100px">
            </div>
        </div>
        <div class="row mt-4">
           <div class="col-6">
                <div :class="etiquetaCantidad" role="alert">
                    <h4>Actual</h4>
                    <h3>{{fichaDeStock.cantidadActual}}</h3>
                </div>
            </div>
            <div class="col-6">
                <div class="alert alert-secondary" role="alert">
                    <i class="fas fa-clock"></i> <strong>Ultimo movimiento: </strong> {{fichaDeStock.ultStock}}
                </div>
                <div class="row">
                    <div class="col-9">
                        <ajustemanualstock 
                            v-if="fichaDeStock"
                            v-bind:nFicha="id" 
                            v-bind:cantAct="fichaDeStock.cantidadActual"
                            v-bind:producto_id="fichaDeStock.producto_id"/>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-danger" @click="$router.go(-1)">
                            Volver <i class="fas fa-arrow-alt-circle-left"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <table class="table table-striped m-4">
            <thead>
                <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Tipo</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Usuario</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in fichaDeStock.lineas" :key="index">
                <th scope="row">{{item.created_at}}</th>
                <td>{{item.tipo}}</td>
                <td>{{item.cantidad}}</td>
                <td>{{item.usuario}}</td>
                <td>
                    <button class="btn btn-outline-dark btn-sm">
                        ver
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
                </div>
            </template>

<script>
import { mapActions, mapState } from 'vuex'
import ajustemanualstock from '../components/AjusteManualStock'
export default {
    components:{
        ajustemanualstock
    },
    data() {
        return {
            id: this.$route.params.id,
            cEC: 'alert alert-info text-center'
        }
    },
    created(){
        this.getFichaStock(this.id)   
    },
    methods:{
        ...mapActions('stock', ['getFichaStock']),
        ...mapActions('productos', ['getProducto'])
    },
    computed: {
        ...mapState('stock', ['fichaDeStock']),
        ...mapState('productos', ['producto']),
        etiquetaCantidad(){
            if (this.fichaDeStock.cantidadActual === 0) {
                this.cEC ='alert alert-warning text-center'
            }
            if (this.fichaDeStock.cantidadActual > 0) {
                this.cEC ='alert alert-success text-center'
            }
            if (this.fichaDeStock.cantidadActual < 0) {
                this.cEC ='alert alert-danger text-center'
            }
            return this.cEC
        }
    },
}
</script>