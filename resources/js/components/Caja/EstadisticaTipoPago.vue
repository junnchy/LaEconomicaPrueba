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
              backgroundColor: '#6BC8A3',
              data: [this.$store.state.cajas.caja.vEfectivo]
            },
            { 
              label: 'Tarjeta',
              backgroundColor: '#FF8B60',
              data: [this.$store.state.cajas.caja.vTarjeta]
            },
            { 
              label: 'Cheques',
              backgroundColor: '#FFD84C',
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

/* https://www.w3schools.com/colors/colors_trends.asp de aca se sacaron los colores */
/* https://www.schemecolor.com/pastel-color-tones.php */