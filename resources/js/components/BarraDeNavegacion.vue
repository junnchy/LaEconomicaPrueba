<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="/">
                    Marca
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li>
                            <a class="nav-link" href="/proveedores/">Proveedores</a>
                        </li> 
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Productos
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                                <a class="dropdown-item" href="/productos/home">Productos</a>
                                <router-link :to="{name:'agregarProducto'}">
                                    <a class="dropdown-item" href="#">Agregar Producto</a>
                                </router-link>
                                <div class="dropdown-divider"></div>
                                <router-link :to="{name: 'listadoCategorias'}" >
                                    <a class="dropdown-item" href="#">Categorias</a>
                                </router-link>
                                <!-- <router-link :to="{name: 'listadoCategorias'}" >
                                    <a class="dropdown-item" href="#">Agregar Categoria</a>
                                </router-link> -->
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Clientes
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                                <a class="dropdown-item" href="/clientes/">Listado Clientes</a>
                                <router-link :to="{name: 'agregarCliente'}" >
                                    <a class="dropdown-item" href="#">Agregar Cliente</a>
                                </router-link>
                                <div class="dropdown-divider"></div>
                                <router-link :to="{name: 'tablaDatosCliente'}" >
                                    <a class="dropdown-item" href="#">Tablas de Datos</a>
                                </router-link>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>