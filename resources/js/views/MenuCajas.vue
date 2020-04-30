<template>
    <div class="container p-3">
        <div class="row">
            <div class="col-12 text-center ">
                <h2>Menu Cajas <i class="fas fa-cash-register"></i></h2>
            </div>
        </div>
        <div class="container shadow-sm mt-3 p-3 bg-white rounded border border-secondary">
            <div class="row">
                <div class="col-12">
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
                     <button class="btn btn-outline-success" @click="agregarCaja(ncaja)">
                        Nueva Caja <i class="fas fa-plus-circle"></i>
                    </button>  
                </div>
            </div>
        </div>
        <div class="card-deck mt-4">
            <div class="card border-primary" v-for="(caja, index) in cajas" :key="index">
                <div class="card-body text-primary">
                    <div class="row">
                        <div class="col-8">
                            <h5 class="card-title">
                                <i class="fas fa-cash-register"></i> Caja N: {{caja.id}} 
                            </h5>
                        </div>
                    </div>
                    <hr>
                    <ul>
                        <li>
                            <p>Efectivo en Pesos: <strong>${{caja.pesos}}</strong></p>
                        </li>
                        <li>
                            <p>Cobros en Pesos: <strong>${{caja.vEfectivo}}</strong></p>
                        </li>
                        <li>
                            <p>Cobros en Dolares: <strong>${{caja.dolares}}</strong></p>
                        </li>
                        <li>
                             <p>Cobros en Tarjetas: <strong>${{caja.vTarjeta}}</strong></p> 
                        </li>
                        <li>
                            <p>Transferecias: <strong>$0</strong></p>
                        </li>
                    </ul>
                    
                </div>
                 <div class="card-footer">
                    <div class="row">
                        <div class="col-8">
                            <div class="alert alert-success border border-success" role="alert">
                                Cobros Totales <strong>${{caja.vTotales}}</strong> 
                            </div>
                        </div>
                        <div class="col-4 mt-2">
                            <router-link :to="{name: 'detalleCaja', params:{id:caja.id}}">
                                <button class="btn btn-outline-primary btn-sm">
                                    Ver Detalles <i class="far fa-eye"></i>
                                </button>
                            </router-link>
                        </div>
                    </div>
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
        this.getCajas(null)
    },
    methods: {
        ...mapActions('cajas', ['getCajas', 'agregarCaja'])
    },
    computed:{
        ...mapState('cajas', ['cajas'])
    }
    
}
</script>