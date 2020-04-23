@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Sección Vendedores</h1>
            </div>
            <div class="col-4">
                    <a href="{{ route('homeUsers') }}" class="btn btn-danger"> Volver</a>
            </div>
        </div>

        <div class="container-fluid h-100">
            <div class="row w-100 align-items-center">
                <div class="col text-center">
                    <a href="{{route('vendedores.create')}}" class="btn btn-primary center-block">Agregar Nuevo Vendedor</a>
                </div>
            </div>        
        </div>

        <div class="container mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nro. Puesto</th>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">Contador Presupuesto</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($vendedores as $vendedor)
                        <tr>
                            <th scope="mt-2">{{$vendedor->nro_puesto}}</th>
                            <td class="mt-2">{{$vendedor->user->nombre}}</td>
                            <td class="mt-2">{{$vendedor->contador_presupuestos}}</td>
                            <td>
                                <a href="#" class="btn btn-warning btn-sm">Ver Más</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

    </div>
@endsection