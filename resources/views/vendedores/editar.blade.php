@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Sección Vendedores</h1>
            </div>
            <div class="col-4">
                    <a href="{{ route('vendedores.index') }}" class="btn btn-danger"> Volver</a>
            </div>
        </div>
        <div class="container mt-5">
                <h3>Nombre del Vendedor: <strong>{{$vendedor->nombre}}</strong></h3>
        </div>
        <div class="container">
            <form method="POST" action="{{route('vendedores.update', $vendedor)}}">
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
                        <label>Nombre y Apellido</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            value="{{$vendedor->nombre}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>DNI</label>
                        <input 
                            type="number"
                            class="form-control"
                            name="dni"
                            placeholder="DNI"
                            value="{{$vendedor->dni}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>CUIL</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="cuil" 
                            placeholder="CUIL"
                            value="{{$vendedor->cuil}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Teléfono</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="telefono" 
                            placeholder="Teléfono"
                            value="{{$vendedor->telefono}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Celular</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="celular" 
                            placeholder="Celular"
                            value="{{$vendedor->celular}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="email" 
                            placeholder="Email"
                            value="{{$vendedor->email}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Dirección</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="direccion" 
                            placeholder="Dirección"
                            value="{{$vendedor->direccion}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Localidad</label>
                        <select class="form-control" 
                            name="localidad_id" 
                            type="number">
                            <option>{{null}}</option>
                            @foreach ($localidades as $loc)
                                <option value="{{ $loc->id }}" @if($vendedor->localidad_id == $loc->id) selected="selected" @endif>{{$loc->cod_postal}} - {{$loc->localidad}}, {{$loc->provincia}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                            class="form-control" 
                            type="password" 
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation">Password Confirm</label>
                        <input 
                            class="form-control" 
                            type="password" 
                            name="password_confirmation"
                            placeholder="Password Confirmation"
                        />
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