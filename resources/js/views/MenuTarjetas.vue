<template>
    <div class="container">
        <div class="row">
            <h2><i class="far fa-credit-card"></i> Tarjetas </h2>
        </div>
        <div class="row">
            <div class="col-9">
                    
            </div>
            <div class="col-3">
                <maddtarjeta/>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ic</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(tarjeta, index) in tarjetas" :key="index">
                            <th scope="row">{{tarjeta.id}}</th>
                            <td><h1 v-html="tarjeta.icono"></h1></td>
                            <td>{{tarjeta.nombre}}</td>
                            <td v-if="tarjeta.estado === 1"><p class="text-success"><i class="fas fa-check-circle"></i></p></td>
                            <td v-if="tarjeta.estado === 0"><p class="text-danger"><i class="fas fa-exclamation-circle"></i></p></td>
                            <td>
                                <button class="btn btn-outline-primary btn-sm">
                                    Ver mas <i class="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import maddtarjeta from '../components/ModalAgregarTarjeta'
export default {
    created(){
        this.getTarjetas()
    },
    components:{
        maddtarjeta
    },
    methods: {
        ...mapActions('tarjetas', ['getTarjetas'])
    },
    computed: {
        ...mapState('tarjetas', ['tarjetas'])
    },
    
}
</script>
