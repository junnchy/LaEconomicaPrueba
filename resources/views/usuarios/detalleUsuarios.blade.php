@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-8">
                    <h1>Listado de Usuarios</h1>
            </div>
            <div class="col-4">
                    <a href="{{ route('homeUsers') }}" class="btn btn-danger"> Volver</a>
            </div>
        </div>
    </div>
    
    <div class="container mt-5">
        <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Permisos</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                    <tr>
                        <td scope="mt-2">{{ $user->id }}</td>
                        <td class="mt-2">{{ $user->name }}</td>
                        <td class="mt-2">{{ $user->email }}</td>
                        <td>
                            {{ $user->getRoleNames()->implode(' - ') }}
                        </td>
                        <td>
                            {{ $user->getPermissionsViaRoles()->pluck('name')->implode(' - ') }}
                        </td>
                        <td>
                            <a href="{{route('usuarios.edit', $user)}}" class="btn btn-warning btn-sm">Editar</a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
        </table>
    </div>
@endsection


