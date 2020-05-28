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
    public function index(Request $request)
    {
        if($request->ajax())
        {
            $usuarios = User::all();
            return response()->json($usuarios);  
        }
        else
        {
            $users = User::all();
            return view('usuarios.home', compact('users'));
        }  
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
        if($request->ajax())
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
            
            return response()->json([
                'usuario' => $user,
                'message' => 'Usuario Agregado'
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if($request->ajax())
        {
            $usuario = User::with(['localidad.provincia'])->findOrFail($id);
            return response()->json($usuario);
        }
        else
        {
            $user = User::findOrFail($id);
            return view('usuarios.editar', compact('user'));
        } 
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
        if ($request->ajax())
        {
            if ($request->has('password'))
            {
                $validatedData = $request->validate([
                    'password' => 'required|confirmed'
                ]);                
                $user = User::findOrFail($id);
                $user->password = $request->password;
                $user->save();
                return response()->json([
                    'usuario' => $user,
                    'message' => 'Contraseña Actualizada'
                ], 200);
            }
            else
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
                $user->save(); 
                return response()->json([
                    'usuario' => $user,
                    'message' => 'Usuario Actualizado'
                ], 200);   
            }                   
        }
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
