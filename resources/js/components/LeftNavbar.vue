<template>
    <div>
        <div class="left-sidebar js-pinned-leftsidebar ps-relative pt-5">
            <componente-fagregarcategoria class="mt-3" v-if="this.$store.state.actual === 1"/>
            <componente-filtroproductos class="mt-3" v-if="this.$store.state.actual === 2"/>
            <componente-LNBProducto class="mt-3" v-if="this.$store.state.actual === 3"/>
            <LeftNavbarVacio v-if="this.$store.state.actual === 0" />
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import LeftNavbarVacio from './LeftNavbarVacio';
export default {
    components: {
        LeftNavbarVacio
    },
    computed:{
        ...mapState(['actual']),
    }
}
</script>