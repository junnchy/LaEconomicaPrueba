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
        chartData: this.$store.state.usuarios.datos,
        chartOptions: {
          chart: {
            title: 'Presupuestos La Economica',
            subtitle: 'Tipo, Cantidad',
          },
          pieHole: 0.4,
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
    ...mapState('usuarios', ['contadoresPresupuestos'])
  }
}
</script>