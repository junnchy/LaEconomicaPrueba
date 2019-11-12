@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Seccion Proveedores</h1>
            </div>
            <div class="col-4">
                    <a href="{{url()->previous()}}" class="btn btn-danger"> Volver</a>
            </div>
        </div>
        <div class="container mt-5">
                <h3>Nombre del Proveedor: <strong>{{$proveedor->nombre}}</strong></h3>
        </div>
        <div class="container">
            <form method="POST" action="{{route('proveedores.update', $proveedor)}}">
                @method("PUT")
                @csrf
                <div class="form-group mt-5">
                    <h3>Modificar Datos</h3>
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nombre" 
                            value="{{$proveedor->nombre}}"
                        />
                    </div>
                    <div class="form-group">
                        <label for="telefono">Telefono</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="telefono" 
                            value="{{$proveedor->telefono}}"
                        />
                    </div>
                    <div class="form-group">
                        <label for="id_cat">Agregar Categoria</label>
                        <select class="form-control" name="id_cat" type="number">
                            <option>{{null}}</option>
                            @foreach ($categorias as $item)
                                <option>{{$item->id}} - {{$item->nombre}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                            <label for="descuento">Descuento</label>
                            <input 
                                type="number" 
                                class="form-control" 
                                name="descuento" 
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
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif  
                <button type="submit" class="btn btn-warning btn-block">Modificar</button>
            </form>
        </div>
        <div class="container mt-5">
            <h3>Categoria de productos que nos vende</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Codigo Categoria</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($proveedor->categorias as $item)
                        <tr>
                            <th scope="row">{{$item->id}}</th>
                            <td>{{$item->nombre}} </td>
                            <td>{{$item->pivot['descuento']}}%</td>
                            <td>
                                <a href="{{route('categoria.show', $item)}}" class="btn btn-warning btn-sm">Detalles</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection