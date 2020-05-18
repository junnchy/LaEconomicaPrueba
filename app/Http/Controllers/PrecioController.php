<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Precio;
use App\Producto;

class PrecioController extends Controller
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

            if($request->ajax()){
                foreach ($request->productos as $p) {
                    $producto = Producto::findOrFail($p['id']);
                    $precioV = Precio::findOrFail($p['precio_id']);
                    $precioN = new Precio();
                    $precioN->producto_id = $producto->id;
                    $precioN->precioBase = $precioV->precioBase;
                    /* Flete */
                    if($request->flete != $precioV->flete){
                        $precioN->flete = $request->flete;
                    }else{
                        $precioN->flete = $precioV->flete;
                    }
                    /* Iva */
                    if($request->iva != $precioV->iva){
                        $precioN->iva = $request->iva;
                    }else{
                        $precioN->iva = $precioV->iva;
                    }
                    /* Rentabilidad */
                    if($precioV->rentabilidad != $request->rentabilidad){
                        $precioN->rentabilidad = $request->rentabilidad;
                    }else{
                        $precioN->rentabilidad = $precioV->rentabilidad;
                    }
                    /* Descuentos */
                    if($request->ad){
                        $precioN->descuentoProducto_1 = $request->descuentoProducto[0];
                        $precioN->descuentoProducto_2 = $request->descuentoProducto[1];
                        $precioN->descuentoProducto_3 = $request->descuentoProducto[2];
                        $precioN->descuentoProducto_4 = $request->descuentoProducto[3];
                        $precioN->descuentoProducto_5 = $request->descuentoProducto[4];
                        if($request->dre == 1 ){
                            $precioN->dre = 0;
                        }else{
                            $precioN->dre = $request->dre;
                        }
                        
                    }else{
                        $precioN->descuentoProducto_1 = $precioV->descuentoProducto_1;
                        $precioN->descuentoProducto_2 = $precioV->descuentoProducto_2;
                        $precioN->descuentoProducto_3 = $precioV->descuentoProducto_3;
                        $precioN->descuentoProducto_4 = $precioV->descuentoProducto_4;
                        $precioN->descuentoProducto_5 = $precioV->descuentoProducto_5;
                        $precioN->dre = $precioV->dre;
                    }
                    $precioN->precioCosto = ($precioN->precioBase / (1+$precioN->dre));
                    $precioN->precioCosto = ($precioN->precioCosto * (($request->iva/100)+1));
                    $precioN->precioCosto =  $precioN->precioCosto +  $precioN->flete;
                    $precioN->precioVenta = ($precioN->precioCosto *(($precioN->rentabilidad/100)+1));
                    $precioN->precioVentaSinIva =  $precioN->precioVenta / (($request->iva/100)+1);
                    $precioN->tipo = "Proceso";
                    $precioN->save();
                    $producto->precio_id = $precioN->id;
                    $producto->save();
                }

                return response()->json([
                    'message' => 'Precios Actualizados'
                ], 200);
            }
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

    protected function validatePrecio(Request $request)
    {
        $this->validate($request, [
            'precioBase' => 'required|numeric',
            'precioBase' => 'numeric|gt:0',
            'iva' => 'required|numeric',
            'iva' => 'numeric|gt:0',
            'rentabilidad' => 'required|numeric',
            'rentabilidad' => 'numeric|gt:0',
        ]);
    }

    protected function procesarPrecio($producto, $request){
        
    }
}
