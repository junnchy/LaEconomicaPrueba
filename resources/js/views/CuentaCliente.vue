<template>
    <div>
        <div class="row">
            <div class="col-4">
                <h2><i class="fas fa-file-invoice-dollar"></i> Cuenta Cliente</h2>
                <h5 class="mt-4">
                    {{cuentaCliente.cliente.nombre}}
                </h5>
            </div>
            <div class="col-4">
                
            </div>
            <div class="col-4">
                <div class="alert alert-primary p-3 border border-primary text-center" role="alert">
                    <p class="font-weight-bolder">
                        Saldo
                    </p>
                   <h3>${{cuentaCliente.saldo}}</h3>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">

            </div>
            <div class="col-2">

            </div>
            
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Tipo C.</th>
                            <th scope="col">Debe</th>
                            <th scope="col">Haber</th>
                            <th scope="col">Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(mov, index) in cuentaCliente.ventas" :key="index">
                            <th scope="row">{{mov.created_at.substring(0,11)}}</th>
                            <td>
                                <span class="badge badge-success">Venta</span>
                            </td>
                            <td class="text-danger">
                                ${{mov.total}}
                            </td>
                            <!-- <td>{{mov.fdp.descripcion}}</td> -->
                            <td class="text-success">

                            </td>
                            <td>
                                {{mov.saldo}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    created(){
        this.getCuentaCliente(this.id)
    },
    methods:{
        ...mapActions('cuentaCliente', ['getCuentaCliente'])
    },
    computed:{
        ...mapState('cuentaCliente', ['cuentaCliente'])
    }
}
</script>