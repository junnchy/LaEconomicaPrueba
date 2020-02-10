<template>
    <div>
        <div class="left-sidebar js-pinned-leftsidebar ps-relative pt-5">
            <componente-fagregarcategoria class="mt-3" v-if="this.$store.state.actual === 1"/>
            <componente-filtroproductos class="mt-3" v-if="this.$store.state.actual === 2"/>
            <componente-LNBAddCliente class="mt-3" v-if="this.$store.state.actual === 3"/>
            <LNBMenuClientes class="mt-3" v-if="this.$store.state.actual === 4"/>
            <LNBcomprobantes class="mt-3" v-if="this.$store.state.actual === 5"/>
            <LeftNavbarVacio v-if="this.$store.state.actual === 0" />
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import LeftNavbarVacio from './LeftNavbarVacio';
import LNBMenuClientes from './LNBMenuClientes'
import LNBcomprobantes from './LNB-Comprobantes'
export default {
    name:'barraLateral',
    components: {
        LeftNavbarVacio,
        LNBMenuClientes,
        LNBcomprobantes
    },
    computed:{
        ...mapState(['actual']),
    }
}
</script>