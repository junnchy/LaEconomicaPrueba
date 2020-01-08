<template>
    <div>
        <form @submit.prevent="agregarProveedor(proveedor)">
            <componente-fdatosprov v-bind:proveedor="proveedor"/>
            <!-- <div class="form-group mt-5">
                <div class="row">
                    <div class="col-8">
                        <h3>Ingreso de Nuevo Proveedor</h3>
                    </div>
                    <div class="col-4">
                        <router-link :to="{name:'listadoProveedores'}">
                            <button class="btn btn-danger">
                                Cancelar
                            </button>
                        </router-link>
                    </div>
                </div> 
                <div class="form-group">
                    <label>Nombre Proveedor</label>
                    <input type="text" v-model="proveedor.nombre" class="form-control" >
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">     
                            <label>CUIT</label>
                            <input type="number" v-model="proveedor.cuit" class="form-control">
                        </div> 
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label>Telefono</label>
                            <input type="number" v-model="proveedor.telefono" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label>Dirección</label>
                            <input type="text" class="form-control" name="direccion" placeholder="Dirección" v-model="proveedor.direccion"/>
                        </div>
                    </div>
                    <div class="col-6">
                        <label>Localidad</label>
                        <select class="form-control" v-model="proveedor.localidad_id" type="number">
                            <option selected :value="proveedor.localidad_id" 
                            v-if="proveedor.localidad_id === proveedor.localidad.id">{{proveedor.localidad.cod_postal}}-{{proveedor.localidad.localidad}}</option>
                            <option v-for="(localidad, index) in localidades" :key="index" :value="localidad.id">
                                {{localidad.cod_postal}} - {{localidad.localidad}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label>Condición de IVA</label>
                            <select class="form-control" v-model="proveedor.condicion_iva_id">
                                    <option selected :value="proveedor.condicion_iva_id" 
                                    v-if="proveedor.condicion_iva_id === proveedor.condicion_iva.id">{{proveedor.condicion_iva.denominacion}}</option>
                                    <option v-for="(condicion, index) in condicionIva" :key="index" :value="condicion.id">
                                        {{condicion.denominacion}}
                                    </option>
                            </select>
                        </div>
                    </div>        
                    <div class="col-6">
                        
                    </div>
                </div>                   
            </div> -->
            <button type="submit" class="btn btn-success">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'agregarProv', 
    data() {
        return {
                proveedor: {nombre: '', cuit:'', telefono: '', direccion: '', 
                localidad_id: 0, condicion_iva_id: 0,
                localidad:{nombre: '', cod_postal: ''},
                condicion_iva:{denominacion: ''}
            }
        }
    },
    methods: {
        ...mapActions('proveedores',['agregarProveedor'])
    },
    created() {
    },
    computed: {
    },
}
</script>