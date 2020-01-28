<template>
    <div>
        <div class="form-group">
            <div class="row">
                <div class="col-6">
                    <h4><i class="fas fa-image"></i> Imagen de Producto</h4>
                    <input type="file" class="form-control-file mt-5" 
                    @change="imageChanged">
                </div>
                <div class="col-6">
                    <img :src="producto.imagen" class="img-thumbnail" width="250px">
                    <br>
                    <button class="btn btn-outline-danger btn-sm mt-2"
                    type="button"
                    @click="borrarImagen()">
                        Borrar <i class="fas fa-trash-alt"></i>
                    </button>
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
            }
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
            fileReader.onload = (e) =>{
                this.imagen = e.target.result
                this.producto.imagen = e.target.result
            }
            console.log(this.producto)
        },
        borrarImagen(){
            this.producto.imagen = "http://127.0.0.1:8000/assets/4fxp8923.bmp"
        }
    },
}
</script>