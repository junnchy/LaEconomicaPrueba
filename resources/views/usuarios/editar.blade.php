@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Editar Usuario</h1>
            </div>
            <div class="col-4">
                    <a href="{{route('usuarios.index')}}" class="btn btn-danger"> Volver</a>
            </div>
        </div>

        <div class="container mt-5">
            <h3>Nombre del Usuario: <strong>{{$usuario->name}}</strong></h3>
        </div>
        
        <div class="container">
            <form method="POST" action="{{route('usuarios.update', $usuario)}}">
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

                    @if ($errors->any())
                        @foreach ($errors->all() as $error)
                            <div class="alert alert-danger alert-dismissible fade show">
                                {{ $error }}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        @endforeach
                    @endif

                    <div class="form-group">
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            value="{{$usuario->name}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="email" 
                            placeholder="Email"
                            value="{{$usuario->email}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Rol</label>
                        <select class="form-control" 
                            name="rol_id" 
                            type="number">
                            @foreach ($roles as $rol)
                                <option value="{{ $rol->id }}" @if($usuario->rol_id == $rol->id) selected="selected" @endif>{{$rol->nombre_rol}}</option>
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
                
                <button type="submit" class="btn btn-primary btn-block">Agregar</button>
            </form>
        </div> 
    </div>
@endsection