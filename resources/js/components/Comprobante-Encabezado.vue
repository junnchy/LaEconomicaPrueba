<template>
    <div>
        <div class="container border border-dark rounded">
            <div class="row my-3">
                <div class="col-9">
                    <div class="row">
                        <div class="col-6">
                            <v-select 
                                label="nombre"
                                @input="setCliente"
                                :options="clientes"
                                :value="npresupuesto.cliente"
                            ></v-select>
                        </div>
                        <div class="col-6">
                            <label>Razon Social</label>
                            <input type="text" class="form-control" disabled :placeholder="datos.razon_social">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-6">
                            <label>Cuit</label>
                            <input type="text" class="form-control" disabled :placeholder="datos.cuit">
                        </div>
                        <div class="col-6">
                            <label>Ig. Brutos</label>
                            <input type="text" class="form-control" disabled :placeholder="datos.nroIgBrutos">
                        </div>
                    </div>
                </div>
                <div class="col-3 mt-3">
                    <img :src="datos.logo" class="img-thumbnail" width="200px">
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
            place: 'Cliente',
            cliente: null
        }
    },
    props:{
        npresupuesto:{
            type:Object,
            required: true
        }
    },
    created(){
        this.getClientes()
        this.getDatos()
    },
    methods:{
        ...mapActions('datos', ['getDatos']),
        ...mapActions('clientes', ['getClientes']),
        setCliente(val){
            this.npresupuesto.cliente = val
        }
    },
    computed:{
        ...mapState('datos', ['datos']),
        ...mapState('clientes', ['clientes']),
        ...mapGetters('clientes', ['filtered_clientes']),
        search:{
            get(){
                return this.$store.state.clientes.filter.query;
            },
            set(val){
                this.$store.commit('clientes/SET_QUERY', val)
            }
        },
    }
}
</script>