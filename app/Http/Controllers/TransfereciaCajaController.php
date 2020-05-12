<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Caja;
use App\TransfereciaCaja;

class TransfereciaCajaController extends Controller
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
            $nt = new TransfereciaCaja();
            $cajaE = Caja::findOrFail($request->caja_emisora);
            $cajaR = Caja::findOrFail($request->caja_receptora);
            if($request->pesos > 0){
                $cajaE->restarPesos($request->pesos);
                $cajaR->sumarPesos($request->pesos);
            }
            if($request->dolares >0){
                $cajaE->restarDolares($request->dolares);
                $cajaR->sumarDolares($request->dolares);
            }
            $nt->caja_emisora = $cajaE->id;
            $nt->caja_receptora = $cajaR->id;
            $nt->pesos = $request->pesos;
            $nt->dolares = $request->dolares;
            $nt->concepto = $request->concepto;
            $nt->save();

            return response()->json([
                'message'=> 'Transferencia Agregada'
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
