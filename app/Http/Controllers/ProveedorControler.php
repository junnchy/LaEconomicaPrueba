<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App;

use App\Proveedor;

use App\Categoria;

class ProveedorControler extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            $proveedores = Proveedor::with(['localidad.proveedores', 'condicion_iva.proveedores','categorias.proveedores'])->get();
            return response()->json($proveedores);
        } else {
            $proveedores = Proveedor::all();
            return view('proveedores.home', compact('proveedores'));
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('proveedores.home');
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

            $proveedor = new Proveedor();
            $proveedor->nombre = $request->nombre;
            $proveedor->cuit = $request->cuit;
            $proveedor->telefono = $request->telefono;
            $proveedor->direccion = $request->direccion;
            $proveedor->email = $request->email;
            $proveedor->condicion_iva_id = $request->condicion_iva_id;
            $proveedor->localidad_id = $request->localidad_id;
            $proveedor->save();
          
            return response()->json([
                'proveedor' => $proveedor,
                'message' => 'Success'
            ], 200);

        } else {
            $validatedData = $request->validate([
                'nombre' => 'required',
                'cuit' => 'required',
            ]);

            $proveedor = new Proveedor();
            $proveedor->nombre = $request->nombre;
            $proveedor->cuit = $request->cuit;
            $proveedor->telefono = $request->telefono;
            $proveedor->save();

            return back()->with('mensaje', 'Proveedor Agregado');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {

        $proveedor = App\Proveedor::with(['localidad.proveedores', 'condicion_iva.proveedores','categorias.proveedores'])->findOrFail($id);

        if($request->ajax()){
            return response()->json($proveedor);
        }
        else {
            return view('proveedores.editar', compact('proveedor', 'categorias'));
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
        if($request->ajax()){
            
            $proveedor = App\Proveedor::findOrFail($id);
    
            $proveedor->nombre = $request->nombre;
            $proveedor->cuit = $request->cuit;
            $proveedor->telefono = $request->telefono;
            $proveedor->direccion = $request->direccion;
            $proveedor->condicion_iva_id = $request->condicion_iva_id;
            $proveedor->email = $request->email;
            $proveedor->localidad_id = $request->localidad_id;
            if($request->id_cat != null){
                $categoria = Categoria::findOrFail($request->id_cat);
                $proveedor->categorias()->attach($categoria, ['descuento'=> $request->descuento]);
            }
            $proveedor->save();

            return response()->json([
                'proveedor' => $proveedor,
                'message' => 'Actualizado'
            ], 200);


        }else {
            $validatedData = $request->validate([
                'nombre' => 'required',
            ]);
    
            $proveedor = App\Proveedor::findOrFail($id);
    
            $proveedor->nombre = $request->nombre;
            $proveedor->telefono = $request->telefono;
            $proveedor->save();
    
            if ($request->id_cat != null) {
                
                $categoria = Categoria::findOrFail($request->id_cat);
                $proveedor->categorias()->attach($categoria, ['descuento'=> $request->descuento]);
            }
            
    
            return back()->with('mensaje', 'Proveedor Actualizado');
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
