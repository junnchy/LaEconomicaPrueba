<template>
    <div>
        <div class="row">
            <div class="col-8">
                <div class="form-group">     
                    <label>Rentabilidad</label>
                    <input type="number" step=0.01 v-model="producto.rentabilidad" class="form-control">
                </div>
            </div>
            <div class="col-4">
                <div class="alert alert-dark" role="alert">
                    <h6 class="text-center">Precio de Venta</h6>
                    <h3 class="text-center">${{setPrecioDeVenta}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    props:{
        producto: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        }
    },
    computed: {
        setPrecioDeVenta(){
            if (this.producto.precioCosto > 0) {
                this.producto.precioVenta = this.producto.precioCosto + (this.producto.precioCosto * (this.producto.rentabilidad/100))
                return  this.producto.precioVenta
            }else{
                this.producto.precioVenta = this.producto.precioCosto
                return  this.producto.precioVenta
            }
        }
    },
}
</script>