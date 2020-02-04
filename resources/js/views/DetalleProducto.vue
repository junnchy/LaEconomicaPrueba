<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>Detalle de Producto </h2>
            </div>
            <div class="col-4">
                <router-link :to="{name: 'editarProducto', params:{id: producto.id}}">
                    <button class="btn btn-warning">
                        Editar <i class="fas fa-pen"></i>
                    </button>
                </router-link>
                <router-link :to="{name: 'MenuProductos'}">
                    <button class="btn btn-danger">
                        Volver
                    </button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-8"> 
                <ul class="list-group mt-3">
                    <li class="list-group-item"><strong><h3>{{producto.nombre}}</h3></strong></li>
                    <li class="list-group-item"><strong>Codigo: </strong> {{producto.id}}</li>
                    <li class="list-group-item"><strong>Precio de Venta: </strong> 
                        <h5>${{producto.precioVenta}}</h5>
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
                        <strong>Estado:</strong>  
                        <p class="text-success" v-if="producto.estado === 1">Activo <i class="fas fa-check-circle"></i></p>
                        <p class="text-danger" v-if="producto.estado === 0">Inactivo <i class="fas fa-exclamation-circle"></i></p>
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
                            <div class="row">
                                <div class="col-6">
                                    <ajustemanualstock 
                                    v-bind:nFicha="producto.ficha_stock.id" 
                                    v-bind:cantAct="producto.ficha_stock.cantidadActual"
                                    v-bind:producto_id="producto.ficha_stock.producto_id"/>
                                </div>
                                <div class="col-6">
                                    <router-link :to="{name: 'fichaStock', params:{id: producto.ficha_stock.id}}">
                                        <button class="btn btn-outline-dark btn-block">
                                            Ver ficha <i class="fas fa-book-open"></i>
                                        </button>
                                    </router-link>
                                </div>
                            </div>
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
import {mapActions, mapState} from 'vuex'
import ajustemanualstock from '../components/AjusteManualStock'
export default {
    name:'DetalleProdoucto',
    components:{
        ajustemanualstock
    },
    data() {
        return {
            id: this.$route.params.id,
            cEC: 'alert alert-info text-center'
        }
    },
    methods: {
        ...mapActions('productos',['getProducto']),
        ...mapActions('stock', ['getFichaStock'])
    },
    created() {
        this.getProducto(this.id)
    },
    computed: {
        ...mapState('productos',['producto']),
        ...mapState('proveedores',['proveedor']),
        ...mapState('categorias',['categoria']),
        ...mapState('stock', ['fichaDeStock']),
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
            }
    },

}
</script>
