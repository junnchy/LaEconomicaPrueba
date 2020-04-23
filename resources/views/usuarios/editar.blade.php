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
        
        <div class="container">
            <form method="POST" action="{{route('usuarios.update', $user->id)}}">
                @method("PUT")
                @csrf
                <div class="form-group mt-5">
                    <h3>Modificar Datos de: <strong>{{$user->nombre}}</strong></h3>
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
                            value="{{$user->nombre}}"
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
                        <label>DNI</label>
                        <input 
                            type="text"
                            class="form-control"
                            name="dni"
                            placeholder="DNI"
                            value="{{$user->dni}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>CUIL</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="cuil" 
                            placeholder="CUIL"
                            value="{{$user->cuil}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Teléfono</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="telefono" 
                            placeholder="Teléfono"
                            value="{{$user->telefono}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Celular</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="celular" 
                            placeholder="Celular"
                            value="{{$user->celular}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Fecha de Nacimiento</label>
                        <input 
                            type="date"
                            class="form-control" 
                            name="fecha_nacimiento"
                            value="{{$user->fecha_nacimiento}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Dirección</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="direccion" 
                            placeholder="Dirección"
                            value="{{$user->direccion}}"
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
                </div>
                
                <button type="submit" class="btn btn-primary btn-block">Agregar</button>
            
            </form>
        </div> 
    </div>
@endsection