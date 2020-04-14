<template>
    <div>
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-secondary btn-sm" 
        data-toggle="modal" 
        data-target="#historialDePrecios" 
        data-whatever="@mdo"
        >
            Historial de Precios <i class="fas fa-stopwatch"></i>
        </button>
        <div class="modal fade" id="historialDePrecios" tabindex="-1" role="dialog" aria-labelledby="historialDePreciosLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="historialDePreciosLabel">
                            <i class="fas fa-stopwatch"></i> Historial de Precios 
                        </h5>
                        <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close" @click="resetResp(null)">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <lista v-bind:datos="datos"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import lista from './TablaHistorialDePrecios'
export default {
    components:{
        lista
    },
    props:{
        datos:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    .modal-lg {
        max-width: 80% !important;
        margin: 30px auto;
    }
</style>