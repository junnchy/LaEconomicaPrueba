@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Seccion Proveedores</h1>
            </div>
            <div class="col-4">
                    <a href="{{ url()->previous() }}" class="btn btn-danger"> Volver</a>
            </div>
        </div>
        
        <div class="container">
            <form method="POST" action="/proveedores">
                @csrf
                <div class="form-group mt-5">
                    <h3>Ingreso de Nuevo Proveedor</h3>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            value="{{old('nombre')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Cuit</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            name="cuit" 
                            placeholder="CUIT"
                            value="{{old('cuit')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Telefono</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="telefono" 
                            placeholder="Telefono"
                            value="{{old('telefono')}}"
                        />
                    </div>
                </div>
                @if (session('mensaje'))
                    <div class="alert alert-success alert-dismissible fade show">
                        {{session('mensaje')}} 
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                @endif
                @if ($errors->any())
                    <div class="alert alert-danger alert-dismissible fade show">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
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
                            <th scope="col">Cuit</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($proveedores as $proveedor)
                                <tr>
                                    <th scope="row">{{$proveedor->id}}</th>
                                    <td class="mt-2">{{$proveedor->nombre}}</td>
                                    <td class="mt-2">{{$proveedor->cuit}}</td>
                                    <td class="mt-2">{{$proveedor->telefono}}</td>
                                    <td>
                                        <a href="{{route('proveedores.show', $proveedor)}}" class="btn btn-warning btn-sm">Editar</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                      </table>
        </div>
    </div>
@endsection