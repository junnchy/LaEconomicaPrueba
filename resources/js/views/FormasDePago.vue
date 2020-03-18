<template>
    <div>
        <h1> <i class="fas fa-money-bill-wave-alt"></i> Formas de Pago</h1>  
        <div class="row mt-3">
            <div class="col-8">
                
            </div>
            <div class="col-4">
                <router-link :to="{name: 'agregarProv'}">
                    <button class="btn btn-outline-success btn-block">
                        Agregar Forma de Pago <i class="fas fa-plus-circle"></i>
                    </button>
                </router-link>
            </div>
        </div>
        <ListaFDP class="mt-3"/>
    </div>
</template>

<script>
import ListaFDP from '../components/ListaFormasDePago'
export default {
    components:{
        ListaFDP
    }
    
}
</script>