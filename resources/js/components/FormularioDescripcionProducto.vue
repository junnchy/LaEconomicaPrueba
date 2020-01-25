<template>
    <div>
        <div class="form-group my-4">
            <div class="row">
                <div class="col-12">
                    <h4>Detalles: </h4>
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
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                // The configuration of the editor.
            }
        }
    },
    props:{
        producto: {
            type: Object,
            required: true
        },
    },
}
</script>