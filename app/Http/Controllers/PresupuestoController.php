<?php

namespace App\Http\Controllers;

use App\Presupuesto;
use App\LineaPresupuesto;
use App\DatosEmpresa;
use Carbon\Carbon;

use Illuminate\Http\Request;

class PresupuestoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            if($request->fecha != null){
                $dd = substr($request->fecha,8,10);
                $mm = substr($request->fecha,-5,-3);
                $yyyy = substr($request->fecha,0,4);
                $today = Carbon::create($yyyy, $mm, $dd);
                
            }else{
                $today = new Carbon();
                $today = Carbon::now();
                $today->subMonth();
            }
            

            $presupuestos = Presupuesto::with('vendedor', 'cliente', 'estado')
            ->where('created_at', '>', $today)
            ->orderBy('created_at', 'desc')
            ->get();
            foreach ($presupuestos as $key => $presupuesto) {
                $date = Carbon::createFromDate($presupuesto->fecha_emision);
                $presupuesto->fecha_emision = $date->format('d-m-Y');
            }
            return response()->json($presupuestos);
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
            $presupuesto = new Presupuesto();
            $presupuesto->vendedor_id = $request->vendedor_id;
            $presupuesto->cliente_id = $request->cliente['id'];
            $presupuesto->fecha_emision = $request->fecha_emision;
            $presupuesto->total = $request->total;
            $presupuesto->formaDePago_id = $request->formaDePago['id'];
            $presupuesto->subtotal = $request->subtotal;
            $presupuesto->iva = $request->iva;
            $presupuesto->codigo = '00000';
            $presupuesto->detalles = $request->detalles;
            $presupuesto->estadoPresupuesto_id = 1;
            $presupuesto->save();

            
            foreach ($request->lineas as $linea){
                // Agregar que se guarde el iva
                $lp = new LineaPresupuesto();
                if($request['cliente']['condicion_iva_id'] != 1){
                    $lp->precio = $linea['producto']['precio']['precioVenta'];
                }else{
                    $lp->precio = $linea['producto']['precio']['precioVentaSinIva'];
                }
                $lp->cantidad = $linea['cantidad'];
                $lp->total_linea = $linea['subtotal'];
                $lp->descuento = 0;
                $lp->producto_id = $linea['producto']['id'];
                $lp->presupuesto_id = $presupuesto->id;
                $lp->save();
            }

            return response()->json([
                'presupuesto' => $presupuesto,
                'message' => 'Presupuesto Guardado'
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
            
            $presupuesto = Presupuesto::with('lineas.producto.fichaStock','lineas.producto.precio','cliente.condicion_iva', 'vendedor', 'estado', 'formaDePago')->findOrFail($id);
            return response()->json($presupuesto);
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
            $presupuesto = Presupuesto::findOrFail($id);

            $presupuesto->estadoPresupuesto_id = $request->estadoPresupuesto_id;
            $presupuesto->detalles = $request->detalles;
            $presupuesto->save();

            return response()->json([
                'presupuesto' => $presupuesto,
                'message' => 'Presupuesto Actualizado'
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

    public function imprimir($id)
    {
        $presupuesto = Presupuesto::with('lineas.producto.fichaStock','lineas.producto.precio', 'cliente.condicion_iva', 'vendedor')->findOrFail($id);

        $datosEmpresa = DatosEmpresa::findOrFail(1);
     
        $pdf = \PDF::setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true])->loadView('comercial.comprobantes.impresupuesto', compact('presupuesto', 'datosEmpresa'))->setPaper('a4');

        return $pdf->download('archivo.pdf');
    }
}

/* return view('vendedores.editar', compact('vendedor', 'localidades', 'provincias') */
