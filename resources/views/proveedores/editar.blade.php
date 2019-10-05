@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Seccion Proveedores</h1>
            </div>
            <div class="col-4">
                    <a href="/" class="btn btn-danger"> Volver</a>
            </div>
        </div>
        <div class="container mt-5">
                <h3>Nombre del Proveedor: <strong>{{$proveedor->nombre}}</strong></h3>
        </div>
        <div class="container">
            <form method="POST" action="/proveedores/{{$proveedor->id}}">
                @method("PUT")
                @csrf
                <div class="form-group mt-5">
                    <h3>Modificar Proveedor</h3>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="nombre" 
                        value="{{$proveedor->nombre}}"
                    />
                </div>
                @if (session('mensaje'))
                    <div class="alert alert-success alert-dismissible fade show">
                        {{session('mensaje')}} 
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                @endif
                <button type="submit" class="btn btn-warning btn-block">Modificar</button>
            </form>
        </div>
    </div>
@endsection