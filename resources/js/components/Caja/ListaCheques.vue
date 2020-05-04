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
                    <td>{{cheque.cuenta.cliente.nombre}}</td>
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
export default {
    props:{
        cheques:{
            type: Object,
            required: true
        }
    }  
}
</script>