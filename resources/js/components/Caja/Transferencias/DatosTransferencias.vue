<template>
    <div class="container border border-secondary p-3 rounded">
        <div class="row mt-3">
            <div class="col-6">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Caja Emisora</span>
                    </div>
                    <input type="numer" class="form-control" v-model="ntransferencia.caja_emisora" aria-describedby="inputGroupPrepend" disabled>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Caja Receptora</span>
                    </div>
                     <v-select
                        label="id"
                        @input="setCajaReceptora"
                        :options="cajas"
                        maxHeight="200px"
                        placeholder="Caja Receptora"
                    ></v-select>
                </div>
                
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-6">
                <label for="pesos">Pesos a Transferir</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="numer" step="0.01" class="form-control" id="pesos" v-model="ntransferencia.pesos">
                </div>
            </div>
            <div class="col-6">
                <label>Dolares a Transferir</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">usd</span>
                    </div>
                    <input type="numer" step="0.01" class="form-control" v-model="ntransferencia.dolares">
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <div class="form-group">
                    <label for="conceptoT">Concepto de Transferencia</label>
                    <textarea class="form-control" id="conceptoT" rows="2" v-model="ntransferencia.concepto"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    props:{
        ntransferencia:{
            type: Object,
            required: true
        }
    },
    created(){
        this.getCajas()
    },
    methods:{
        ...mapActions('cajas', ['getCajas']),
        setCajaReceptora(val){
            this.ntransferencia.caja_receptora = val.id
        }

    },
    computed:{
        ...mapState('cajas', ['cajas'])
    }
}
</script>