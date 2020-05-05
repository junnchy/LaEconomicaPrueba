<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;

use App\CuentaCliente;

class CuentaClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            $cc = CuentaCliente::with('ventas')->get();
            return response()->json($cc);
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
        //
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
            $cc = CuentaCliente::with('ventas.fdp', 'cliente', 'pagos.cupones', 'ventas.pago', 'cupones.pago.cuenta.cliente', 'cupones.tarjeta', 'cheques.cuenta.cliente')->findOrFail($id);
            
            $cc->m = collect([]);
            #Solucion temporal... Modificar para mas comprobantes. 
            foreach($cc->ventas as $venta){
                if($venta->pago != null){
                    foreach($venta->pago as $pago){
                        $pago->tipo = "Pago";
                        $cc->m->push($pago);
                    }
                }
                $venta->tipo = "Venta";
                $cc->m->push($venta);
            }

            $cc->movimientos = $cc->m->sortBy('created_at');

            return response()->json($cc);
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
