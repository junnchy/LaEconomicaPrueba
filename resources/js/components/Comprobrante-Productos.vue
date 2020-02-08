<template>
    <div class="container mt-2">
        <div class="row my-3">
            <div class="col-3 alert alert-primary text-center">
                <h5><i class="fas fa-box"></i> Producto</h5>
            </div>
            <div class="col-9 mt-2">
                <v-select
                    label="nombre"
                    @input="setProducto"
                    :options="productos"
                    :value="producto"
                    maxHeight="200px"
                    placeholder="Producto"
                ></v-select>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            producto: ''
        }
    },
    props:{
        npresupuesto:{
            type:Object,
            required: true
        }
    },
    created(){
        this.getProductos()
    },
    methods:{
        ...mapActions('productos', ['getProductos']), 
        setProducto(val){
            this.producto = val 
        }
    },
    computed:{
        ...mapState('productos', ['productos'])
    }
}
</script>