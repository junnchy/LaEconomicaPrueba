<template>
    <div class="col-12 text-center">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col" class="w-10">Cantidad</th>
                    <th scope="col">Precio unidad</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(linea, index) in npresupuesto.lineas" :key="index">
                    <th scope="row">{{linea.producto.id}}</th>
                    <td>{{linea.producto.nombre}}</td>
                    <td class="w-10">
                        <input type="numer" class="form-control" v-model="linea.cantidad">
                    </td>
                    <td>{{linea.producto.precioVenta}}</td>
                    <td>{{subtotal(linea)}}</td>
                    <td>
                        <button class="btn btn-outline-danger border-0" @click="deleteLinea(index)">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">{{total}}</th>
                    <th scope="col"></th>
                </tr>
            </tbody>
        </table>
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
            return linea.subtotal
        },
        deleteLinea(index){
            this.npresupuesto.lineas.splice(index, 1);
        }
    },
    computed: {
        total(){
            var aux = 0 
            this.npresupuesto.lineas.forEach(linea => {
               aux += parseInt(linea.cantidad) * linea.producto.precioVenta
            });
            return aux
        }
    },
}
</script>

<style>
    .w-10 {
    width: 10% !important;
    }  
</style>