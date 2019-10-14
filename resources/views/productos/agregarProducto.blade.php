@extends('layouts.app')

@section('content')

<div class="container">
    <div class="container">
        <h1>Agregar Producto</h1>
    </div>
    <div class="container">
        <form method="POST" action="{{route('productos.store')}}">
            @csrf
            <div class="form-group">
                <label for="id">Codigo</label>
                <input type="number" class="form-control" id="id" name="id">
            </div>
            <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <input type="text" class="form-control" id="descripcion" name="nombre">
            </div>
            <div class="form-group">
                <label for="precio">Precio Base</label>
                <input type="number" class="form-control" id="precio" name="precioBase">
            </div>
            <div class="form-group">
                <label for="descP">Descuento de Producto</label>
                <input type="number" class="form-control" id="descP" name="descuentoProducto">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Proveedor</label>
                <select class="form-control" name="proveedor_id">
                    @foreach ($proveedores as $proveedor)
                        <option>{{null}}</option>
                        <option value="{{$proveedor->id}}">{{$proveedor->id}} - {{$proveedor->nombre}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Categoria</label>
                <select class="form-control" name="categoria_id">
                    @foreach ($categorias as $categoria)
                        <option>{{null}}</option>
                        <option value="{{$categoria->id}}">{{$categoria->id}} - {{$categoria->nombre}}</option>
                    @endforeach
                </select>
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
</div>
    
@endsection