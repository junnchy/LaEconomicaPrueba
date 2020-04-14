<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Precio;

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

            $precio = new Precio();
            $precio->producto_id = $request->producto_id;
            $precio->precioBase = $request->precioBase;
            $precio->descuentoPrecio_1 = $request->descuentoPrecio[0];
            $precio->descuentoPrecio_2 = $request->descuentoPrecio[1];
            $precio->descuentoPrecio_3 = $request->descuentoPrecio[2];
            $precio->descuentoPrecio_4 = $request->descuentoPrecio[3];
            $precio->descuentoPrecio_5 = $request->descuentoPrecio[4];
            $precio->iva = $request->iva;
            $precio->flete = $request->flete;
            $precio->precioCosto = $request->precioCosto;
            $precio->precioVenta = $request->precioVenta;
            $precio->precioVentaSinIva = $request->precioVenta / (($request->iva/100)+1);
            $precio->rentabilidad = $request->rentabilidad;
            $precio->save();

            

            return response()->json([
                'precio' => $precio,
                'message' => 'Precio Agregado'
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
}
