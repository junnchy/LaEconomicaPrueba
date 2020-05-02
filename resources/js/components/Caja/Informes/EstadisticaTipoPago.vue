<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
   
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
        datacollection: {
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
              data: [this.$store.state.cajas.caja.vCheque]
            },
            { 
              label: 'Ref',
              backgroundColor: '#F6A8A6',
              data: [0]
            },
          ]
        }
      }
    },
    computed:{
      ...mapState('cajas', ['caja'])
    }
    /* mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    } */
  }
</script>

<style>
  .small {
    max-width: 400px;
    margin:  50px auto;
  }
</style>

/* https://www.schemecolor.com/pastel-calm.php de aca se sacaron los colores */
