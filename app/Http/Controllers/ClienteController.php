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
use App\Exports\ClientesExport;
use App\Exports\ClientesFechaExport;
use App\Exports\ClientesTablaExport;

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
            $clientes = Cliente::with('localidad.provincia', 'condicion_iva')->get();
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

        if($request->ajax()){
            
            $validated = $request->validated();

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
                'cliente' => $cliente,
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
            $cliente = App\Cliente::with(['localidad.provincia','categoria','condicion_iva', 'cuentas.pagosConSaldo',
            'presupuestos.vendedor', 'presupuestos.estado', 'cuentas.ventasConSaldo.fdp'])->findOrFail($id);
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
     * @param  \Illuminate\Http\UpdateClienteRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateClienteRequest $request, $id)
    {
        if ($request->ajax()) {

            $validated = $request->validated();
            
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
     *s
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function excel(ClientesExport $clientesExport){

        return new ClientesExport;

        /* return Excel::download(new ClientesExport, 'clientes.xlsx'); */
    }

    public function excelFecha(){

        return (new ClientesFechaExport('2020-05-06'))->download('clientesFiltro.xlsx');

    }

    public function excelTabla(){

        return (new ClientesTablaExport)->download('clientes.xlsx');

    }

}
