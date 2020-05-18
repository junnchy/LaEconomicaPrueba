<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\CategoriaGasto;

class CategoriaGastoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            $categorias = CategoriaGasto::with('padre', 'hijos.hijos')->get();
            $ordenadas = [];
            foreach ($categorias as $categoria) {
                if($categoria->padre ===  null){
                    $categoria->nro = 0;
                    array_push($ordenadas, $categoria);
                    if ($categoria['hijos'] != []){
                        foreach($categoria['hijos'] as $hijo) {
                            $hijo->nro = 1;
                            array_push($ordenadas, $hijo);
                            if ($hijo['hijos'] != []){
                                foreach($hijo['hijos'] as $nieto) {
                                    $nieto->nro = 2;
                                    array_push($ordenadas, $nieto);
                                }
                            }
                        }
                    }
                }
            }
            return response()->json($ordenadas);
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
            $categoria = new CategoriaGasto();

            $categoria->nombre = $request->nombre;
            if($request->cat_id != null){
                $padre = CategoriaGasto::FindOrFail($request->cat_id);
                $categoria->cat_id = $padre->id;
            }else{
                $categoria->cat_id = null;
            }
            
            $categoria->save();

            return response()->json([
                'message'=> 'Categoria Agregada'
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
}
