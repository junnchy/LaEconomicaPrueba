<template>
    <div>
         <div class="card text-center">
            <div class="card-header">
                <h4>Pagos</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12 ">
                       <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Forma</th>
                                    <th scope="col">Caja</th>
                                    <th scope="col">Importe</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(pago, index) in pagos" :key="index">
                                    <th scope="row">{{pago.created_at}}</th>
                                    <td>
                                        <p class="text-italic" v-if="pago.pesos > 0">Efectivo</p>
                                        <p class="text-italic" v-if="pago.cupones.length > 0">Tarjeta</p>
                                        <p class="text-italic" v-if="pago.pesos.length > 0">Cheque</p>
                                    </td>
                                    <td>{{pago.caja_id}}</td>
                                    <td>{{pago.importe}}</td>
                                    <td>
                                        <router-link :to="{name:'detallePago', params:{id: pago.id}}">
                                            <button class="btn btn-outline-primary btn-sm">
                                                Ver Mas
                                            </button>
                                        </router-link>
                                    </td>
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
        pagos:{
            type:Array
        }
    }
}
</script>