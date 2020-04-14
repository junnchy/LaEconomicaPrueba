<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Precio Base</th>
                    <th scope="col">Descuentos</th>
                    <th scope="col">Flete</th>
                    <th scope="col">Iva</th>
                    <th scope="col">Precio Costo</th>
                    <th scope="col">Rentabilidad</th>
                    <th scope="col">Precio Venta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dato, index) in datos" :key="index">
                    <th scope="row">
                        {{dato.created_at}}
                        <span class="badge badge-success" v-if="index === 0">Actual</span>
                    </th>
                    <td>{{dato.precioBase}}</td>
                    <td>[{{dato.descuentoProducto_1}}, {{dato.descuentoProducto_2}},  
                        {{dato.descuentoProducto_3}}, {{dato.descuentoProducto_4}}, 
                        {{dato.descuentoProducto_5}}]</td>
                    <td>{{dato.flete}}</td>
                    <td>{{dato.iva}}</td>
                    <td>{{dato.precioCosto}}</td>
                    <td>{{dato.rentabilidad}}</td>
                    <td>{{dato.precioVenta}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:{
        datos:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    .modal-lg {
        max-width: 80% !important;
    }
</style>