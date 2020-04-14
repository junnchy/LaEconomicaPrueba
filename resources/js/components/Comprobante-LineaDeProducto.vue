<template>
    <div class="col-12 text-center">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col" v-if="npresupuesto.id === null">Disponibles</th>
                    <th scope="col" class="w-10">Cantidad</th>
                    <th scope="col">Precio unidad</th>
                    <th scope="col" v-if="npresupuesto.cliente.condicion_iva_id === 1">Iva</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(linea, index) in npresupuesto.lineas" :key="index">
                    <th scope="row">{{linea.producto.id}}</th>
                    <td>{{linea.producto.nombre}}</td>
                    <td v-if="npresupuesto.id === null">{{linea.producto.ficha_stock.cantidadActual}}</td>
                    <td class="w-10">
                        <input type="numer" class="form-control" v-model="linea.cantidad" :disabled="mostrar">
                    </td>
                    <td>${{precio(linea)}}</td>
                    <td v-if="npresupuesto.cliente.condicion_iva_id === 1">{{linea.producto.precio.iva}}%</td>
                    <td>${{subtotal(linea)}}</td>
                    <td>
                        <button type="button" class="btn btn-outline-danger border-0" 
                        @click="deleteLinea(index)"
                        v-if="npresupuesto.id === null">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="row mt-2">
            <div class="col-9">
                <div class="form-group text-left">
                    <textarea class="form-control" 
                    placeholder="Detalles del Presupuesto" 
                    id="detalle_presupuesto" v-model="npresupuesto.detalles" 
                    rows="3"></textarea>
                </div>
            </div>
            <div class="col-3" v-if="npresupuesto.cliente.condicion_iva_id === 1">
                <div class="alert alert-primary">
                    <p>Subtotal ${{subTotal}}</p>
                    <p>Iva ${{iva}}</p>
                    <hr>
                    <p>Total</p>
                    <h3>
                        ${{total}}
                    </h3>
                </div>
            </div>
            <div class="col-3" v-if="npresupuesto.cliente.condicion_iva_id != 1">
                <div class="alert alert-primary">
                    <p>Total</p>
                    <h3>
                        ${{total}}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        npresupuesto:{
            type:Object,
            required: true
        }
    },
    data() {
        return {
            show: null
        }
    },
    created(){
        
    },
    methods:{
        precio(linea){
            var precio = linea.producto.precio.precioVenta
            if(this.npresupuesto.cliente.condicion_iva_id != 1){
                return linea.producto.precio.precioVenta 
                
            }else{
                return linea.producto.precio.precioVentaSinIva
            }
        },
        subtotal(linea){
            if(this.npresupuesto.cliente.condicion_iva_id != 1){
                linea.subtotal = parseInt(linea.cantidad) * linea.producto.precio.precioVenta
                return linea.subtotal.toFixed(2)
            }else{
                linea.subtotal = parseInt(linea.cantidad) * linea.producto.precio.precioVentaSinIva
                return linea.subtotal.toFixed(2)
            }
            
        },
        deleteLinea(index){
            this.npresupuesto.lineas.splice(index, 1);
            Vue.$toast.open({
                    message: 'Producto Borrado',
                    type: 'error',
                });
        },
    },
    computed: {
        total(){
            var aux = 0 
            if(this.npresupuesto.cliente.condicion_iva_id === 1){
                this.npresupuesto.lineas.forEach(linea => {
                    aux += parseInt(linea.cantidad) * linea.producto.precio.precioVentaSinIva
                });
                this.npresupuesto.total = aux 
                this.npresupuesto.total +=  this.npresupuesto.iva
                aux += this.npresupuesto.iva
            }else{
                this.npresupuesto.lineas.forEach(linea => {
                    aux += parseInt(linea.cantidad) * linea.producto.precio.precioVenta
                });
                this.npresupuesto.total = aux   
            }
            return aux.toFixed(2)
        },
        subTotal(){
            var aux = 0 
            this.npresupuesto.lineas.forEach(linea => {
               aux += parseInt(linea.cantidad) * linea.producto.precio.precioVentaSinIva
            });
            this.npresupuesto.subtotal = aux
            return aux.toFixed(2)
        },
        iva(){
            var aux = 0 
            this.npresupuesto.lineas.forEach(linea => {
               aux += parseInt(linea.cantidad) * (linea.producto.precio.precioVenta - (linea.producto.precio.precioVenta)/(1+(linea.producto.precio.iva/100)))
            });
            aux = aux * this.npresupuesto.formaDePago.coeficiente
            this.npresupuesto.iva = aux
            return aux.toFixed(2)
        },
        mostrar(){
            if(this.npresupuesto.id != null){
                this.show = true
            }else{
                this.show = false
            }
            return this.show
        }
    },
}
</script>

<style>
    .w-10 {
    width: 10% !important;
    }  
</style>