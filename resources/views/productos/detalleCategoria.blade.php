@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                    <h1 class="center">{{$categoria->nombre}}</h1>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-3">
                <a href="{{ url()->previous() }}" class="btn btn-danger">Volver</a>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item">Codigo: {{$categoria->id}}</li>
            <li class="list-group-item">Padre: {{$categoria->padre['nombre']}}</li>
            <li class="list-group-item">Hijos: 
                @foreach ($categoria->children as $item)
                        <a href="{{route('categoria.show', $item)}}">{{$item['nombre']}},</a>
                @endforeach
            </li>
        </ul>
    </div>
    <div class="container mt-5">
        <div class="container">
            <h1>Proveedores de {{$categoria->nombre}}</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Codigo Proveedor</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <!--Hasta dos anidaciones de proveedores, se podria agregar una mas-->
                    @if ($categoria->children != null)
                        @foreach ($categoria->children as $item)
                            @foreach ($item->proveedores as $item2)
                                <tr>
                                    <th scope="row">{{$item2->id}}</th>
                                    <td>{{$item2->nombre}}</td>
                                    <td>{{$item2->pivot['descuento']}} %</td>
                                    <td>
                                        <a href="{{route('proveedores.show', $item2)}}" class="btn btn-warning btn-sm">Ver</a>
                                    </td>
                                </tr>
                            @endforeach
                        @endforeach  
                    @endif
                    @foreach ($categoria->proveedores as $item)
                        <tr>
                            <th scope="row">{{$item->id}}</th>
                            <td>{{$item->nombre}}</td>
                            <td>{{$item->pivot['descuento']}} %</td>
                            <td>
                                <a href="{{route('proveedores.show', $item)}}" class="btn btn-warning btn-sm">Ver</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <div class="container mt-5">
            <div class="container">
                <h1>Productos</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Codigo Articulo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio Base</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($categoria->productos as $item)
                            <tr>
                                <th scope="row">{{$item->id}}</th>
                                <td>{{$item->nombre}}</td>
                                <td>{{$item->precioBase}}</td>
                                <td></td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
@endsection