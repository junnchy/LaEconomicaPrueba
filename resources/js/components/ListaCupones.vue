<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Cliente</th>
                <th scope="col">Importe</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cupon, index) in cupones" :key="index">
                    <th scope="row">{{cupon.id}}</th>
                    <td></td>
                    <td>${{cupon.importe}}</td>
                    <td></td>
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