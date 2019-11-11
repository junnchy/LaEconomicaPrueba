<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use App\Cliente;
use App\CategoriaClientes;
use App\CondicionIva;
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
        return view('clientes.home', compact('clientes','categorias','condicionesIva'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('clientes.home');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required',
            'cuit' => 'required',
        ]);
        $cliente = new Cliente();
        $cliente->nombre = $request->nombre;
        $cliente->cuit = $request->cuit;
        $cliente->telefono = $request->telefono;
        $cliente->celular = $request->celular;
        $cliente->email = $request->email;
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
        return view('clientes.editar', compact('cliente', 'categorias', 'condicionesIva'));
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
        $validatedData = $request->validate([
            'nombre' => 'required',
            'cuit' => 'required'
        ]);

        $cliente = App\Cliente::findOrFail($id);
        
        $cliente->nombre = $request->nombre;
        $cliente->cuit = $request->cuit;
        $cliente->telefono = $request->telefono;
        $cliente->celular = $request->celular;
        $cliente->email = $request->email;
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
