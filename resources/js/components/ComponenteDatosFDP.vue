<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Descripcion</label>
                    <input 
                        type="text" 
                        class="form-control"
                        name="descripcion" 
                        placeholder="descripcion"
                        v-model="nfdp.descripcion"
                    />
                </div>
            </div>
        </div>
         <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Recargo</label>
                    <input 
                        type="text" 
                        class="form-control"
                        name="recargo" 
                        placeholder="Recargo"
                        v-model="nfdp.recargo"
                    />
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Coeficiente</label>
                    <input 
                        type="text" 
                        class="form-control"
                        name="coeficiente" 
                        placeholder="coeficiente"
                        disabled=true 
                        v-model="calcularCoeficiente"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-check content-center mt-4">
                    <input type="checkbox" v-model="nfdp.estado" class="form-check-input" id="estadoFDP">
                    <label class="form-check-label" for="estadoFDP">Estado de Forma de Pago:</label>
                    <p class="text-success" v-if="nfdp.estado === true ||  nfdp.estado === 1">
                        Activa <i class="fas fa-check-circle"></i>
                    </p>
                    <p class="text-danger" v-if="nfdp.estado === false ||  nfdp.estado === 0">
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
        nfdp:{
            type:Object,
            required: true
        }
    },
    computed:{
        calcularCoeficiente(){
            if(this.nfdp.recargo > 0){
                this.nfdp.coeficiente = (this.nfdp.recargo/100) + 1
            }else{
                this.nfdp.coeficiente = 1
            }
            return this.nfdp.coeficiente
        },
        numeroEstado(){
            if(this.nfdp.estado === true){
                this.nfdp.estado = 1
            }
            if(this.nfdp.estado === false){
                this.nfdp.estado = 0
            }
        }
    }
}
</script>