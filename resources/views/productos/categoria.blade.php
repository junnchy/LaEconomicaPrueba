@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Categorias</h1>
            </div>
            <div class="col-4">
                    <a href="/productos" class="btn btn-danger"> Volver</a>
            </div>
        </div>
        
        <div class="container">
            <form method="POST" action="/categoria">
                @csrf
                <div class="form-group mt-5">
                    <h3>Ingreso de Nueva Categoria</h3>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                        />
                    </div>
                    <div class="form-group">
                        <label>Id de Categoria Padre</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            name="categoria_id" 
                            placeholder="Id Padre"
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
                <button type="submit" class="btn btn-primary btn-block">Agregar</button>
            </form>
        </div>

        <div class="container mt-5">
            <div class="card-columns">
                @foreach ($categorias as $categoria)
                        <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{$categoria->nombre}}</h5>
                                <p class="card-text">{{$categoria->id}}</p>
                                <p class="card-text">Categoria Padre: <strong>{{ $categoria->padre['nombre']}}</strong></p> 
                                <a href="#" class="btn btn-primary">Ver Detalles</a>
                            </div>
                        </div>
                @endforeach
            </div>
        </div>
    </div>
    
@endsection