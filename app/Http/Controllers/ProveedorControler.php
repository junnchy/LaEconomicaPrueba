<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateProveedorRequest;
use App\Http\Requests\UpdateProveedorRequest;

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
    public function index()
    {
        $proveedores = Proveedor::all();
        return view('proveedores.home', compact('proveedores'));
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
     * @param  \Illuminate\Http\CreateProveedorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateProveedorRequest $request)
    {
        $validated = $request->validated();
        $proveedor = new Proveedor();
        $proveedor->nombre = $request->nombre;
        $proveedor->cuit = $request->cuit;
        $proveedor->telefono = $request->telefono;
        $proveedor->save();

        return back()->with('mensaje', 'Proveedor Agregado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $proveedor = App\Proveedor::findOrFail($id);
        $categorias = App\Categoria::all();

        return view('proveedores.editar', compact('proveedor', 'categorias'));

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
     * @param  \Illuminate\Http\UpdateProveedorRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProveedorRequest $request, $id)
    {
        $validated = $request->validated();
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
