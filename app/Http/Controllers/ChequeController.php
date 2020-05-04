<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cheque;
use Carbon\Carbon;

class ChequeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            if ($request->fechas == null) {
                $cheques = Cheque::with('cuenta.cliente')->get();
                foreach ($cheques as $cheque) {
                    $cheque->estado = 'Sin filtrado';
                }
            }else{ 
                $dd = substr($request->fechas[0] ,8,10);
                $mm = substr($request->fechas[0],-5,-3);
                $yyyy = substr($request->fechas[0],0,4);
                $f1 = Carbon::create($yyyy, $mm, $dd);
    
                $dd1 = substr($request->fechas[1],8,10);
                $mm1 = substr($request->fechas[1],-5,-3);
                $yyyy1 = substr($request->fechas[1],0,4);
                $f2 =Carbon::create($yyyy1, $mm1, $dd1);

                if ($request->tipof == 'i') {
                    $cheques = Cheque::with('cuenta.cliente')->whereBetween('created_at', [$f1, $f2])->get();
                }
                if ($request->tipof == 'e') {
                    $cheques = Cheque::with('cuenta.cliente')->whereBetween('fecha_emision', [$f1, $f2])->get();
                }
                if ($request->tipof == 'p') {
                    $cheques = Cheque::with('cuenta.cliente')->whereBetween('fecha_pago', [$f1, $f2])->get();
                }
            }
            return response()->json($cheques);
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

    private function filtarPorFecha($cheques, $fechas, $tipof){
        if ($fechas == null) {
            foreach ($cheques as $cheque) {
                $cheque->estado = 'Sin filtrado';
            }
        }else{ 
            $dd = substr($fechas[0] ,8,10);
            $mm = substr($fechas[0],-5,-3);
            $yyyy = substr($fechas[0],0,4);
            $f1 = Carbon::create($yyyy, $mm, $dd);

            $dd1 = substr($fechas[1],8,10);
            $mm1 = substr($fechas[1],-5,-3);
            $yyyy1 = substr($fechas[1],0,4);
            $f2 =Carbon::create($yyyy1, $mm1, $dd1);

            foreach ($cheques as $cheque) {
                /* $cheque->estado = 'filtrado';
                $cheque->f1 = $f1;
                $cheque->f2 = $f2;
                $cheque->tipof = $tipof; */

                if ($tipof == 'i') {
                    $cheques = $cheques->whereBetween('created_at', [$f1, $f2]);
                }
                if ($tipof == 'e') {
                    $cheques = $cheques->whereBetween('fecha_emision', [$f1, $f2]);
                }
                if ($tipof == 'p') {
                    $cheques = $cheques->whereBetween('fecha_pago', [$f1, $f2]);
                }
            }
        }
    }
}
