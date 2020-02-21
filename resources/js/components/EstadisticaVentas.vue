<template>
    <div>
        <GChart
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
     data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Año', 'Ventas', 'Gastos'],
        ['2017', 1000, 400],
        ['2018', 1170, 460],
        ['2019', 660, 1120],
        ['2020', 1030, 700]
      ],
      chartOptions: {
        chart: {
          title: 'Performance La Economica',
          subtitle: 'Ventas, Gastos: 2017-2020',
        }
      }
    }
  },
}
</script>