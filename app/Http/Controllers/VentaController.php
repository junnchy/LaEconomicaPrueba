<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Venta;
use App\LineaDeVenta;
use App\CuentaCliente;
use App\FichaDeStock;
use App\LineaFichaStock;

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
        $venta->saldo = $venta->total;
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
            $fds = FichaDeStock::findOrFail($linea['producto']['fichaStock_id']);
            $this->procesarStock($fds, $lv->cantidad, $request->vendedor['nombre']);
            $lv->total_linea = $linea['subtotal'];
            $lv->descuento = 0;
            $lv->producto_id = $linea['producto']['id'];
            $lv->venta_id = $venta->id;
            $lv->save();
        }

        $cc = CuentaCliente::findOrFail($venta->ctac_id);
        $cc->saldo = $cc->saldo +  $venta->total;
        $cc->save();

       

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
    public function show(Request $request, $id)
    {
        if($request->ajax()){
            $venta = Venta::with('fdp', 'cuenta.cliente.localidad', 'vendedor', 'lineas.producto', 'pago.cupones', 'pago.cheques')->findOrFail($id);
            return response()->json($venta);
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

    private function procesarStock($fds, $cantidad, $nombreVendedor){
        $fds->cantidadActual = $fds->cantidadActual - $cantidad;
        $nlfds = new LineaFichaStock();
        $nlfds->ficha_id = $fds->id;
        $nlfds->cantidad = $cantidad;
        #Modificar el tipo por dinamico?
        $nlfds->tipo = "Venta";
        $nlfds->usuario = $nombreVendedor;
        $fds->save();
        $nlfds->save();
    }
}
