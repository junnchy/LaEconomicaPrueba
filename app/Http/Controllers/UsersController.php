<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\User;
use Spatie\Permission\Models\Role;

class UsersController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
        //$this->middleware('permission:crear-usuario')->only(['create','store']);
        //$this->middleware('permission:editar-usuario')->only(['edit','update']);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return view('usuarios.detalleUsuarios', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('usuarios.crear');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\CreateUserRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserRequest $request)
    {
        $validated = $request->validated();
        $user = new User();
        $user->nombre = $request->nombre;
        $user->email = $request->email;
        $user->dni = $request->dni;
        $user->cuil = $request->cuil;
        $user->celular = $request->celular;
        $user->telefono = $request->telefono;
        $user->fecha_nacimiento = $request->fecha_nacimiento;
        $user->direccion = $request->direccion;
        $user->localidad_id = $request->localidad_id;
        $user->password = $request->password;
        $user->save();    

        return back()->with('mensaje', 'Usuario Agregado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return view('usuarios.editar', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\UpdateUserRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, $id)
    {
        $validated = $request->validated();
        $user = User::findOrFail($id);
        $user->nombre = $request->nombre;
        $user->email = $request->email;
        $user->dni = $request->dni;
        $user->cuil = $request->cuil;
        $user->celular = $request->celular;
        $user->telefono = $request->telefono;
        $user->fecha_nacimiento = $request->fecha_nacimiento;
        $user->direccion = $request->direccion;
        $user->localidad_id = $request->localidad_id;
        $user->password = $request->password;
        $user->save();       

        return back()->with('mensaje', 'Usuario Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
