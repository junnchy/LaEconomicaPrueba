<template>
    <div>
        <GChart
            type="PieChart"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data (){
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        enEspera: 2,
        chartData: [
            ['Tipo', 'Cantidad'],
            ['Efectivo', this.$store.state.cajas.caja.vEfectivo],
            ['Tajeta', this.$store.state.cajas.caja.vTarjeta],
            ['Cheque', 0]
        ],
        chartOptions: {
          chart: {
            title: 'Ventas por Medio de Pago',
            subtitle: 'Tipo, Cantidad',
          },
          slices: {
            0: { color: '#3366CC' },
            1: { color: '#109618' },
            2: { color: '#DC3912' },
            3: { color: '#FF9900' },
          }
        }
      }
    },
  created(){
  },
  computed:{
    ...mapState('cajas', ['caja'])
  }
}
</script>