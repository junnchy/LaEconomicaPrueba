<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h2>Menu Cheques</h2>
            </div>
        </div>
        <div class="row mt-4 border border-secondary rounded p-3">
            <div class="col-1">
                <h2><i class="fas fa-filter"></i></h2>
            </div>
            <div class="col-4">
                <date-picker v-model="fechas" type="date" range @clear='(clear)=>{fechas=null}' placeholder="Filtrar por Fecha"></date-picker>

            </div>
            <div class="col-4 border-right">
                <div class="row">
                    <div class="col-12">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="i" v-model="filter.tipof">
                            <label class="form-check-label" for="inlineRadio1">F Ingreso</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="e" v-model="filter.tipof">
                            <label class="form-check-label" for="inlineRadio2">F Emsison</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="p" v-model="filter.tipof">
                            <label class="form-check-label" for="inlineRadio3">F Pago</label>
                        </div> 
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <nuevoCheque/>
                    </div>
                </div>    
            </div>
            <div class="col-2">
                <label>
                    Estado
                </label> 
                <select class="form-control" v-model="echeq">
                    <option selected :value="null">Todos</option>
                    <option :value="0">En cartera </option>
                    <option :value="1">Entregados </option>
                </select>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <cheques v-bind:cheques="filtered_cheques"/>
            </div>
        </div>
        {{tomar}}
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import cheques from '../../../components/Caja/ListaCheques'
import nuevoCheque from '../../../components/Caja/Cheques/ModalCargaChequePropio'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/Es'
export default {
    data() {
        return {
            fechas: null,
            filter:{
                tipof: null,
                fechas: null
            }     
        }
    },
    components:{
        cheques,
        nuevoCheque,
        DatePicker
    },
    created(){
        this.getCheques(this.filter)
    },
    methods:{
        ...mapActions('cheques', ['getCheques'])
    },
    computed:{
        ...mapState('cheques', ['cheques']),
        ...mapGetters('cheques', ['filtered_cheques']),
        tomar(){
            if (this.fechas != null) {
                var aux = []
                this.fechas.forEach(date => {
                    let mm = date.getMonth() + 1
                    if(parseInt(mm) < 10){
                        mm = '0' + mm
                    }
                    let dd = date.getDate()
                    if(parseInt(dd) < 10){
                        dd = '0' + dd
                    }
                    let yyyy = date.getFullYear()
                    let d = (yyyy+','+mm+','+dd);
                    
                    aux.push(d)
                })
                this.filter.fechas = aux
                this.getCheques(this.filter)
            }else(
                this.filter.fechas = null,
                this.getCheques(this.filter)
            )
        },
        echeq:{
            get(){
                return this.$store.state.cheques.filter.estado;
            },
            set(val){
                this.$store.commit('cheques/SET_ESTADO', val)
            }
        }
    }
}
</script>