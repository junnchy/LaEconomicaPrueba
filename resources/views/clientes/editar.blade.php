@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Sección Clientes</h1>
            </div>
            <div class="col-4">
                    <a href="{{ route('clientes.index') }}" class="btn btn-danger"> Volver</a>
            </div>
        </div>
        <div class="container mt-5">
                <h3>Nombre del Cliente: <strong>{{$cliente->nombre}}</strong></h3>
        </div>
        <div class="container">
            <form method="POST" action="{{route('clientes.update', $cliente)}}">
                @method("PUT")
                @csrf
                <div class="form-group mt-5">
                    <h3>Modificar Datos</h3>

                    @if (session('mensaje'))
                    <div class="alert alert-success alert-dismissible fade show">
                        {{session('mensaje')}} 
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    @endif

                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nombre" 
                            value="{{$cliente->nombre}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>CUIT/CUIL</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="cuit" 
                            placeholder="CUIT/CUIL"
                            value="{{$cliente->cuit}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Teléfono</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="telefono" 
                            placeholder="Teléfono"
                            value="{{$cliente->telefono}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Celular</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="celular" 
                            placeholder="Celular"
                            value="{{$cliente->celular}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="email" 
                            placeholder="Email"
                            value="{{$cliente->email}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Categoría Cliente</label>
                        <select class="form-control" 
                            name="categoria_id" 
                            type="number">
                            <option>{{null}}</option>                       
                            @foreach ($categorias as $cat)
                                <option value="{{ $cat->id }}" @if($cliente->cat_clientes_id == $cat->id) selected="selected" @endif>{{$cat->denominacion}}</option>                                 
                            @endforeach
                        </select>
                    </div>   
                    <div class="form-group">
                        <label>Condición de IVA</label>
                        <select class="form-control" 
                            name="condicion_iva_id"
                            type="number">
                            <option>{{null}}</option>
                            @foreach ($condicionesIva as $con)
                                <option value="{{ $con->id }}" @if($cliente->condicion_iva_id == $con->id) selected="selected" @endif>{{$con->denominacion}}</option>
                            @endforeach
                        </select>
                    </div>                                
                </div>
                
                
                
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif  
                <button type="submit" class="btn btn-warning btn-block">Actualizar</button>
            </form>
        </div>
        
    </div>
@endsection