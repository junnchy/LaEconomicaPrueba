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
        
        <div class="container">
            <form method="POST" action="/proveedores">
                @csrf
                <div class="form-group mt-5">
                    <h3>Ingreso de Nuevo Proveedor</h3>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="nombre" 
                        placeholder="Nombre"
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
                <button type="submit" class="btn btn-primary btn-block">Agregar</button>
            </form>
        </div>

        <div class="container mt-5">
                <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($proveedores as $proveedor)
                                <tr>
                                    <th scope="row">{{$proveedor->id}}</th>
                                    <td>{{$proveedor->nombre}}</td>
                                    <td></td>
                                    <td>
                                        <a href="/proveedores/{{$proveedor->id}}" class="btn btn-warning btn-sm">Editar</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                      </table>
        </div>
    </div>
@endsection