@extends('layouts.app')

@section('content')

<div class="container">
    <div class="container">
        <h1>Agregar Producto</h1>
    </div>
    <div class="container">
        <form method="POST" action="{{route('productos.create')}}">
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
                <label for="exampleFormControlSelect1">Descuento de Producto Proveedor</label>
                <select class="form-control" name="id_cat" type="number">
                    <option>{{null}}</option>
                    @foreach ($descuentos as $item)
                        <option>{{$item->proveedor}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Agregar</button>
        </form>
    </div>
</div>
    
@endsection