<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Fecha Ingreso</th>
                    <th scope="col">C. Emisora</th>
                    <th scope="col">C. Receptora</th>
                    <th scope="col">Pesos</th>
                    <th scope="col">Dolares</th>
                    <th scope="col">Concepto</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(transferencia, index) in transferencias" :key="index">
                    <th scope="row">{{transferencia.created_at}}</th>
                    <td>{{transferencia.caja_emisora}}</td>
                    <td>{{transferencia.caja_receptora}}</td>
                    <td>${{transferencia.pesos}}</td>
                    <td>u$d{{transferencia.dolares}}</td>
                    <td>{{transferencia.concepto}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:{
        transferencias:{
            type: Array
        }
    }
}
</script>