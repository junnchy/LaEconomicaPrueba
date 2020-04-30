<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Numero Cupon</th>
                <th scope="col">Cliente</th>
                <th scope="col">Importe</th>
                <th scope="col">Cuotas</th>
                <th scope="col">Tajeta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cupon, index) in cupones" :key="index">
                    <th scope="row">{{cupon.created_at}}</th>
                    <td>{{cupon.nro_cupon}}</td>
                    <td>{{cupon.pago.cuenta.cliente.nombre}}</td>
                    <td>${{cupon.importe}}</td>
                    <td>{{cupon.cuotas}}</td>
                    <td data-toggle="tooltip" :title="cupon.tarjeta.nombre">
                        <h3 class="text-primary" v-html="cupon.tarjeta.icono"></h3>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        cupones:{
            type: Array,
            required: true
        }
    }
}
</script>