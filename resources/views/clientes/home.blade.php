@extends('layouts.app')

@section('content')
    <div class="container">

        <div class="row">
            <div class="col-8">
                    <h1>Sección Clientes</h1>
            </div>
            <div class="col-4">
                    <a href="{{ url()->previous() }}" class="btn btn-danger"> Volver</a>
            </div>
        </div>
        
        <div class="container">
            <form method="POST" action="/clientes">
                @csrf
                <div class="form-group mt-5">
                    <h3>Ingreso de Nuevo Cliente</h3>

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
                        <label>Nombre y Apellido/Razón Social</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            value="{{old('nombre')}}"
                        />
                    </div>
                    <div class="form-group">
                        <label>CUIT/CUIL</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="cuit" 
                            placeholder="CUIT/CUIL"
                            value="{{old('cuit')}}"
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
                    <div class="form-group">
                        <label>Localidad</label>
                        <select class="form-control" 
                            name="localidad_id" 
                            type="number">
                            <option>{{null}}</option>
                            @foreach ($localidades as $loc)
                                <option value="{{ $loc->id }}">{{$loc->cod_postal}} - {{$loc->localidad}}, {{$loc->provincia}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Categoría Cliente</label>
                        <select class="form-control" 
                            name="categoria_id" 
                            type="number">
                            <option>{{null}}</option>
                            @foreach ($categorias as $cat)
                                <option value="{{ $cat->id }}">{{$cat->denominacion}}</option>
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
                                <option value="{{ $con->id }}">{{$con->denominacion}}</option>
                            @endforeach
                        </select>
                    </div> 
                </div>
                <button type="submit" class="btn btn-primary btn-block">Agregar</button>
            </form>
        </div>

        <div class="container mt-5">
                <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre y Apellido/Razón Social</th>
                            <th scope="col">CUIT/CUIL</th>    
                            <th scope="col">Categoría Cliente</th>
                            <th scope="col">Condición de IVA</th>
                            <th scope="col">Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($clientes as $cliente)
                                <tr>
                                    <th scope="mt-2">{{$cliente->id}}</th>
                                    <td class="mt-2">{{$cliente->nombre}}</td>
                                    <td class="mt-2">{{$cliente->cuit}}</td>
                                    <td class="mt-2">
                                        @foreach ($categorias as $cat)
                                            @if ($cliente->cat_clientes_id == $cat->id)
                                                {{$cat->denominacion}}
                                            @endif
                                        @endforeach</td>
                                    <td class="mt-2">
                                        @foreach ($condicionesIva as $con)
                                            @if ($cliente->condicion_iva_id == $con->id)
                                                {{$con->denominacion}}                                                
                                            @endif                                            
                                        @endforeach</td>
                                    <td>
                                        <a href="{{route('clientes.show', $cliente)}}" class="btn btn-warning btn-sm">Ver Más</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                </table>
        </div>

    </div>
@endsection