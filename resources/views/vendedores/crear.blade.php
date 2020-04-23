@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Asignar Nuevo Vendedor</h1>
            </div>
            <div class="col-4">
                    <a href="{{route('vendedores.index')}}" class="btn btn-danger"> Volver</a>
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
                        <label>Usuario</label>
                        <select 
                            class="form-control" 
                            name="user_id" 
                            type="number">
                            <option>{{null}}</option>
                            @foreach ($users as $us)
                                <option value="{{ $us->id }}">
                                    {{$us->nombre}}
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Número de Puesto</label>
                        <input 
                            type="number"
                            class="form-control"
                            name="nro_puesto"
                            placeholder="Número de Puesto"
                            value="{{old('nro_puesto')}}"
                        />
                    </div>               
                </div>                
                <button type="submit" class="btn btn-primary btn-block">Agregar</button>
            </form>
        </div>
    </div>
@endsection