<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'La Economica') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   

    @if(Auth::check())
        <meta name="user-name" content="{{Auth::user()->name}}">
    @endif

</head>
<body>
    <div id="app">
        <header class="navbar navbar-expand navbar-light bg-light flex-column flex-md-row bd-navbar sticky-top">    
            <a class="navbar-brand mr-0 mr-md-2" href="{{ url('/') }}">
                <img src="{{asset('assets/Logo-Completo(1).png')}}" width="200" height="75">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-nav-scroll" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <li>
                        <a class="nav-link" href="/proveedores/" class="">Proveedores</a>
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
                    @auth
                        @if (Auth::user()->hasRole('Super Admin'))
                            <a class="nav-link" href="{{ route('homeUsers') }}" class="">Perfiles</a>              
                        @endif
                    @endauth
                </ul>
            </div>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <!-- Authentication Links -->
                @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                    </li>
                    @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                    @endif
                @else
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('logout') }}"
                            onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                @endguest
            </ul>
        </header>
        <div class="container-fluid">
            <div class="row flex-xl-nowrap justify-content-center">
                <div class="col-12 col-md-3 col-xl-2 bg-light border-right collapse" id="MenuLateral">
                    <componente-leftbar/>
                </div>
                <main class="col-12 col-md-9 col-xl-10 py-md-3 pl-md-5 bd-content" role="main">
                    <main class="py-4">
                        @yield('content')
                    </main>
                    <div class="sticky-button">
                        <componente-menuboton/>
                    </div>
                </main>
            </div>
        </div>
    </div>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://kit.fontawesome.com/6876153f7d.js" crossorigin="anonymous"></script>
</body>
</html>

<script type="text/javascript">
    window.Laravel = {
        csrfToken: "{{ csrf_token() }}",
        jsPermissions: {!! auth()->check()?auth()->user()->jsPermissions():null !!}
    }
</script>

<style>
    .sticky-button {
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    bottom: 10px;
    }
</style>

