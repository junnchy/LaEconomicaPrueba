@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">La Economica</h1>
                <p class="lead">Una empresa Rosarina dedicada a la venta de matriales para la construccion.</p>
            </div>
        </div>

        <h2 class="text-center">Menu de opciones</h2>
        <div class="row mt-4">
            <div class="col-md-3">
                <a href="/proveedores/" class="btn btn-primary btn-block">Proveedores</a>
            </div>
            <div class="col-md-3">
                <a href="{{route('homeProductos')}}" class="btn btn-primary btn-block" >Modulo Productos</a>
            </div>
            <div class="col-md-3">
                <a href="/clientes/" class="btn btn-primary btn-block" >Clientes</a>
            </div>
            @auth
                @if(Auth::user()->hasRole('admin'))
                    <div class="col-md-3">
                        <a href="{{ route('homeUsers') }}" class="btn btn-primary btn-block">Perfiles de Usuario</a>                   
                    </div>
                @endif
            @endauth
        </div>
        <div class="row mt-4">
            <div class="col-3">
                <a href="/comercial/menu" class="btn btn-dark text-white btn-block">
                    Comercial <i class="fas fa-dollar-sign"></i>
                </a>
            </div>
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3"></div>
        </div>
    </div>
@endsection