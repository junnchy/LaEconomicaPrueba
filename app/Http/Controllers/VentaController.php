<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Venta;
use App\LineaDeVenta;

class VentaController extends Controller
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
        $venta = new Venta();
        $venta->vendedor_id = $request->vendedor_id;
        $venta->ctac_id = $request->cliente['cuenta_id'];
        $venta->fecha_emision = $request->fecha_emision;
        $venta->total = $request->total;
        $venta->formaDePago_id = $request->formaDePago['id'];
        $venta->subtotal = $request->subtotal;
        $venta->iva = $request->iva;
        $venta->codigo = '00000';
        $venta->detalles = $request->detalles;
        $venta->save();

        
        foreach ($request->lineas as $linea){
            // Agregar que se guarde el iva
            $lv = new LineaDeVenta();
            if($request['cliente']['condicion_iva_id'] != 1){
                $lv->precio = $linea['producto']['precio']['precioVenta'];
            }else{
                $lv->precio = $linea['producto']['precio']['precioVentaSinIva'];
            }
            $lv->cantidad = $linea['cantidad'];
            $lv->total_linea = $linea['subtotal'];
            $lv->descuento = 0;
            $lv->producto_id = $linea['producto']['id'];
            $lv->venta_id = $venta->id;
            $lv->save();
        }

        return response()->json([
            'venta' => $venta,
            'message' => 'Venta Realizada'
        ], 200);
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
