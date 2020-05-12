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
            $cc = CuentaCliente::with('ventas.fdp', 'cliente', 'pagos.cupones', 'ventas.pago', 'cupones.pago.cuenta.cliente',
             'cupones.tarjeta', 'cheques.cuenta.cliente')->findOrFail($id);


             $coleccion = new Collection();
             $pagos = $cc->pagos;
             foreach ($pagos as $pago) {
                 $pago->tipo = 'Pago';
                 $coleccion->push($pago);
             }
             $ventas = $cc->ventas;
             foreach ($ventas as $venta) {
                 $venta->tipo = 'Venta';
                 $coleccion->push($venta);
             }
             /* $mergedCollection = $ventas->toBase()->merge($pagos);  */ 
            
            
            /* $cc->m = collect([]);
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
            */
<<<<<<< HEAD
=======

            /* Reveer, no anda del todo bien */

>>>>>>> 717bbc9c4125ebc8ceae0f7c5016bf67841d31c9
            $c = $coleccion->toArray();
            for ($i=1; $i < count($c); $i++) { 
                for ($j=0; $j< count($c)- $i ; $j++) { 
                    if($c[$j]['created_at'] < $c[$j+1]['created_at']){
                        $aux = $c[$j];
                        $c[$j] = $c[$j+1];
                        $c[$j+1] = $aux;
                    }
                }
            }
<<<<<<< HEAD
=======

>>>>>>> 717bbc9c4125ebc8ceae0f7c5016bf67841d31c9
            $cc->movimientos = $c; 

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
