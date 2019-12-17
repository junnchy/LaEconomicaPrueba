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
            <h3>Nombre del Usuario: <strong>{{$user->name}}</strong></h3>
        </div>
        
        <div class="container">
            <form method="POST" action="{{route('usuarios.update', $user->id)}}">
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
                            value="{{$user->name}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="email" 
                            placeholder="Email"
                            value="{{$user->email}}"
                        />
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
                    <div class="checkbox">
                        <label for="checkbox">Roles</label><br>
                        @foreach ($roles as $id => $descripcion)
                            <label for="roles">
                                    <input type="checkbox" 
                                        name="roles[]"
                                        value="{{ $id }}"
                                    />
                                {{ $descripcion }}
                            </label>                                                            
                        @endforeach
                    </div>                
                </div>
                
                <button type="submit" class="btn btn-primary btn-block">Agregar</button>
            </form>
        </div> 
    </div>
@endsection