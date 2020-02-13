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
        
        <div class="container">
            <form method="POST" action="{{route('vendedores.store')}}">
                @csrf
                <div class="form-group mt-5">
                    <h3>Ingreso de Nuevo Vendedor</h3>

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
                        <label>Nombre y Apellido</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            value="{{old('nombre')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Puesto</label>
                        <input 
                            type="number"
                            class="form-control"
                            name="puesto"
                            placeholder="N Puesto"
                            value="{{old('puesto')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>DNI</label>
                        <input 
                            type="number"
                            class="form-control"
                            name="dni"
                            placeholder="DNI"
                            value="{{old('dni')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>CUIL</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="cuil" 
                            placeholder="CUIL"
                            value="{{old('cuil')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Teléfono</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="telefono" 
                            placeholder="Teléfono"
                            value="{{old('telefono')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Celular</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="celular" 
                            placeholder="Celular"
                            value="{{old('celular')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="email" 
                            placeholder="Email"
                            value="{{old('email')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>Dirección</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="direccion" 
                            placeholder="Dirección"
                            value="{{old('direccion')}}"
                        />
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label>Provincia</label>
                                <select class="form-control" 
                                    name="provincia_id" 
                                    type="number">
                                    <option>{{null}}</option>
                                    @foreach ($provincias as $pro)
                                        <option value="{{ $pro->id }}">{{$pro->iso_nombre}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label>Localidad</label>
                                <select class="form-control" 
                                    name="localidad_id" 
                                    type="number">
                                    <option>{{null}}</option>
                                    @foreach ($localidades as $loc)
                                        <option value="{{ $loc->id }}">{{$loc->nombre}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
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

        <div class="container mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nro. Puesto</th>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">CUIL</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($vendedores as $vendedor)
                        <tr>
                            <th scope="mt-2">{{$vendedor->id}}</th>
                            <td class="mt-2">{{$vendedor->nombre}}</td>
                            <td class="mt-2">{{$vendedor->cuil}}</td>
                            <td>
                                <a href="{{route('vendedores.show', $vendedor)}}" class="btn btn-warning btn-sm">Ver Más</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection