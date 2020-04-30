<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Caja;
use App\CarteraCheque;
use App\CarteraCupone;

class CajaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $cajas = Caja::with('pagos', 'carteraCupones.cupones')->get();
            foreach ($cajas as $caja) {
                foreach ($caja->pagos as $pago) {
                    $caja->pesos = $caja->pesos + $pago->pesos;
                }
                foreach ($caja->carteraCupones->cupones as $cupon) {
                    $caja->tarjetaTotal = $caja->tarjetaTotal + $cupon->importe;
                }
            }   
            return response()->json($cajas);
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
            $caja = new Caja();
            $caja->pesos = 0;
            $caja->dolares = 0;
            $caja->save();
            
            $cCheq = new CarteraCheque();
            $cCheq->caja_id = $caja->id;
            $cCheq-> save();

            $cCup = new CarteraCupone();
            $cCup->caja_id = $caja->id;
            $cCup-> save();

            return response()->json([
                'message'=> 'Caja Creada'
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
            $caja = Caja::with('pagos.cuenta.cliente', 'carteraCupones.cupones')->findOrFail($id);
            foreach ($caja->pagos as $pago) {
                $caja->pesos = $caja->pesos + $pago->pesos;
            }
            foreach ($caja->carteraCupones->cupones as $cupon) {
                $caja->tarjetaTotal = $caja->tarjetaTotal + $cupon->importe;
            }
            return response()->json($caja);
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
