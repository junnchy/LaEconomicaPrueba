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
                  <listaCupones v-bind:cupones="cupones"/>
            </div>
        </div>
    </div>
</template>
<script>
import listaCupones from './ListaCupones'
export default {
    data() {
        return {
            fecha: null
        }
    },
    components:{
        listaCupones
    },
    props:{
        cupones:{
            type: Array,
            required: true
        }
    },
    computed:{
        
    }
}
</script>