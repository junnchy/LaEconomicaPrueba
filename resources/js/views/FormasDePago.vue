<template>
    <div>
        <h1> <i class="fas fa-money-bill-wave-alt"></i> Formas de Pago</h1>  
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