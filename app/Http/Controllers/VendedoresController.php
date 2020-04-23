<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateVendedorRequest;
use App\Http\Requests\UpdateVendedorRequest;
use App\Vendedor;
use App\Localidad;
use App\User;
use Spatie\Permission\Models\Role;



class VendedoresController extends Controller
{
    function __construct()
    {
        //$this->middleware('permission:crear-vendedor')->only('store');
        //$this->middleware('permission:editar-vendedor')->only(['show','update']);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $vendedores = Vendedor::all();
        return view('vendedores.home', compact('vendedores'));  
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = User::all();
        return view('vendedores.crear', compact('users'));
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
        $vendedor = new Vendedor();
        $vendedor->user_id = $request->user_id;
        $vendedor->nro_puesto = $request->nro_puesto;
        $vendedor->contador_presupuestos = 0;
        $vendedor->save();
        
        return back()->with('mensaje', 'Vendedor Agregado');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $vendedor = Vendedor::findOrFail($id);
        return view('vendedores.editar', compact('vendedor'));
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
     * @param  \Illuminate\Http\Request $request
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
