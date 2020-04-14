<template>
    <div>
        <div class="row">
            <div class="col-9">
                <h2> <i class="fas fa-box"></i> Detalle de Producto </h2>
            </div>
            <div class="col-3">
                <router-link :to="{name: 'editarProducto', params:{id: producto.id}}">
                    <button class="btn btn-warning">
                        Editar <i class="fas fa-pen"></i>
                    </button>
                </router-link>
                <button class="btn btn-outline-danger" @click="$router.go(-1)">
                    Volver <i class="fas fa-arrow-alt-circle-left"></i>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-8"> 
                <ul class="list-group mt-3">
                    <li class="list-group-item"><strong><h3>{{producto.nombre}}</h3></strong></li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-6">
                                <strong>Codigo: </strong> {{producto.id}}
                            </div>
                            <div class="col-6">
                                <strong class="d-inline">Estado:</strong>  
                                <p class="text-success  d-inline" v-if="producto.estado === 1">Activo <i class="fas fa-check-circle"></i></p>
                                <p class="text-danger  d-inline" v-if="producto.estado === 0">Inactivo <i class="fas fa-exclamation-circle"></i></p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" v-if="producto.proveedor"><strong>Proveedor: </strong> 
                        <router-link :to="{name: 'detalleProv', params:{id: producto.proveedor_id}}">
                            <a>{{producto.proveedor.nombre}}</a>
                        </router-link>
                    </li>
                    <li class="list-group-item" v-if="producto.categoria"><strong>Categoria: </strong> 
                        <router-link :to="{name: 'verEditarCategoria', params:{id: producto.categoria_id}}">
                            <a>{{producto.categoria.nombre}}</a>
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-4">
                                <strong>Precio de Venta: </strong> 
                                <h5 class="text-danger">${{preciofdp}}</h5>
                            </div>
                            <div class="col-1">
                                <i class="fas fa-grip-lines-vertical"></i> 
                            </div>
                            <div class="col-6">
                               <v-select
                                    label="descripcion"
                                    @input="setFDP"
                                    :options="filtered_fdp"
                                    :value="fdp"
                                    maxHeight="200px"
                                    placeholder="Forma De Pago"
                                ></v-select>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <modalhistorial v-bind:datos="producto.precios"/>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-clock"></i> <strong>Ultima Actualizacion: </strong> {{producto.updated_at}}
                    </li>
                </ul>
            </div>
            <div class="col-4 mt-3">
                <img :src="producto.imagen" class="img-thumbnail" alt="Example" width="330px">
            </div>
        </div>
        <div class="row mt-5" v-if="producto.ficha_stock">
            <div class="col-12">
                <div class="container">
                   <h3><i class="fas fa-box-open"></i> Stock</h3>
                   <div class="row">
                       <div class="col-6">
                           <div :class="etiquetaCantidad" role="alert">
                               <h4>Cantidad Actual</h4>
                               <h3>{{producto.ficha_stock.cantidadActual}}</h3>
                           </div>
                       </div>
                       <div class="col-6">
                           <div class="alert alert-secondary" role="alert">
                               <i class="fas fa-clock"></i> <strong>Ultimo movimiento: </strong> {{producto.ultStock}}
                            </div>
                            <router-link :to="{name: 'fichaStock', params:{id: producto.ficha_stock.id}}">
                                <button class="btn btn-outline-primary btn-block">
                                    Ver ficha <i class="fas fa-book-open"></i>
                                </button>
                            </router-link>
                       </div>
                   </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12">
                <div class="container">
                    <h3> <i class="fas fa-info-circle"></i> Descripcion</h3>
                    <div class="shadow-sm p-3 mb-5 bg-white rounded" v-html="producto.descripcion">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import modalhistorial from '../components/ModalHistorialDePrecios'
export default {
    name:'DetalleProdoucto',
    data() {
        return {
            id: this.$route.params.id,
            cEC: 'alert alert-info text-center', 
            fdp: null
        }
    },
    components:{
        modalhistorial
    },
    methods: {
        ...mapActions('productos',['getProducto']),
        ...mapActions('stock', ['getFichaStock']),
        ...mapActions('formasDePago', ['getFormasDePago']),
        setFDP(val){
            this.fdp = val
        }
    },
    created() {
        this.getProducto(this.id),
        this.getFormasDePago(),
        this.filter.estado = 1
    },
    computed: {
        ...mapState('productos',['producto']),
        ...mapState('proveedores',['proveedor']),
        ...mapState('formasDePago',['formasDePago', 'filter']),
        ...mapState('categorias',['categoria']),
        ...mapState('stock', ['fichaDeStock']),
        ...mapGetters('formasDePago', ['filtered_fdp']),
        etiquetaCantidad(){
            if (this.producto.ficha_stock.cantidadActual === 0) {
                this.cEC ='alert alert-warning text-center'
            }
            if (this.producto.ficha_stock.cantidadActual > 0) {
                this.cEC ='alert alert-success text-center'
            }
            if (this.producto.ficha_stock.cantidadActual < 0) {
                this.cEC ='alert alert-danger text-center'
            }
            return this.cEC
        },
        preciofdp(){
            if(this.fdp != null){
                return (this.fdp.coeficiente * this.producto.precio.precioVenta).toFixed(2)
            }else{
                return this.producto.precio.precioVenta
            }
            
        }
    },

}
</script>
