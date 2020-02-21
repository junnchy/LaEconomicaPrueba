<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateVendedorRequest;
use App\Http\Requests\UpdateVendedorRequest;
use App\Vendedor;
use App\Localidad;
use App\Provincia;
use App\User;

use Spatie\Permission\Models\Role;



class VendedoresController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:crear-vendedor')->only('store');
        $this->middleware('permission:editar-vendedor')->only(['show','update']);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vendedores = Vendedor::all();
        $localidades = Localidad::with('provincia')->orderBy('nombre')->get();
        $provincias = Provincia::with('localidades')->get();
        return view('vendedores.home', compact('vendedores','localidades', 'provincias'));
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
        $user->save();
        $user->assignRole(Role::where('name','vend')->first());
        $vendedor = new App\Vendedor();
        $vendedor->id = $user->id;
        $vendedor->user_id = $user->id;
        $vendedor->puesto = $request->puesto;
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
    public function show(Request $request, $id)
    {
        if($request->ajax()){
            $user = Vendedor::findOrFail($id);
            return response()->json($user);
        }else {
            $vendedor = Vendedor::findOrFail($id);
            $localidades = Localidad::all();
            $provincias = Provincia::with('localidades')->get();
            return view('vendedores.editar', compact('vendedor', 'localidades', 'provincias'));
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

    public function recuentoPresupuestos(Request $request, $id)
    {   
        if ($request->ajax()) {
            $vendedor = Vendedor::with('presupuestos')->findOrFail($id);
            $presupuestos['enEspera'] = 0;
            $presupuestos['confirmados'] = 0;
            $presupuestos['rechazados'] = 0;
            $presupuestos['enSeguimiento'] = 0;
            foreach ($vendedor->presupuestos as $key => $presupuesto) {
                if($presupuesto['estadoPresupuesto_id'] === 1){
                    $presupuestos['enEspera'] = $presupuestos['enEspera'] + 1;
                }
                if($presupuesto['estadoPresupuesto_id'] === 2){
                    $presupuestos['enSeguimiento'] = $presupuestos['enSeguimiento'] + 1;
                }
                if($presupuesto['estadoPresupuesto_id'] === 3){
                    $presupuestos['confirmados'] = $presupuestos['confirmados'] + 1;
                }
                if($presupuesto['estadoPresupuesto_id'] === 4){
                    $presupuestos['rechazados']= $presupuestos['rechazados']+ 1;
                }
            }
            return response()->json($presupuestos);
        }
    }
    
}
