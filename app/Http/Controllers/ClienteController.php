<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
    public function index(Request $request)
    {

        if($request->ajax()){
            $clientes = Cliente::all();
            return response()->json($clientes);
        } else {
            $clientes = Cliente::all();
            $categorias = CategoriaClientes::all();
            $condicionesIva = CondicionIva::all();
            $localidades = Localidad::all();
            return view('clientes.home', compact('clientes','categorias','condicionesIva','localidades'));
        }
        
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

        if($request->ajax()){
            $cliente = new Cliente();
            $cliente->nombre = $request->nombre;
            $cliente->cuit = $request->cuit;
            $cliente->telefono = $request->telefono;
            $cliente->celular = $request->celular;
            $cliente->email = $request->email;
            $cliente->direccion = $request->direccion;
            $cliente->localidad_id = $request->localidad_id;
            $cliente->cat_clientes_id = $request->cat_clientes_id;
            $cliente->condicion_iva_id = $request->condicion_iva_id;
            $cliente->save();
            
            return response()->json([
                'producto' => $cliente,
                'message' => 'Cliente Agregado'
            ], 200);

        } else {
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
            $cliente->direccion = $request->direccion;
            $cliente->localidad_id = $request->localidad_id;
            $cliente->cat_clientes_id = $request->cat_clientes_id;
            $cliente->condicion_iva_id = $request->condicion_iva_id;
            $cliente->save();
    
            return back()->with('mensaje', 'Cliente Agregado');
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
        if($request->ajax()){
            $cliente = App\Cliente::with(['localidad.provincia','categoria','condicion_iva'])->findOrFail($id);
            return response()->json($cliente);
        }else {
            $cliente = Cliente::findOrFail($id);
            $categorias = CategoriaClientes::all();
            $condicionesIva = CondicionIva::all();
            $localidades = Localidad::all();
            return view('clientes.editar', compact('cliente', 'categorias', 'condicionesIva', 'localidades'));
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
        if ($request->ajax()) {
            $cliente = Cliente::findOrFail($id);
            $cliente->nombre = $request->nombre;
            $cliente->cuit = $request->cuit;
            $cliente->telefono = $request->telefono;
            $cliente->celular = $request->celular;
            $cliente->email = $request->email;
            $cliente->direccion = $request->direccion;
            $cliente->localidad_id = $request->localidad_id;
            $cliente->cat_clientes_id = $request->cat_clientes_id;
            $cliente->condicion_iva_id = $request->condicion_iva_id;
            $cliente->save();
            
            return response()->json([
                'producto' => $cliente,
                'message' => 'Cliente Actualizado'
            ], 200);

        }else {
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
            $cliente->direccion = $request->direccion;
            $cliente->localidad_id = $request->localidad_id;
            $cliente->cat_clientes_id = $request->cat_clientes_id;
            $cliente->condicion_iva_id = $request->condicion_iva_id;
            $cliente->save();
    
            return back()->with('mensaje', 'Cliente Actualizado');
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
