<template>
    <div>
        <div class="row">
            <div class="col-8">
                <div class="form-group">     
                    <label>Precio Base</label>
                    <input type="number" step=0.01 v-model="producto.precioBase" class="form-control">
                </div>
            </div>
            <div class="col-4">
                <div class="alert alert-dark" role="alert">
                    <h6 class="text-center">Precio de Costo</h6>
                    <h3 class="text-center">${{setDre[1]}}</h3> 
                </div>
            </div>
        </div>
        <label class="text-center">Descuentos</label> 
        <div class="row form-group">
            <div class="col-2">
                <hr/>
                <input type="number" step=0.01 v-model="producto.descuentoProducto[0]" class="form-control">
            </div>
            <div class="col-2">
                <hr/>
                <input type="number" step=0.01 v-model="producto.descuentoProducto[1]" class="form-control">
            </div>
            <div class="col-2">
                <hr/>
                <input type="number" step=0.01 v-model="producto.descuentoProducto[2]" class="form-control">
            </div>
            <div class="col-2">
                <hr/>
                <input type="number" step=0.01 v-model="producto.descuentoProducto[3]" class="form-control">
            </div>
            <div class="col-2">
                <hr/>
                <input type="number" step=0.01 v-model="producto.descuentoProducto[4]" class="form-control">
            </div>
            <div class="col-2">
                 <div class="alert alert-dark" role="alert">
                    <h6 class="text-center">Dto Total</h6>
                    <h5 class="text-center" v-if="producto.dre != 1">{{setDre[0] *100}}%</h5>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>IVA</label> 
                    <select class="custom-select" v-model="producto.iva">
                        <option :value=21>21%</option>
                        <option :value=10.5>10.5%</option>
                    </select>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Flete</label> 
                    <input type="number" step=0.01 v-model="producto.flete" class="form-control">
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
            descuento: 0,
        }
    },
    computed: {
        setDre(){
            var p = 0
            var i = 0
            this.producto.precioBase = parseFloat(this.producto.precioBase)
            this.producto.descuentoProducto.forEach(element => {
                if (element > 0) {                   
                    p = (1-(element/100))
                    if(i>0){
                        i = i * p
                    }else{
                        i = p
                    }

                }
            })
            this.producto.dre = (1 - i)
            if (this.producto.dre != 1) {
                this.producto.precioCosto = this.producto.precioBase - (this.producto.precioBase * this.producto.dre)
                if(this.producto.iva != 0){
                    this.producto.precioCosto = this.producto.precioCosto + (this.producto.precioCosto * (this.producto.iva/100))
                }
                if(this.producto.flete != 0){
                    this.producto.flete = parseFloat(this.producto.flete)
                    this.producto.precioCosto = this.producto.precioCosto + this.producto.flete
                }
                return [this.producto.dre, this.producto.precioCosto]
            }else{
                this.producto.precioCosto = this.producto.precioBase
                if(this.producto.iva != 0){
                    this.producto.precioCosto = this.producto.precioCosto + (this.producto.precioCosto * (this.producto.iva/100))
                }
                if(this.producto.flete != 0){
                    this.producto.flete = parseFloat(this.producto.flete)
                    this.producto.precioCosto = this.producto.precioCosto + this.producto.flete
                }
                return [this.producto.dre, this.producto.precioCosto]
            }    
        }
    },
}
</script>