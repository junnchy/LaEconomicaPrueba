<template>
    <div>
        {{setProductos}}
        <div class="row justify-content-center">
            <h2>Actualizacion de Precios <i class="fas fa-wrench"></i></h2>
        </div>
        <div class="container shadow-sm mt-3 p-3 bg-white rounded">
            <div class="row">
                <div class="col-2">
                    <h5>Filtros <i class="fas fa-filter"></i></h5> 
                </div>
                <div class="col-5">
                    <label>
                        Categoria 
                    </label> 
                    <select class="form-control form-control-sm" v-model="fcat">
                        <option selected :value=0>Todos</option>
                        <option v-for="(categoria, index) in categorias" :key="index" :value='categoria.id'>{{categoria.nombre}}</option>
                    </select>
                </div>
                <div class="col-5">
                    <label>
                        Proveedor 
                    </label>  
                    <select class="form-control form-control-sm" v-model="fpro">
                        <option selected :value=0>Todos</option>
                        <option v-for="(proveedor, index) in proveedores" :key="index" :value='proveedor.id'>{{proveedor.nombre}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-7 shadow-sm mt-3 mr-5 p-3 bg-white rounded">
                    <label class="text-center">Descuentos <i class="fas fa-percent"></i></label> 
                    <hr>
                    <div class="row form-group">
                        <div class="col-1"></div>
                        <div class="col-2 mt-3">
                            <input type="number" step=0.01 class="form-control" v-model="nprecios.descuentoProducto[0]">
                        </div>
                        <div class="col-2 mt-3">
                            <input type="number" step=0.01 class="form-control" v-model="nprecios.descuentoProducto[1]">
                        </div>
                        <div class="col-2 mt-3">
                            <input type="number" step=0.01 class="form-control" v-model="nprecios.descuentoProducto[2]">
                        </div>
                        <div class="col-2 mt-3">
                            <input type="number" step=0.01 class="form-control" v-model="nprecios.descuentoProducto[3]">
                        </div>
                        <div class="col-2 mt-3">
                            <input type="number" step=0.01 class="form-control" v-model="nprecios.descuentoProducto[4]">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-6">
                            <div class="alert alert-dark" role="alert">
                                <h6 class="text-center">Dto Total: {{(setDre*100).toFixed(2)}}%</h6>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="descuentos" v-model="nprecios.ad">
                                <label class="form-check-label" for="descuentos">Actualiza Descuentos</label>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label>IVA</label> 
                                <select class="form-control" v-model="nprecios.iva">
                                    <option :value=21 selected>21%</option>
                                    <option :value=10.5>10.5%</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-6"> 
                            <div class="form-group">
                                <label>Flete</label> 
                                <input type="number" step=0.01 class="form-control" v-model="nprecios.flete">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-6">
                              <div class="form-group">
                                <label>Rentabilidad</label> 
                                <input type="number" step=0.01 class="form-control" v-model="nprecios.rentabilidad">
                            </div>
                        </div>
                        <div class="col-2"></div>
                        <div class="col-4 mt-2">
                            <button class="btn btn-success" @click="actualizarPrecios(nprecios)">
                                Actualizar y Procesar Precios <i class="fas fa-upload"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-4 bg-secondary shadow-sm text-white mt-3 p-3 rounded">
                    <div class="form-group">
                        <label for="productosFiltrados">Productos a Actualizar <i class="fas fa-level-down-alt"></i></label>
                        <select multiple class="form-control" id="exampleFormControlSelect2" size="15">
                            <option v-for="(producto, index) in filtered_productos" :key="index">{{producto.nombre}}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            nprecios:{
                productos:[],
                descuentoProducto: [0,0,0,0,0],
                dre: 0,
                rentabilidad: 0,
                flete:0,
                iva: 0,
                ad: false
            }
            
        }
    },
    created(){
        this.getProductos()
        this.getProveedores()
        this.getCategoriasO()
    },
    methods:{
        ...mapActions('categorias',['getCategoriasO']),
        ...mapActions('proveedores',['getProveedores']),
        ...mapActions('productos',['getProductos']),
        ...mapActions('precios',['actualizarPrecios'])
    },
    computed:{
        ...mapState('productos', ['filter']),
        ...mapState('categorias',['categorias']),
        ...mapState('proveedores',['proveedores']),
        ...mapGetters('productos',['filtered_productos']),
       setDre(){
            var p = 0
            var i = 0
            this.nprecios.descuentoProducto.forEach(element => {
                if (element > 0) {                   
                    p = (1-(element/100))
                    if(i>0){
                        i = i * p
                    }else{
                        i = p
                    }
                }
            })
            this.nprecios.dre = (1 - i)
            if(this.nprecios.dre === 1){
                return 0
            }else{
                return this.nprecios.dre 
            }
        },
        fcat:{
            get(){
                return this.$store.state.productos.filter.categoria;
            },
            set(val){
                this.$store.commit('productos/SET_CATEGORIA', val)
            }
        },
        fpro:{
            get(){
                return this.$store.state.productos.filter.proveedor;
            },
            set(val){
                this.$store.commit('productos/SET_PROVEEDOR', val)
            }
        },
        setProductos(){
            this.nprecios.productos = this.filtered_productos
        }
    }
    
}
</script>