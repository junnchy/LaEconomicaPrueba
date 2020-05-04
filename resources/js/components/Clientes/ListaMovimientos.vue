<template>
    <div>
         <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Tipo C.</th>
                    <th scope="col">Debe</th>
                    <th scope="col">Haber</th>
                    <th scope="col">Saldo</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(movimiento, index) in movimientos" :key="index">
                    <th scope="row">{{movimiento.created_at}}</th>
                    <td>
                        <span class="badge badge-primary" v-if="movimiento.tipo === 'Venta'">{{movimiento.tipo}}</span>
                        <span class="badge badge-success" v-if="movimiento.tipo === 'Pago'">{{movimiento.tipo}}</span>
                    </td>
                    <td class="text-danger">
                        <p v-if="movimiento.tipo === 'Venta'">${{movimiento.total}}</p>
                    </td>
                    <!-- <td>{{mov.fdp.descripcion}}</td> -->
                    <td class="text-success">
                        <p v-if="movimiento.tipo === 'Pago'">${{movimiento.importe}}</p>
                    </td>
                    <td>
                        <p v-if="movimiento.tipo === 'Venta'">${{movimiento.saldo}}</p>
                    </td>
                    <td v-if="movimiento.tipo === 'Venta'">
                        <router-link :to="{name:'detalleVenta', params:{id: movimiento.id}}">
                            <button class="btn btn-outline-primary btn-sm" >
                                Ver <i class="fas fa-eye"></i>
                            </button>
                        </router-link>
                    </td>
                    <td v-if="movimiento.tipo === 'Pago'">
                        <router-link :to="{name:'detallePago', params:{id: movimiento.id}}">
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
        movimientos:{
            type: Object,
            required: true
        }
    },
}
</script>