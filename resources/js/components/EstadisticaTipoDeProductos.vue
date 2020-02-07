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
export default {
     data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Tipo', 'Cantidad'],
        ['Materiales', 1000],
        ['Sanitarios', 170],
        ['Ceramicos', 660],
        ['Ferreteria', 1030]
      ],
      chartOptions: {
        chart: {
          title: 'Productos La Economica',
          subtitle: 'Tipo, Cantidad',
        }
      }
    }
  }
}
</script>