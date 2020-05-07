<?php

namespace App\Http\Controllers;

use App\CuentaCliente;
use Illuminate\Http\Request;
use App\Pago;
use App\Venta;
use App\CuponTarjeta;
use App\Caja;
use App\Cheque;

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
            $pago->cargarDatos($request, $request->vtas_id);
            $pago->save();

            foreach ($request->vtas_id as $id_venta) {
                $venta = Venta::findOrFail($id_venta);
                $venta->actualizarSaldo($pago->importe);
                $pago->ventas()->attach($venta,[]);
            }
            
            $cta = CuentaCliente::with('ventas')->findOrFail($pago->ctac_id);
            $cta->actualizarSaldo();

            $caja = Caja::with('carteraCupones')->findOrFail(1);
            $caja->pesos = $caja->pesos + $pago->pesos;

            $this->cargarCupones($request, $caja, $pago, $cta);
            $this->cargaCheques($request, $caja, $pago, $cta);

            $caja->save();

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
    public function show(Request $request, $id)
    {
        if($request->ajax()){
            $pago = Pago::with('cupones.pago.cuenta.cliente', 'cheques', 'fdp', 'cuenta.cliente', 'cupones.tarjeta')->findOrFail($id);

            return response()->json($pago);
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

    private function cargarCupones($request, $caja, $pago, $cta){
        if(sizeof($request->cupones) > 0){
            foreach ($request->cupones as $cupon) {
                $nuevoCupon = new CuponTarjeta();
                $nuevoCupon->importe = $cupon['importe'];
                $nuevoCupon->cuotas = $cupon['cuotas'];
                $nuevoCupon->nro_cupon = $cupon['nro_cupon'];
                $nuevoCupon->tarjeta_id = $cupon['tarjeta_id'];
                $nuevoCupon->pago_id = $pago->id;
                $nuevoCupon->ctac_id = $cta->id;
                $nuevoCupon->cartera_id = $caja->carteraCupones['id'];
                $nuevoCupon->save();
            }
        }
    }

    private function cargaCheques($request, $caja, $pago, $cta){
        if(sizeof($request->cheques) > 0){
            foreach ($request->cheques as $cheque) {
                $nuevoCheque = new Cheque();
                $nuevoCheque->fecha_emision = $cheque['fecha_emision'];
                $nuevoCheque->fecha_pago = $cheque['fecha_pago'];
                $nuevoCheque->nro_cheque = $cheque['nro_cheque'];
                $nuevoCheque->importe = $cheque['importe'];
                $nuevoCheque->propio = $cheque['propio'];  
                if($cheque['propio'] == 1){
                    $nuevoCheque->cuit_emisor = $cheque['cliente']['cuit'];
                }else{
                    $nuevoCheque->cuit_emisor = $cheque['cuit_emisor'];
                }
                $nuevoCheque->librador_id = $cheque['cliente']['id'];
                $nuevoCheque->banco_id = $cheque['banco']['id'];
                $nuevoCheque->pago_id = $pago->id;
                $nuevoCheque->cartera_id = $caja->carteraCupones['id'];
                $nuevoCheque->ctac_id = $cta->id;

                $nuevoCheque->save();
            }
        }
    }
}
