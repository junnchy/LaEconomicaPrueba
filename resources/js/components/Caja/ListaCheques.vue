<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Fecha Ingreso</th>
                    <th scope="col">Numero Cheque</th>
                    <th scope="col">Librador</th>
                    <th scope="col">Estado</th>
                    <th scope="col">F. Emsison</th>
                    <th scope="col">F. Pago</th>
                    <th scope="col">Importe</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cheque, index) in cheques" :key="index">
                    <th scope="row">{{cheque.created_at}}</th>
                    <td>{{cheque.nro_cheque}}</td>
                    <td v-if="cheque.librador_id != null">{{cheque.cuenta.cliente.nombre}}</td>
                    <td v-if="cheque.librador_id === null">{{datos.razon_social}}</td>
                    <td>
                        <span class="badge badge-success" v-if="cheque.destinatario_id == null">En cartera</span>
                        <span class="badge badge-primary" v-if="cheque.destinatario_id != null">Entregado</span>
                    </td>
                    <td>{{cheque.fecha_emision}}</td>
                    <td>{{cheque.fecha_pago}}</td>
                    <td>${{cheque.importe}}</td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm">
                            Ver
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    props:{
        cheques:{
            type: Array,
            required: true
        }
    },
    computed:{
        ...mapState('datos', ['datos'])
    },
    methods:{
        ...mapActions('datos', ['getDatos'])
    }  
}
</script>