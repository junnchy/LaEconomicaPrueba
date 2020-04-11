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
            <div class="col-4">
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
            <div class="col-4">
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
            }
            return this.nfdp.coeficiente
        }
    }
}
</script>