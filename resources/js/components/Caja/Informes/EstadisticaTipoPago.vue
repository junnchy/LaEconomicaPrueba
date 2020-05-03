<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <div class="row mt-2">
      <!-- <button class="btn-outline-primary" @click="fillData()">
        Actualizar
      </button> -->
    </div>
   {{charts}}
  </div>
</template>

<script>
  import LineChart from './BarChart.js'
import { mapState } from 'vuex'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: {}
      }
    },
    computed:{
      ...mapState('cajas', ['caja']),
      charts(){
        this.fillData()
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Ventas'],
          datasets: [
            { 
              label: 'Efectivo',
              backgroundColor: '#C0ECCB',
              data: [this.$store.state.cajas.caja.vEfectivo]
            },
            { 
              label: 'Tarjeta',
              backgroundColor: '#B4DAE3',
              data: [this.$store.state.cajas.caja.vTarjeta]
            },
            { 
              label: 'Cheques',
              backgroundColor: '#FFD84C',
              data: [this.getCheque()]
            },
            { 
              label: 'Ref',
              backgroundColor: '#F6A8A6',
              data: [0]
            },
          ]
        }
      },
      getCheque() {
        return this.$store.state.cajas.caja.vCheque
      }
    }
  }
</script>

<style>
  .small {
    max-width: 400px;
    margin:  50px auto;
  }
</style>

/* https://www.schemecolor.com/pastel-calm.php de aca se sacaron los colores */
