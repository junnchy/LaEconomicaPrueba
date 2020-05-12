<template>
    <div class="container mt-2">
        <div class="row my-3" v-if="npresupuesto.id === null">
            <div class="col-2 ml-3 alert alert-primary text-center">
                <h5>
                    Ingresar Producto <i class="fas fa-hand-point-right"></i> 
                </h5>
            </div>
            <div class="col-7 mt-2">
                <v-select
                    label="nombre"
                    @input="setProducto"
                    :options="filtered_productos"
                    :filter="filtro"
                    :value="producto"
                    maxHeight="200px"
                    placeholder="Producto"
                ></v-select>
            </div>
            <div class="col-2 mt-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="estadoProducto" v-model="epro">
                    <label class="form-check-label" for="estadoProducto" v-if="filter.estado === 1">
                        <p class="text-success"><i class="fas fa-box"></i> Activos</p>
                    </label>
                    <label class="form-check-label" for="estadoProducto" v-if="filter.estado === 0">
                        <p class="text-danger"><i class="fas fa-box"></i> Inactivos</p>
                    </label>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <listalineas v-bind:npresupuesto="npresupuesto"/>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters} from 'vuex'
import listalineas from './Comprobante-LineaDeProducto'
export default {
    data() {
        return {
            producto: '',
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
        this.filter.estado = 1
    },
    methods:{
        ...mapActions('productos', ['getProductos']), 
        setProducto(val){
            var aux = true
            Vue.$toast.open('Producto Agregado');
            this.npresupuesto.lineas.forEach(element => {
                if (element.producto.id === val.id){
                    element.cantidad ++
                    aux = false
                }
            });
            if(aux){
                let li = {
                    producto: val,
                    cantidad: 1
                }
                this.npresupuesto.lineas.push(li) 
            }   
        },
        filtro(options, search){
            return options.filter(producto => producto.nombre.toLowerCase().includes(search) || producto.id.toString().includes(search))
        },
    },
    computed:{
        ...mapState('productos', ['productos', 'filter']),
        ...mapGetters('productos',['filtered_productos']),
        epro:{
            get(){
                return this.$store.state.productos.filter.estado;
            },
            set(val){
                this.$store.commit('productos/SET_ESTADO', val)
            }
        }
    }
}
</script>