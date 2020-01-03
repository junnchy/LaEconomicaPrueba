<template>
    <div>
        <div class="form-group">
            <label>Nombre Producto</label>
            <input type="text" v-model="producto.nombre" class="form-control" >
        </div> 
        <div class="form-group">
            <div class="row">
                <div class="col-10">
                    <label>Proveedor:</label> 
                    <select class="custom-select" v-model="producto.proveedor">
                        <option selected :value="producto.proveedor">{{producto.proveedor.id}}-{{producto.proveedor.nombre}}</option>
                        <option v-for="proveedor in this.$store.state.proveedores" :key="proveedor.id" :value='proveedor'>{{proveedor.id}} - {{proveedor.nombre}}</option>
                    </select>
                </div>
                <div class="col-2" v-if="producto.proveedor.nombre != ''">
                    <hr/>
                    <componente-facp :proveedor="producto.proveedor"></componente-facp>
                </div>
            </div>
        </div>
        <div class="form-group my-4">
            <label>Categoria:</label> 
            <select class="custom-select" v-model="producto.categoria">
                <option selected :value="producto.categoria" v-if="producto.proveedor_id === producto.proveedor.id">{{producto.categoria.id}}-{{producto.categoria.nombre}}</option>
                <option v-for="(cate, index) in producto.proveedor.categorias" :key="index" :value='cate'>{{cate.id}} - {{cate.nombre}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        producto: {
            type: Object,
            required: true
        },
    },
}
</script>