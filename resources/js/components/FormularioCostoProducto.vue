<template>
    <div>
        <div class="row">
            <div class="col-8">
                <div class="form-group">     
                    <label>Precio Base</label>
                    <input 
                    type="number" 
                    step=0.01 
                    v-model="producto.precioBase" 
                    :class="fPBase">
                    <span class="invalid-feedback" role="alert" v-if="errors.precioBase != ''"> 
                        <strong>{{errors.precioBase[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-4">
                <div class="alert alert-dark" role="alert">
                    <h6 class="text-center">Precio de Costo</h6>
                    <h3 class="text-center">${{setDre[1].toFixed(3)}}</h3> 
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
                    <h5 class="text-center" v-if="producto.dre != 1">{{(setDre[0] *100).toFixed(2)}}%</h5>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div 
                class="form-group">
                    <label>IVA</label> 
                    <select 
                    :class="fIva" 
                    v-model="producto.iva">
                        <option :value=21>21%</option>
                        <option :value=10.5>10.5%</option>
                    </select>
                    <span class="invalid-feedback" role="alert" v-if="errors.iva != ''"> 
                        <strong>{{errors.iva[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Flete</label> 
                    <input type="number" step=0.01 v-model="producto.flete" class="form-control">
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
            descuento: 0,
            fPBase: "form-control",
            fIva: "form-control",
            formClass: "form-control",
            iFormClass: "form-control is-invalid",
        }
    },
    computed: {
        ...mapState('productos', ['errors']),
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
        },
        validar(){
            if(this.errors.precioBase != ''){
                this.fPBase = this.iFormClass
            }else{
                this.fPBase = this.formClass
            }
            if(this.errors.iva != ''){
                this.fIva = this.iFormClass
            }else{
                this.fIva = this.formClass
            }
        }
    },
}
</script>