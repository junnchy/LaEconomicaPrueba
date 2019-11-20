<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vendedor;
use App\Localidad;
use App\User;
use App\Rol;
use App\Http\Requests\CreateUserRequest;


class VendedoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vendedores = Vendedor::all();
        $localidades = Localidad::all();
        return view('vendedores.home', compact('vendedores','localidades'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\CreateUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserRequest $request)
    {
        $user = new User();
        $user->name = $request->nombre;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->rol_id = Rol::where("nombre_rol","=","Vendedor")->get()->first()->id;
        $user->save();
                
        $vendedor = new Vendedor();
        $vendedor->user_id = $user->id;
        $vendedor->nombre = $request->nombre;
        $vendedor->cuil = $request->cuil;
        $vendedor->dni = $request->dni;
        $vendedor->telefono = $request->telefono;
        $vendedor->celular = $request->celular;
        $vendedor->email = $request->email;
        $vendedor->direccion = $request->direccion;
        $vendedor->localidad_id = $request->localidad_id;
        $vendedor->save();
        
        return back()->with('mensaje', 'Vendedor Agregado');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($nro_puesto)
    {
        $vendedor = Vendedor::findOrFail($nro_puesto);
        $localidades = Localidad::all();
        return view('vendedor.editar', compact('cliente', 'localidades'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
