<template>
   <div class="container">
        <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
            Agregar Localidad <i class="fas fa-plus-circle"></i>
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar Localidad</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetResp(null)">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="agregarLocalidad(nloc)">
                            <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuesta != null">
                                {{respuesta}} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Nombre de la Nueva Localidad:</label>
                                <input type="text" v-model="nloc.localidad" class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Codigo Postal:</label>
                                <input type="number" v-model="nloc.cod_postal" :placeholder="reset" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Provincia:</label>
                                <select class="form-control" v-model="nloc.provincia_id" type="number" >
                                    <option selected :value='null'>0 - Vacio</option>
                                    <option v-for="(provincia, index) in provincias" :key="index" :value="provincia.id">{{provincia.iso_nombre}}</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetResp(null)">Cerrar</button>
                                <button type="submit" class="btn btn-success btn-block">
                                    Agregar Localidad <i class="fas fa-check-circle"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return{
                nloc: {localidad:'', provincia_id: 0, cod_postal: 0}
            }
        },
        mounted(){
            console.log('component mounted')
        },
        methods: {
            ...mapActions('localidades', ['agregarLocalidad', 'resetResp', 'getProvincias'])
        },
        created() {
            this.getProvincias()
        },
        computed: {
            ...mapState('localidades', ['respuesta', 'provincias']),
            reset(){
                if(this.$store.state.localidades.respuesta != null){
                    this.nloc.localidad='',
                    this.nloc.provincia='',
                    this.nloc.cod_postal=0
                    return this.nloc.cod_postal
                }else{
                    return this.nloc.cod_postal
                }
            }
        }
    }
</script>