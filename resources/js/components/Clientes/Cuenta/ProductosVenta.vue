<template>
    <div>
        <div class="card text-center">
            <div class="card-header">
                <h4>Productos</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12 ">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Img</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(linea, index) in lineas" :key="index">
                                    <th><img :src="linea.producto.imagen" width="50px" class="border border-secondary"></th>
                                    <th scope="row">{{linea.producto.nombre}}</th>
                                    <td>{{linea.precio}}</td>
                                    <td>{{linea.cantidad}}</td>
                                    <td>{{linea.total_linea}}</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <td></td>
                                    <td></td>
                                    <td scope="row"><strong>{{totalVenta}}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        lineas:{
            type: Array
        },
        totalVenta:{
            type:Number
        }
    }
    
}
</script>