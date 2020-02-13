<template>
    <div>
        <h2><i class="fas fa-list-ul"></i> Listado de Presupuestos Cliente</h2>
        <div class="container mt-5">
            <div class="row" v-if="cliente.presupuestos">
                <div class="col-12">
                    <div class="alert alert-warning alert-block mt-3" v-if="cliente.presupuestos.length === 0">
                        <h4>Sin Presupuestos <i class="fas fa-exclamation-triangle"></i></h4>
                    </div>
                    <table class="table table-striped" v-if="cliente.presupuestos.length > 0">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Monto</th>
                                <th scope="col">Vendedor</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(presupuesto, index) in cliente.presupuestos" :key="index">
                                <th scope="row">{{presupuesto.created_at}}</th>
                                <td>{{presupuesto.total}}</td>
                                <td>
                                    {{presupuesto.vendedor.puesto}} - {{presupuesto.vendedor.nombre}}
                                </td>
                                <td>
                                    <div class="d-flex flex-row">
                                        <div>
                                            <router-link :to="{name:'detallePresupuesto', params:{id: presupuesto.id}}">
                                                <button  class="btn btn-warning btn-sm mr-1">
                                                    Ver Mas <i class="fas fa-eye"></i>
                                                </button>
                                            </router-link>
                                        </div>
                                        <div>
                                            <button class="btn btn-outline-primary btn-sm" @click="imprimirPrespuesto(presupuesto.id)">
                                                <i class="fas fa-print"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    created(){
        this.getCliente(this.id)
    },
    methods:{
        ...mapActions('clientes', ['getCliente']),
        ...mapActions('presupuestos', ['getPresupuestos', 'imprimirPrespuesto'])
    },
    computed:{
        ...mapState('clientes', ['cliente'])
    }
    
}
</script>