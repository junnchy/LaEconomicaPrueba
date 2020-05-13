<template>
    <div>
        <div class="row justify-content-center">
            <h2>Comparativa de Productos <i class="fas fa-compress-alt text-info"></i></h2>
        </div>
        <div class="row container shadow-sm mt-3 p-3 bg-white rounded border">
            <div class="col-3 alert alert-primary text-center">
                <h5>
                    Ingresar Producto <i class="fas fa-hand-point-right"></i> 
                </h5>
            </div>
            <div class="col-7 mt-2">
                <v-select
                    label="nombre"
                    @input="setProducto"
                    :options="filtered_productos"
                    :value="producto"
                    :multiple=true
                    maxHeight="200px"
                    placeholder="Producto"
                ></v-select>
            </div>
        </div>
        <div class="row container shadow-sm mt-3 p-3 bg-white rounded border">
            <table class="table table-striped mt-3">
                <thead>
                    <tr>
                        <!-- <th scope="col">Codigo</th> -->
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio Base</th>
                        <th scope="col">Descuentos</th>
                        <th scope="col">Flete</th>
                        <th scope="col">Iva</th>
                        <th scope="col">Precio Costo</th>
                        <th scope="col">Rentabilidad</th>
                        <th scope="col">Precio Venta</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pro, index) in fproductos" :key="index">
                        <!-- <th scope="row">{{pro.id}}</th> -->
                        <th><img :src="pro.imagen" width="50px" class="border border-secondary"></th>
                        <td>
                            {{pro.nombre}}<br/>
                            <span class="font-italic">prov: {{pro.proveedor.nombre}} </span>
                        </td>
                        <td>${{pro.precio.precioBase}}</td>
                        <td>[{{pro.precio.descuentoProducto_1}}, {{pro.precio.descuentoProducto_2}},  
                            {{pro.precio.descuentoProducto_3}}, {{pro.precio.descuentoProducto_4}}, 
                            {{pro.precio.descuentoProducto_5}}]</td>
                        <td>${{pro.precio.flete}}</td>
                        <td>{{pro.precio.iva}}%</td>
                        <td>
                            ${{pro.precio.precioCosto}}
                            <span class="badge badge-success" v-if="defMC === pro.id">Mejor</span>
                        </td>
                        <td>
                            {{pro.precio.rentabilidad}}
                            <span class="badge badge-success" v-if="defMR === pro.id">Mejor</span>
                        </td>
                        <td>
                            ${{pro.precio.precioVenta}}
                            <span class="badge badge-success" v-if="defMV === pro.id">Mejor</span>
                        </td>
                        <td>
                            <button type="button" class="btn btn-outline-danger border-0" 
                            @click="deleteLinea(index)">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    created(){
        this.getProductos()
    },
    data() {
        return {
            fproductos:[],
            mri: null,
            mpvi: null,
            mpci: null
        }
    },
    methods:{
        ...mapActions('productos', ['getProductos']),
        setProducto(val){
            Vue.$toast.open('Producto Agregado');
            this.fproductos = val
            /* val = {
                nombre: ''
            } */
        },
        deleteLinea(index){
            this.fproductos.splice(index, 1);
            Vue.$toast.open({
                message: 'Producto Borrado',
                type: 'error',
            });
        },
    },
    computed:{
        ...mapState('productos', ['productos']),
        ...mapGetters('productos', ['filtered_productos']),
        defMR(){
            if(this.fproductos.length >= 2){
                var mr = this.fproductos[0].precio.rentabilidad
                for (let i = 0; i < this.fproductos.length; i++) {
                    if(this.fproductos[i].precio.rentabilidad >= mr){
                        mr = this.fproductos[i].precio.rentabilidad
                        this.mri = this.fproductos[i].id
                    }
                }
                return this.mri
            }
        },
        defMC(){
            if(this.fproductos.length >= 2){
                var mpC = this.fproductos[0].precio.precioCosto
                for (let i = 0; i < this.fproductos.length; i++) {
                    if(this.fproductos[i].precio.precioCosto <= mpC){
                        mpC = this.fproductos[i].precio.precioCosto
                        this.mpci = this.fproductos[i].id
                    } 
                }
                return this.mpci
            }
        },
        defMV(){
            if(this.fproductos.length >= 2){
                var mpV = this.fproductos[0].precio.precioVenta
                for (let i = 0; i < this.fproductos.length; i++) {
                    if(this.fproductos[i].precio.precioVenta <= mpV){
                        mpV = this.fproductos[i].precio.precioVenta
                        this.mpvi = this.fproductos[i].id
                    } 
                }
                return this.mpvi
            }
        }
    }
}
</script>

