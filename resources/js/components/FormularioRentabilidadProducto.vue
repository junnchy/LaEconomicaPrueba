<template>
    <div>
        <div class="row">
            <div class="col-8">
                <div class="form-group">     
                    <label>Rentabilidad</label>
                    <input 
                    type="number" 
                    step=0.01 
                    v-model="producto.rentabilidad" 
                    :class="fRent">
                </div>
                <span class="invalid-feedback" role="alert" v-if="errors.rentabilidad != ''"> 
                    <strong>{{errors.rentabilidad[0]}}</strong>
                </span>
            </div>
            <div class="col-4">
                <div class="alert alert-dark" role="alert">
                    <h6 class="text-center">Precio de Venta</h6>
                    <h3 class="text-center">${{setPrecioDeVenta.toFixed(3)}}</h3>
                </div>
            </div>
        </div>
        {{validar}}
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
            fRent: "form-control",
            formClass: "form-control",
            iFormClass: "form-control is-invalid",
        }
    },
    computed: {
        ...mapState('productos', ['errors']),
        setPrecioDeVenta(){
            if (this.producto.precioCosto > 0) {
                this.producto.precioVenta = this.producto.precioCosto + (this.producto.precioCosto * (this.producto.rentabilidad/100))
                return  this.producto.precioVenta
            }else{
                this.producto.precioVenta = this.producto.precioCosto
                return  this.producto.precioVenta
            }
        },
        validar(){
            if(this.errors.rentabilidad != ''){
                this.fRent = this.iFormClass
            }else{
                    this.fRent = this.formClass
            }
        }
    },
}
</script>