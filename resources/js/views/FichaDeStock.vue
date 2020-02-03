<template>
    <div>
        <div class="row">
            <div class="col-8">
                <H1>Ficha de Stock <i class="fas fa-box-open"></i></H1> 
            </div>
            <div class="col-4">
                 
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
                    <strong>Ultimo movimiento: </strong> {{fichaDeStock.updated_at}}
                </div>
                <ajustemanualstock v-bind:nFicha="id" v-bind:cantAct="fichaDeStock.cantidadActual"/>
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
        ...mapActions('stock', ['getFichaStock'])
    },
    computed: {
        ...mapState('stock', ['fichaDeStock']),
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