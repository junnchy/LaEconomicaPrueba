<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\FormaDePago;

class FormaDePagoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            $fdps = FormaDePago::all();
            return response()->json($fdps);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->ajax()){
            

            $fdp = new FormaDePago();
            
            $fdp->descripcion = $request->descripcion;
            $fdp->coeficiente = $request->coeficiente;
            $fdp->recargo = $request->recargo;
            $fdp->estado = $request->estado;

            $fdp->save();
            
            return response()->json([
                'formaDePago' => $fdp,
                'message' => 'Forma de Pago Agregada'
            ], 200);

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
            $fdp = FormaDePago::findOrFail($id);
            return response()->json($fdp);
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
        if($request->ajax()){
            $fdp = FormaDePago::findOrFail($id);

            $fdp->descripcion = $request->descripcion;
            $fdp->coeficiente = $request->coeficiente;
            $fdp->recargo = $request->recargo;
            $fdp->estado = $request->estado;

            $fdp->save();
            
            return response()->json([
                'formaDePago' => $fdp,
                'message' => 'Forma de Pago Actualizada'
            ], 200);
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
