<template>
    <div>
        <h2><i class="fas fa-list-ul"></i> Listado de Presupuestos</h2>
        <div class="container mt-3 border border-rounded p-3">
            <div class="row">
                <div class="col-6">
                    <date-picker v-model="search" type="date" range placeholder="Filtrar por Fecha"></date-picker>
                </div>
                <div class="col-6">
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
        </div>
        <div class="container mt-3">
            <div class="row">
                <div class="col-12">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Monto</th>
                                <th scope="col">Vendedor</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(presupuesto, index) in filtered_presupuestos" :key="index">
                                <th scope="row">{{presupuesto.fecha_emision}}</th>
                                <th>{{presupuesto.cliente.nombre}}</th>
                                <td>${{presupuesto.total}}</td>
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
                    <Paginacion v-bind:filtered="filtered_presupuestos" v-bind:nro_filas="10"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import Paginacion from '../components/Paginacion'

export default {
    components:{
        DatePicker, 
        Paginacion
    },
    data() {
        return {
            estado:''
        }
    },
    created(){
        this.getPresupuestos()
        this.getEstadosPresupuesto()
        this.$store.commit('setArregloPaginado', this.filtered_presupuestos)
    },
    methods:{
      ...mapActions('presupuestos', ['getPresupuestos', 'imprimirPrespuesto', 'getEstadosPresupuesto'])
    },
    computed:{
        ...mapState('presupuestos', ['presupuestos', 'estadosPresupuesto']),
        ...mapGetters('presupuestos', ['filtered_presupuestos']),
        ...mapState(['arregloPaginado']),
        search:{
            get(){
                return this.$store.state.presupuestos.filter.dates;
            },
            set(val){
                this.$store.commit('presupuestos/SET_DATE', val)
            }
        },
        searchEstado:{
            get(){
                return this.$store.state.presupuestos.filter.estado;
            },
            set(val){
                this.$store.commit('presupuestos/SET_ESTADO', val)
            }
        },
    },
    mutations:{
        ...mapMutations(['setArregloPaginado']),
    }
    
}
</script>