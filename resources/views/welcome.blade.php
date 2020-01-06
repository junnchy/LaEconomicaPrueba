@extends('layouts.app')

@section('content')
    <div class="container">
        <h2 class="text-center">Menu de opciones</h2>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-3">
                    <a href="/proveedores/" class="btn btn-primary btn-block">Proveedores</a>
                </div>
                <div class="col-md-3">
                    <a href="{{route('homeProductos')}}" class="btn btn-primary btn-block" >Modulo Productos</a>
                </div>
                <div class="col-md-3">
                    <a href="/clientes/" class="btn btn-primary btn-block" >Clientes</a>
                </div>
                <div class="col-md-3">
                    <a href="#" class="btn btn-primary btn-block" >BTN</a>
                </div>
            </div>
        </div>
    </div>
@endsection