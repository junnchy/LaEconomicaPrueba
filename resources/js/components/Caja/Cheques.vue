<template>
    <div>
        <div class="row m-2">
            <div class="col-8">
                
            </div>
            <div class="col-4">

            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                  <listaCheques v-bind:cheques="cheques"/>
            </div>
        </div>
    </div>
</template>
<script>
import listaCheques from './ListaCheques'
export default {
    data() {
        return {
            fecha: null
        }
    },
    components:{
        listaCheques
    },
    props:{
        cheques:{
            type: Array,
            required: true
        }
    },
    computed:{
        
    }
}
</script>