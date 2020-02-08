<template>
    <div class="row my-3">
        <div class="col-3">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="puesto">N Puesto</span>
                </div>
                <input type="text" v-model="vendedorActual.puesto" disabled
                class="form-control" aria-label="puesto" aria-describedby="puesto">   
            </div>
        </div>
        <div class="col-5">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="name">Vendedor</span>
                </div>
                <input type="text" v-model="vendedorActual.nombre" disabled
                class="form-control" aria-label="name" aria-describedby="name">   
            </div>
        </div>
        <div class="col-4">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inicioAct">Fecha</span>
                </div>
                <date-picker 
                v-model="npresupuesto.fecha"
                format="DD-MM-YYYY"
                type="date"
                >
                </date-picker>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    components: { 
        DatePicker,
    },
    props:{
        npresupuesto:{
            type:Object,
            required: true
        }
    },
    created(){
        this.getVendedorActual(this.$userId)
        this.npresupuesto.vendedor_id = this.$userId
    },
    methods:{
        ...mapActions('usuarios', ['getVendedorActual']),
    },
    computed:{
        ...mapState('usuarios', ['vendedorActual']),
    }
}
</script>