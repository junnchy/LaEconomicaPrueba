<template>
    <div>
        <div class="row mt-3">
            <div class="col-12 text-center">
                <ul class="nav nav-pills mb-3 justify-content-end" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-enviadas-tab" data-toggle="pill" href="#pills-enviadas" role="tab" aria-controls="pills-enviadas" aria-selected="true">
                            Enviadas
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-recibidas-tab" data-toggle="pill" href="#pills-recibidas" role="tab" aria-controls="pills-recibidas" aria-selected="false">
                            Recibidas
                        </a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-enviadas" role="tabpanel" aria-labelledby="pills-enviadas-tab">
                        <!-- <h4 class="border rounded p-3">Enviadas</h4> -->
                        <listaT v-bind:transferencias="transferencias_e"/>
                    </div>
                    <div class="tab-pane fade" id="pills-recibidas" role="tabpanel" aria-labelledby="pills-recibidas-tab">
                        <!-- <h4 class="border rounded p-3">Recibidas</h4> -->
                        <listaT v-bind:transferencias="transferencias_r"/>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
import listaT from './ListaTransferencias'
export default {
    components:{
        listaT,
    },
    props:{
        transferencias_e:{
            type: Array
        },
        transferencias_r:{
            type: Array
        }
    }
}
</script>