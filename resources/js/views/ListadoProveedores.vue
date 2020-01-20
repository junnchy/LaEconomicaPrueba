<template>
    <div>
        <h1>Proveedores</h1>
        <form class="my-4">     
            <div class="row mt-3">
                <div class="col-8">
                    <input class="form-control mr-sm-2 form-block" type="search" placeholder="Buscar" aria-label="Search" v-model="search">
                </div>
                <div class="col-4">
                    <router-link :to="{name: 'agregarProv'}">
                        <button class="btn btn-outline-success btn-block">
                            Agregar Proveedor
                        </button>
                    </router-link>
                </div>
            </div>
        </form>
        <ListaProveedores/>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import ListaProveedores from '../components/ListaProveedores';
export default {
    name: 'ListadoProveedores', 
    data() {
        return {
        }
    },
    components:{
        ListaProveedores,
    },
    computed: {
        search:{
            get(){
                return this.$store.state.proveedores.filter.query;
            },
            set(val){
                this.$store.commit('proveedores/SET_QUERY', val)
            }
        },
    }
}
</script>