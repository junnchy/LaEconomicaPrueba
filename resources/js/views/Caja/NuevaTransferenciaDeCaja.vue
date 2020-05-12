<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h2>Transferencia</h2> 
            </div>
        </div>
        <div class="alert alert-success alert-dismissible fade show" v-if="status === 200">
            {{message}} 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <datos v-bind:ntransferencia="ntransferencia"/>
        <div class="row mt-3">
            <div class="col-12">
                <button type="button" class="btn btn-outline-success btn-block" @click="cargarTranferencia(ntransferencia)">
                    Transferir
                </button>
            </div>
            {{ce}}
        </div>
    </div>
</template>

<script>
import datos from '../../components/Caja/Transferencias/DatosTransferencias'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        datos
    },
     data() {
        return {
            id: this.$route.params.id,
            ntransferencia:{
                caja_emisora: this.$route.params.id,
                caja_receptora: null,
                pesos: 0,
                dolares: 0,
                concepto: '', 
            }
        }
    },
    /* created(){
      this.ntransferencia.caja_emisora = this.id
    }, */
    methods:{
        ...mapActions('transferenciasCaja',['cargarTranferencia'])
        
    },
    computed:{
        ...mapState('transferenciasCaja', ['status', 'message']),
        ce(){
            this.ntransferencia.id = this.id
        }
    }
    
}
</script>