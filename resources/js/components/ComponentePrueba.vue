<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <p v-for="(proveedor, index) in proveedores" :key="index">
                            {{proveedor.nombre}}
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <table class="table">
            <thead class="thead">
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cuit</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Botones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(proveedor, index) in proveedores" :key="index">
                    <th scope="row">{{proveedor.id}}</th>
                    <td>{{proveedor.nombre}}</td>
                    <td>{{proveedor.cuit}}</td>
                    <td>{{proveedor.telefono}}</td>
                    <td><a href="#" class="btn btn-warning btn-sm">Ver Mas</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        props:['proveedores'],
        data() {
            return{
                nombre: "Nombre de Prueba"
            }
        }
    }
</script>
