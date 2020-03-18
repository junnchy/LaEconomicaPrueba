<template>
    <div class="mt-3">
        <div class="left-sidebar js-pinned-leftsidebar ps-relative pt-5">
            <componente-fagregarcategoria v-if="this.$store.state.actual === 1"/>
            <componente-filtroproductos v-if="this.$store.state.actual === 2"/>
            <componente-LNBAddCliente v-if="this.$store.state.actual === 3"/>
            <LNBMenuClientes v-if="this.$store.state.actual === 4"/>
            <LNBcomprobantes v-if="this.$store.state.actual === 5"/>
            <LNBMenuComercial v-if="this.$store.state.actual === 6"/>
            <LeftNavbarVacio v-if="this.$store.state.actual === 0" />
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import LeftNavbarVacio from './LeftNavbarVacio'
import LNBMenuClientes from './LNBMenuClientes'
import LNBcomprobantes from './LNB-Comprobantes'
import LNBMenuComercial from './LNBMenuComercial'
export default {
    name:'barraLateral',
    components: {
        LeftNavbarVacio,
        LNBMenuClientes,
        LNBcomprobantes, 
        LNBMenuComercial
    },
    computed:{
        ...mapState(['actual']),
    }
}
</script>