<?php

namespace App\Http\Controllers;

use App\FichaDeStock;
use App\Producto;
use Carbon\Carbon;

use Illuminate\Http\Request;

class FichaDeStockController extends Controller
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
            $ficha = FichaDeStock::with('lineas', 'producto')
            ->findOrFail($id);
            $ficha->ultStock = $ficha->updated_at->diffForHumans(Carbon::now());
            return response()->json($ficha);
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
        if($request->ajax()){
            $ficha = FichaDeStock::findOrFail($id);
            $ficha->cantidadActual = $ficha->cantidadActual + $request->cantidad;
            if ($ficha->cantidadActual <= 0) {
                $producto = Producto::findOrFail($request->idProducto);
                $producto->estado = false;
                $producto->save();
            }

            $ficha->save();

            return response()->json([
                'message' => 'Cantidad Actualizada'
            ], 200);
        }
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
