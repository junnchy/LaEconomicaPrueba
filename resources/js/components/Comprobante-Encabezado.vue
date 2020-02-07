<template>
    <div>
        <div class="container border border-dark rounded">
            <div class="row my-3">
                <div class="col-9">
                    <div class="row">
                        <div class="col-6">
                            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">  
                                <form class="px-4 py-2">
                                    <input class="form-control mt-3" type="search" :placeholder="place" aria-label="Search" v-model="search">
                                </form>
                                <option v-for="(cliente, index) in filtered_clientes" :key="index">{{cliente.nombre}}</option>
                            </select>

                            <div id="myDropdown" class="dropdown-content">
                                <input class="form-control mt-3" type="search" :placeholder="place" aria-label="Search" v-model="search">
                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option v-for="(cliente, index) in filtered_clientes" :key="index">{{cliente.nombre}}</option>
                                </select>
                            </div>
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
        }
    },
    created(){
        this.getClientes()
        this.getDatos()
    },
    methods:{
        ...mapActions('datos', ['getDatos']),
        ...mapActions('clientes', ['getClientes'])
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