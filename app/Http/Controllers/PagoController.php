<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pago;
use App\Venta;

class PagoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            $pago = new Pago();
            $pago->importe = $request->importe;
            $pago->pesos = $request->pesos;
            $pago->dolares = $request->dolares;
            $pago->caja_id = 1;
            $pago->ctac_id = $request->ctac_id;
            $pago->save();
            $venta = Venta::findOrFail($request->vta_id);
            $pago->ventas()->attach($venta,[]);

            /* Hay que ajustar... que pasa el el pago es para varias ventas -- generalizar */
            $venta->saldo = $venta->saldo - $pago->importe;
            $venta->save();


            return response()->json([
                'message' => 'Pago Cargado',
                'pago'=> $pago
            ], 200);


        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
