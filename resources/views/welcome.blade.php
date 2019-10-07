@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>La Economica</h1>
        <div class="container mt-5">
            <h2>Menu de opciones</h2>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-3">
                        <a href="/proveedores" class="btn btn-primary btn-block">Proveedores</a>
                    </div>
                    <div class="col-md-3">
                        <a href="/productos" class="btn btn-primary btn-block" >Modulo Productos</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#" class="btn btn-primary btn-block" >BTN</a>
                    </div>
                    <div class="col-md-3">
                        <a href="#" class="btn btn-primary btn-block" >BTN</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection