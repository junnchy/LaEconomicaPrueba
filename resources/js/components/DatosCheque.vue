<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Numero de Cheque</label>
                    <input 
                        type="text" 
                        class="form-control"
                        name="descripcion" 
                        placeholder="descripcion"
                        v-model="ncheque.nro_cheque"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        ncheque:{
            type: Object,
            required: true
        }
    }
    
}
</script>