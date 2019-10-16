@extends('layouts.app')

@section('content')



<div class="container">
    <h1> Detalle de producto </h1>
    <div class="container">
         <ul class="list-group">
            <li class="list-group-item">Codigo: {{$producto->id}}</li>
            <li class="list-group-item">Nombre: {{$producto->nombre}}</li>
            <li class="list-group-item">Precio base: {{$producto->precioBase}}</li>
            <li class="list-group-item">Categorias: 
                @if ($producto->categoria->padre != null)
                    <a href="{{route('categoria.show', $producto->categoria->padre)}}">{{$producto->categoria->padre->nombre}},</a>
                @endif
                
                <a href="{{route('categoria.show', $producto->categoria)}}">{{$producto->categoria->nombre}},</a></li>    
        </ul>
    </div>
</div>
    
@endsection