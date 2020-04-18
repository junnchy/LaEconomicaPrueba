<template>
    <div>
        <h2> <i class="fas fa-credit-card text-info"></i> Formas de Pago</h2>  
        <div class="row mt-3">
            <div class="col-8">
                
            </div>
            <div class="col-4">
                <modalAgregarFdp/>
            </div>
        </div>
        <ListaFDP class="mt-3"/>
    </div>
</template>

<script>
import ListaFDP from '../components/ListaFormasDePago'
import modalAgregarFdp from '../components/ModalAgregarFormaDePago'
export default {
    components:{
        ListaFDP,
        modalAgregarFdp
    }
}
</script>