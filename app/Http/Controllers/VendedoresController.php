<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateVendedorRequest;
use App\Http\Requests\UpdateVendedorRequest;
use App\Vendedor;
use App\Localidad;
use App\User;
use App\Rol;



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
     * @param  \Illuminate\Http\CreateVendedorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateVendedorRequest $request)
    {
        $validated = $request->validated();
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
    public function show($id)
    {
        $vendedor = Vendedor::findOrFail($id);
        $localidades = Localidad::all();
        return view('vendedores.editar', compact('vendedor', 'localidades'));
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
     * @param  \Illuminate\Http\UpdateVendedorRequest $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVendedorRequest $request, $id)
    {
        $validated = $request->validated();
        $vendedor = Vendedor::findOrFail($id);
        $vendedor->nombre = $request->nombre;
        $vendedor->cuil = $request->cuil;
        $vendedor->dni = $request->dni;
        $vendedor->telefono = $request->telefono;
        $vendedor->celular = $request->celular;
        $vendedor->email = $request->email;
        $vendedor->direccion = $request->direccion;
        $vendedor->localidad_id = $request->localidad_id;
        $vendedor->save();
        $user = User::findOrFail($vendedor->user_id);
        $user->name = $request->nombre;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save(); 

        return back()->with('mensaje', 'Vendedor Actualizado');

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
