<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Forma</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Importe</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pago, index) in pagos" :key="index">
                    <th scope="row">{{pago.created_at}}</th>
                    <td class="font-italic">{{pago.fdp.descripcion}}</td>
                    <td>{{pago.cuenta.cliente.nombre}}</td>
                    <td>${{pago.importe}}</td>
                    <td>
                       <router-link :to="{name:'detallePago', params:{id: pago.id}}">
                            <button class="btn btn-outline-primary btn-sm">
                                Ver <i class="fas fa-eye"></i>
                            </button>
                        </router-link>
                    </td>
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