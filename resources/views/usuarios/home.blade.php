@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Perfiles de Usuario</h1>
        
        <div class="container mt-5">
            <h2>Menú de Opciones</h2>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-3">
                        <a href="{{route('vendedores.index')}}" class="btn btn-warning btn-block">Vendedores</a>
                    </div>
                    <div class="col-md-3">
                        <a href="{{route('usuarios.index')}}" class="btn btn-warning btn-block">Usuarios</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
