<template>
  <div class="container">
    <div class="row">
        <div class="col-6">
          
        </div>
        <div class="col-6">
          <estadisticaTipoPago/>
        </div>
    </div>
    
  </div>
</template>

<script>
  import estadisticaTipoPago from './EstadisticaTipoPago'
  import { mapState } from 'vuex'

  export default {
    components: {
      estadisticaTipoPago
    },
  }
</script>
