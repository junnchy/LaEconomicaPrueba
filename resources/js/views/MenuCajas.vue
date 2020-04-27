<template>
    <div class="container">
        <div class="row">
            <h2>Menu Cajas</h2>
        </div>
        
        <div class="container shadow-sm mt-3 p-3 bg-white rounded border border-secondary">
            <div class="row">
                <div class="col-12">
                    <button class="btn btn-outline-success" @click="agregarCaja(ncaja)">
                        Nueva Caja <i class="fas fa-wallet"></i>
                    </button> 
                    <router-link :to="{name:'menuBancos'}">
                        <button class="btn btn-outline-primary">
                            Bancos <i class="fas fa-university"></i>
                        </button> 
                    </router-link> 
                    <router-link :to="{name:'menuTarjetas'}">
                        <button class="btn btn-outline-primary">
                            Tarjetas <i class="far fa-credit-card"></i>
                        </button> 
                    </router-link> 
                </div>
            </div>
        </div>
        <div class="card-deck mt-4">
            <div class="card border-primary" v-for="(caja, index) in cajas" :key="index">
                <div class="card-body text-primary">
                    <h5 class="card-title"><i class="fas fa-cash-register"></i> Caja N: {{caja.id}} </h5>
                    <hr>
                    <p>Monto en Pesos: <strong>${{caja.pesos}}</strong></p>
                    <p>Monto en Dolares: <strong>${{caja.dolares}}</strong></p>
                </div>
                 <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>  


    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            ncaja:{
                id:null
            }
        }
    },
    created(){
        this.getCajas()
    },
    methods: {
        ...mapActions('cajas', ['getCajas', 'agregarCaja'])
    },
    computed:{
        ...mapState('cajas', ['cajas'])
    }
    
}
</script>