<template>
    <div>
        <div class="form-group">
            <div class="row">
                <div class="col-6"> 
                    <h4>Datos Cargados <i class="fas fa-check"></i></h4>
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
                    </ul>
                </div>
                <div class="col-6">
                    <h4><i class="fas fa-image"></i> Imagen de Producto</h4>
                    <img :src="producto.imagen" class="img-thumbnail" width="300px">
                    <br>
                    <div class="d-flex flex-row mt-3">
                        <div class="mr-2 p-2">
                            <button class="btn btn-outline-danger btn-sm "
                            type="button"
                            @click="borrarImagen()">
                                    Borrar <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                        <div class="ml-2 p-2">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input form-control-sm" id="imagenProducto" @change="imageChanged">
                                <label class="custom-file-label col-form-label-sm" for="imagenProducto">{{imageName}}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="form-group my-4">
            <div class="row">
                <div class="col-12">
                    <h4><i class="fas fa-info-circle"></i>Detalles: </h4>
                </div>
                <div class="col-12 mt-3">
                    <ckeditor :editor="editor" v-model="producto.descripcion" :config="editorConfig"></ckeditor>
                </div>
            </div> 
        </div> 
    </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    data() {
        return {
            editor: ClassicEditor,
            editorConfig: {
            },
            imageName: 'Seleccionar Imagen'
        }
    },
    props:{
        producto: {
            type: Object,
            required: true
        },
    },
    methods:{
        imageChanged(e){
            var fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            this.imageName = e.target.files[0].name
            fileReader.onload = (e) =>{
                this.producto.imagen = e.target.result
            }
            console.log(this.producto)
        },
        borrarImagen(){
            this.producto.imagen = "http://127.0.0.1:8000/assets/4fxp8923.bmp"
            this.imageName = 'Seleccionar Imagen'
        }
    },
}
</script>