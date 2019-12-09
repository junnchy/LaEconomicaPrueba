@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Listado de Usuarios</h1>
            </div>
            <div class="col-4">
                    <a href="{{ route('usuarios.index') }}" class="btn btn-danger"> Volver</a>
            </div>
        </div>
    </div>
    <div class="container">
        <a class="btn btn-primary btn-sm" href="{{ route('usuarios.create') }}">Crear Nuevo Usuario</a>
    </div>
    <div class="container mt-5">
        <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                    <tr>
                        <td scope="mt-2">{{ $user->id }}</td>
                        <td class="mt-2">{{ $user->name }}</td>
                        <td class="mt-2">{{ $user->email }}</td>
                        @foreach ($roles as $rol)
                            @if ($user->rol_id == $rol->id)
                                <td class="mt-2">{{ $rol->nombre_rol }}</td>
                            @endif                           
                        @endforeach
                        <td>
                            <a href="{{route('usuarios.edit', $user)}}" class="btn btn-warning btn-sm">Editar</a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
        </table>
    </div>
@endsection


