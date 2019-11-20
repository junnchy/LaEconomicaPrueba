@extends('layouts.app')

@section('content')

    <div class="container">
        <h1 class="display-4">Usuarios</h1>
        <hr>

        <a class="btn btn-primary btn-sm" href="{{ route('usuarios.create') }}">Crear Nuevo Usuario</a><br>
        
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
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
                            <a class="btn btn-warning btn-sm" 
                                href="{{ route('usuarios.edit', $user) }}">Editar</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    
@endsection

