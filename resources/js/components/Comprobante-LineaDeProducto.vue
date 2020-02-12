<template>
    <div class="col-12 text-center">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Disponibles</th>
                    <th scope="col" class="w-10">Cantidad</th>
                    <th scope="col">Precio unidad</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(linea, index) in npresupuesto.lineas" :key="index">
                    <th scope="row">{{linea.producto.id}}</th>
                    <td>{{linea.producto.nombre}}</td>
                    <td>{{linea.producto.ficha_stock.cantidadActual}}</td>
                    <td class="w-10">
                        <input type="numer" class="form-control" v-model="linea.cantidad">
                    </td>
                    <td>${{linea.producto.precioVenta}}</td>
                    <td>${{subtotal(linea)}}</td>
                    <td>
                        <button class="btn btn-outline-danger border-0" @click="deleteLinea(index)">
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
            <div class="col-3 ">
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
    methods:{
        subtotal(linea){
            linea.subtotal = parseInt(linea.cantidad) * linea.producto.precioVenta
            return linea.subtotal.toFixed(2)
        },
        deleteLinea(index){
            this.npresupuesto.lineas.splice(index, 1);
            Vue.$toast.open({
                    message: 'Producto Borrado',
                    type: 'error',
                });
        }
    },
    computed: {
        total(){
            var aux = 0 
            this.npresupuesto.lineas.forEach(linea => {
               aux += parseInt(linea.cantidad) * linea.producto.precioVenta
            });
            this.npresupuesto.total = aux
            return aux.toFixed(2)
        }
    },
}
</script>

<style>
    .w-10 {
    width: 10% !important;
    }  
</style>