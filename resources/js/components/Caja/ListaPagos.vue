<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Importe</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pago, index) in pagos" :key="index">
                    <th scope="row">{{pago.created_at}}</th>
                    <td>{{pago.cuenta.cliente.nombre}}</td>
                    <td>${{pago.importe}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        pagos:{
            type: Object,
            required: true
        }
    }
}
</script>