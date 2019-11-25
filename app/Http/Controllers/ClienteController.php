<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateClienteRequest;
use App\Http\Requests\UpdateClienteRequest;
use App;
use App\Cliente;
use App\CategoriaClientes;
use App\CondicionIva;
use App\Localidad;
use Illuminate\Support\Facades\DB;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clientes = Cliente::all();
        $categorias = CategoriaClientes::all();
        $condicionesIva = CondicionIva::all();
        $localidades = Localidad::all();
        return view('clientes.home', compact('clientes','categorias','condicionesIva','localidades'));
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
     * @param  \Illuminate\Http\CreateClienteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateClienteRequest $request)
    {
        $cliente = new Cliente();
        $cliente->nombre = $request->nombre;
        $cliente->cuit = $request->cuit;
        $cliente->telefono = $request->telefono;
        $cliente->celular = $request->celular;
        $cliente->email = $request->email;
        $cliente->direccion = $request->direccion;
        $cliente->localidad_id = $request->localidad_id;
        $cliente->cat_clientes_id = $request->categoria_id;
        $cliente->condicion_iva_id = $request->condicion_iva_id;
        $cliente->save();

        return back()->with('mensaje', 'Cliente Agregado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cliente = Cliente::findOrFail($id);
        $categorias = CategoriaClientes::all();
        $condicionesIva = CondicionIva::all();
        $localidades = Localidad::all();
        return view('clientes.editar', compact('cliente', 'categorias', 'condicionesIva', 'localidades'));
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
     * @param  \Illuminate\Http\UpdateClienteRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateClienteRequest $request, $id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->nombre = $request->nombre;
        $cliente->cuit = $request->cuit;
        $cliente->telefono = $request->telefono;
        $cliente->celular = $request->celular;
        $cliente->email = $request->email;
        $cliente->direccion = $request->direccion;
        $cliente->localidad_id = $request->localidad_id;
        $cliente->cat_clientes_id = $request->categoria_id;
        $cliente->condicion_iva_id = $request->condicion_iva_id;
        $cliente->save();

        return back()->with('mensaje', 'Cliente Actualizado');
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
