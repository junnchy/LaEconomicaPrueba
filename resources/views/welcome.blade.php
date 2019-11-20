@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>La Economica</h1>
        <div class="container mt-5">
            <h2>Menu de opciones</h2>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-3">
                        <a href="/proveedores" class="btn btn-primary btn-block">Proveedores</a>
                    </div>
                    <div class="col-md-3">
                        <a href="{{route('homeProductos')}}" class="btn btn-primary btn-block">Modulo Productos</a>
                    </div>
                    <div class="col-md-3">
                        <a href="{{ route('clientes.index') }}" class="btn btn-primary btn-block">Clientes</a>
                    </div>
                    <div class="col-md-3">
                        <a href="{{route('homeUsers')}}" class="btn btn-primary btn-block">Perfiles de Usuario</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection