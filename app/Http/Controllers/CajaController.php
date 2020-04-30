<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Caja;
use App\CarteraCheque;
use App\CarteraCupone;

use Carbon\Carbon;

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

            $f1 = new Carbon();
            $f1 = Carbon::today();
            $f2 = new Carbon();
            $f2 = Carbon::today();
            $f2->addDays(1);
            $f2->startOfDay();

            $cajas = Caja::with('pagos', 'carteraCupones.cupones')->get();
            
            foreach ($cajas as $caja) {
                $this->filtarFecha($caja, $f1, $f2);
                $this->calcularTotales($caja);
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

            /* Hay que arreglar eso */

            $caja = Caja::with(
                'pagos.cuenta.cliente',
                'carteraCupones.cupones.pago.cuenta.cliente', 
                'carteraCupones.cupones.tarjeta',
                'pagos.fdp'
                )
                ->findOrFail($id);
            

            if($request->fechas != null){


                $dd = substr($request->fechas[0] ,8,10);
                $mm = substr($request->fechas[0],-5,-3);
                $yyyy = substr($request->fechas[0],0,4);
                $f1 = Carbon::create($yyyy, $mm, $dd);

                $dd1 = substr($request->fechas[1],8,10);
                $mm1 = substr($request->fechas[1],-5,-3);
                $yyyy1 = substr($request->fechas[1],0,4);
                $f2 =Carbon::create($yyyy1, $mm1, $dd1);
               
            }else { 
                $f1 = new Carbon();
                $f1 = Carbon::today();
                $f2 = new Carbon();
                $f2 = Carbon::today();
                $f2->addDays(1);
                $f2->startOfDay();
            }

            $this->filtarFecha($caja, $f1, $f2);
            $this->calcularTotales($caja);

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


    private function calcularTotales($caja){
        $caja->vEfectivo = 0;
        $caja->vTarjeta = 0;
        foreach ($caja->fpagos as $pago) {
            $caja->vEfectivo = $caja->vEfectivo + $pago->pesos;
        }
        foreach ($caja->fcupones as $cupon) {
            $caja->vTarjeta = $caja->vTarjeta + $cupon->importe;
        }
        
        $caja->vTotales = $caja->vEfectivo + $caja->vTarjeta;
    }

    private function filtarFecha($caja, $f1, $f2){
        $caja->fpagos = $caja->pagos->whereBetween('created_at', [$f1, $f2]);
        $caja->fcupones = $caja->carteraCupones->cupones->whereBetween('created_at', [$f1, $f2]);
    }
}
