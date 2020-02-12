<template>
    <div class="container mt-2">
        <div class="row my-3" v-if="npresupuesto.id === null">
            <div class="col-3 ml-3 alert alert-primary text-center">
                <h5>
                    <i class="fas fa-box"></i> Ingreso de Productos <i class="fas fa-hand-point-right"></i> 
                </h5>
            </div>
            <div class="col-8 mt-2">
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
        <div class="row my-3">
            <listalineas v-bind:npresupuesto="npresupuesto"/>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import listalineas from './Comprobante-LineaDeProducto'
export default {
    data() {
        return {
            producto: ''
        }
    },
    components:{
        listalineas
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
            Vue.$toast.open('Producto Agregado');
            let li = {
                producto: val,
                cantidad: 1
            }
            this.npresupuesto.lineas.push(li) 
        }
    },
    computed:{
        ...mapState('productos', ['productos'])
    }
}
</script>