<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        class="form-control"
                        name="Nombre" 
                        placeholder="Nombre"
                        v-model="nTarjeta.nombre"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-check content-center mt-4">
                    <input type="checkbox" v-model="nTarjeta.estado" class="form-check-input" id="estadoFDP">
                    <label class="form-check-label" for="estadoFDP">Estado de Forma de Pago:</label>
                    <p class="text-success" v-if="nTarjeta.estado === true ||  nTarjeta.estado === 1">
                        Activa <i class="fas fa-check-circle"></i>
                    </p>
                    <p class="text-danger" v-if="nTarjeta.estado === false ||  nTarjeta.estado === 0">
                        Inactiva <i class="fas fa-exclamation-circle"></i>
                    </p>
                </div>
            </div>
        </div>
        {{numeroEstado}}
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        nTarjeta:{
            type:Object,
            required: true
        }
    },
    computed:{
        numeroEstado(){
            if(this.nTarjeta.estado === true){
                this.nTarjeta.estado = 1
            }
            if(this.nTarjeta.estado === false){
                this.nTarjeta.estado = 0
            }
        }
    }
}
</script>