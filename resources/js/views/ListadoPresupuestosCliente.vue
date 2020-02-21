<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-8">
                    <h2><i class="fas fa-list-ul"></i> Listado de Presupuestos Cliente</h2>
                </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text">Estado:</label>
                        </div>
                         <select class="form-control" v-model="searchEstado" type="number">
                            <option selected :value="null">Todos</option>
                            <option v-for="(estado, index) in estadosPresupuesto"
                                :key="index" :value="estado.id">
                                {{estado.nombre}}
                            </option>
                        </select>
                    </div>
                </div>
                
            </div>
            <div class="row mt-3" v-if="cliente.presupuestos">
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
                                <th scope="col">Estado</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(presupuesto, index) in filtered_presupuestos" :key="index">
                                <th scope="row">{{presupuesto.fecha_emision}}</th>
                                <td>{{presupuesto.total}}</td>
                                <td>
                                    {{presupuesto.vendedor.puesto}} - {{presupuesto.vendedor.nombre}}
                                </td>
                                <td>
                                    <span :class="presupuesto.estado.clase">{{presupuesto.estado.nombre}}</span>
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
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    created(){
        this.getCliente(this.id)
        this.getEstadosPresupuesto()
    },
    methods:{
        ...mapActions('clientes', ['getCliente']),
        ...mapActions('presupuestos', ['getPresupuestos', 'imprimirPrespuesto', 'getEstadosPresupuesto'])
    },
    computed:{
        ...mapState('presupuestos', ['estadosPresupuesto']),
        ...mapState('clientes', ['cliente']),
        ...mapGetters('clientes', ['filtered_presupuestos']),
        searchEstado:{
            get(){
                return this.$store.state.clientes.filterPresupuestos.estado;
            },
            set(val){
                this.$store.commit('clientes/SET_ESTADOPRES', val)
            }
        },
    }
    
}
</script>