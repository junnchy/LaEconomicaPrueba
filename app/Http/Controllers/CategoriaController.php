<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Categoria;
use App\Proveedor;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            $categorias = Categoria::with('children.children', 'padre.padre')->get();
            $ordenadas = [];
            foreach ($categorias as $categoria) {
                if($categoria->padre ===  null){
                    $categoria->nro = 0;
                    array_push($ordenadas, $categoria);
                    if ($categoria['children'] != []){
                        foreach($categoria['children'] as $hijo) {
                            $hijo->nro = 1;
                            array_push($ordenadas, $hijo);
                            if ($hijo['children'] != []){
                                foreach($hijo['children'] as $nieto) {
                                    $nieto->nro = 2;
                                    array_push($ordenadas, $nieto);
                                }
                            }
                        }
                    }
                }
            }
            return response()->json($ordenadas);
        } else {
            $categorias = Categoria::all();
            $proveedores = Proveedor::all();
            return view('productos.categoria', compact('categorias', 'proveedores'));
        }

        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('productos.categoria');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $categoria = new Categoria();

        if($request->ajax()){

            $categoria->nombre = $request->nombre;
            if ($request->categoria_id != null){
                //queria hacer una funcion busca categoria... no la pude hacer andar 
                $padre = Categoria::findOrFail($request->categoria_id);
                $categoria->categoria_id = $padre->id;
            }
            $categoria->save();

            return response()->json([
                'categoria' => $categoria,
                'message' => 'Categoria Agregada'
            ], 200);

        }else {
            $categoria->nombre = $request->nombre;
            if ($request->categoria_id != null){
                //queria hacer una funcion busca categoria... no la pude hacer andar 
                $padre = Categoria::findOrFail($request->categoria_id);
                $categoria->categoria_id = $padre->id;
            }

            $categoria->save();
            
            $idCat = $categoria->id;

            if ($request->proveedor_id != null) {
                $proveedor = Proveedor::findOrFail($request->proveedor_id);
                $proveedor->categorias()->attach($idCat, ['descuento'=> $request->descuento]);
            }

            return back()->with('mensaje', 'Categoria Agregada');
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
            $categoria = Categoria::with('children.padre', 'padre.children')->findOrFail($id);
            return response()->json($categoria);
        } else {
            $categoria = Categoria::findOrFail($id);
            return view('productos.detalleCategoria', compact('categoria'));
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
    public function update($id, Request $request)
    {
        if($request->ajax()){
            
            $categoria = Categoria::findOrFail($id);
            $categoria->nombre = $request->nombre;
            if ($request->categoria_id != null){
                //queria hacer una funcion busca categoria... no la pude hacer andar 
                $padre = Categoria::findOrFail($request->categoria_id);
                $categoria->categoria_id = $padre->id;
            }
            $categoria->save();

            return response()->json([
                'categoria' => $categoria,
                'message' => 'Actualizado'
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
