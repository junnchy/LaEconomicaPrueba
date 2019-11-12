@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Categorias</h1>
            </div>
            <div class="col-4">
                    <a href="{{ url()->previous() }}" class="btn btn-danger"> Volver</a>
            </div>
        </div>
        
        <div class="container">
            <form method="POST" action="{{route('categoria.store')}}">
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
                        <label for="id_cat">Categoria padre</label>
                        <select class="form-control" name="categoria_id" type="number">
                            <option>{{null}}</option>
                            @foreach ($categorias as $item)
                                <option>{{$item->id}} <p>- {{$item->nombre}}</p></option>
                                
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                            <label for="id_prov">Proveedor</label>
                            <select class="form-control" name="proveedor_id" type="number">
                                <option>{{null}}</option>
                                @foreach ($proveedores as $item)
                                    <option>{{$item->id}} <p>- {{$item->nombre}}</p></option>
                                    
                                @endforeach
                            </select>
                        </div>
                    <div class="form-group">
                        <label>Descuento</label>
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
                <button type="submit" class="btn btn-primary btn-block">Agregar</button>
            </form>
        </div>

        <div class="container mt-5">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">ID Categoria</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria Padre</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <!--Esto en lenguaje front debe ser recursivo y mas lindo <Juanchi>-->
                <tbody>
                    @foreach ($categorias as $categoria)
                        @if ($categoria->categoria_id == null)
                            <tr>
                                <th scope="row">{{$categoria->id}}</th>
                                <td><strong>{{$categoria->nombre}}</strong></td>
                                <td>{{ $categoria->padre['nombre']}}</td>
                                <td>
                                    <a href="{{route('categoria.show', $categoria)}}" class="btn btn-primary">Ver Detalles</a>
                                </td>
                            </tr>
                            @foreach ($categoria->children as $item)
                                <tr>
                                    <th scope="row">{{$item->id}}</th>
                                    <td>--{{$item->nombre}}</td>
                                    <td>{{ $item->padre['nombre']}}</td>
                                    <td>
                                        <a href="{{route('categoria.show', $item)}}" class="btn btn-primary">Ver Detalles</a>
                                    </td>
                                </tr>
                                @if ($item->children != null)
                                    @foreach ($item->children as $item2)
                                        <tr>
                                            <th scope="row">{{$item2->id}}</th>
                                            <td>----{{$item2->nombre}}</td>
                                            <td>{{ $item2->padre['nombre']}}</td>
                                            <td>
                                                <a href="{{route('categoria.show', $item2)}}" class="btn btn-primary">Ver Detalles</a>
                                            </td>
                                        </tr> 
                                    @endforeach
                                @endif
                            @endforeach
                        @endif
                    @endforeach
                </tbody>
            </table>
    </div>
@endsection