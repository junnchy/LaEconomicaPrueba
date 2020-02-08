<template>
    <div>
        <GChart
            type="LineChart"
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
        ['Day', 'Guardians of the Galaxy', 'The Avengers', 'Transformers: Age of Extinction'],
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 80.5, 32.4],
        [3,  25.4,   87, 25.7],
        [4,  11.7, 88.8, 10.5],
        [5,  11.9, 97.6, 10.4],
        [6,   8.8, 93.6,  7.7],
        [7,   7.6, 72.3,  9.6],
        [8,  12.3, 89.2, 10.6],
        [9,  16.9, 92.9, 14.8],
        [10, 12.8, 70.9, 11.6],
        [11,  5.3,  45.9,  4.7],
        [12,  6.6,  38.4,  5.2],
        [13,  4.8,  76.3,  3.6],
        [14,  4.2,  36.2,  3.4]
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

 