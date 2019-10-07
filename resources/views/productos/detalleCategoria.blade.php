@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                    <h1 class="center">{{$categoria->nombre}}</h1>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-3">
                <a href="/categoria" class="btn btn-danger">Volver</a>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item">Codigo: {{$categoria->id}}</li>
            <li class="list-group-item">Padre: {{$categoria->padre['nombre']}}</li>
            <li class="list-group-item">Hijos: 
                @foreach ($categoria->children as $item)
                        <a href="/categoria/{{$item['id']}}">{{$item['nombre']}},</a>
                @endforeach
            </li>
        </ul>
    </div>
    <div class="container mt-5">
        <div class="container">
            <h1>Proveedores</h1>
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
                    @foreach ($categoria->proveedores as $item)
                        <tr>
                            <th scope="row">{{$item->id}}</th>
                            <td>{{$item->nombre}}</td>
                            <td>{{$item->pivot['descuento']}} %</td>
                            <td>
                                <a href="/proveedores/{{$item->id}}" class="btn btn-warning btn-sm">Ver</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection