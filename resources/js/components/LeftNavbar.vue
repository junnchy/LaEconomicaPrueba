<template>
    <div>
        <div class="left-sidebar js-pinned-leftsidebar ps-relative pt-5">
            <componente-fagregarcategoria class="mt-3" v-if="this.$store.state.actual === 1"/>
            <componente-filtroproductos class="mt-3" v-if="this.$store.state.actual === 2"/>
            <componente-LNBAddCliente class="mt-3" v-if="this.$store.state.actual === 3"/>
            <LNBMenuClientes class="mt-3" v-if="this.$store.state.actual === 4"/>
            <LeftNavbarVacio v-if="this.$store.state.actual === 0" />
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import LeftNavbarVacio from './LeftNavbarVacio';
import LNBMenuClientes from './LNBMenuClientes'

export default {
    components: {
        LeftNavbarVacio,
        LNBMenuClientes
    },
    computed:{
        ...mapState(['actual']),
    }
}
</script>