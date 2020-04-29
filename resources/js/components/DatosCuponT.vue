<template>
    <div>
         <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label class="typo__label">Tarjeta:</label>
                    <multiselect v-model="tarjeta" deselect-label="Can't remove this value" track-by="nombre" label="nombre" placeholder="Select one" :options="tarjetas" :searchable="false" :allow-empty="false">
                        <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.nombre }}</strong></template>
                    </multiselect>
                </div>
            </div>
         </div>
         <div class="row mt-2">
            <div class="col-6">
                <label>Cantidad de cuotas</label>
                    <input 
                        type="number" 
                        class="form-control"
                        name="nr_cupon" 
                        placeholder="Cuotas"
                        v-model="ncupon.cuotas"
                    />
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6">
                <div class="form-group">
                    <label>Numero Cupon</label>
                    <input 
                        type="number" 
                        class="form-control"
                        name="nr_cupon" 
                        placeholder="Numero"
                        v-model="ncupon.nro_cupon"
                    />
                </div>
            </div>
            <div class="col-6">
                <label>Importe Cupon</label>
                    <input 
                        type="number" 
                        class="form-control"
                        name="nr_cupon" 
                        placeholder="Importe"
                        step="0.01"
                        v-model="ncupon.importe"
                    />
            </div>
        </div>
        {{defTarjeta}}
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Multiselect from 'vue-multiselect';
export default {
    components:{Multiselect},
    data() {
        return {
            tarjeta: null
        }
    },
    props:{
        ncupon:{
            type: Object,
            required: true
        }
    },
    created(){
        this.getTarjetas()
    },
    destroyed(){
        this.tarjeta = null
    },
    computed:{
        ...mapState('tarjetas', ['tarjetas']),
        defTarjeta(){
            if(this.tarjeta != null){
                this.ncupon.tarjeta_id = this.tarjeta.id
            }
        }
    },
    methods:{
        ...mapActions('tarjetas',['getTarjetas']),
    }
    
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>