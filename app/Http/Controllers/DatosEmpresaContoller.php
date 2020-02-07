<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\DatosEmpresa;

class DatosEmpresaContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $datos = DatosEmpresa::with('condicion_iva', 'localidad.provincia')->get();
            return response()->json($datos[0]);
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
        if($request->ajax()){
            $datos = DatosEmpresa::findOrFail($id);
            $datos->nombre = $request->nombre;
            $datos->email = $request->email;
            /* Agregar fincion
                $datos->logo = 'http://127.0.0.1:8000/assets/Logo-Completo(1).png';
            */
            $datos->condicion_iva_id = $request->condicion_iva_id;
            $datos->telefono= $request->telefono;
            $datos->direccion= $request->direccion;
            $datos->localidad_id=$request->localidad_id;

            $this->agregarImagen($request, $datos);

            $datos->save();

            return response()->json([
                'datos' => $datos,
                'message' => 'Datos Actualizados'
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

    protected function agregarImagen(Request $request, $datos)
    {
        if ($request->logo) {
            if (Str::contains($request->logo, 'http')){
                $datos->logo = $request->logo;
            }else {
                $exploded = explode(',', $request->logo);
                $decoded = base64_decode($exploded[1]);
                    
                if(Str::contains($exploded[0], 'jpeg')){
                    $extension = 'jpg';
                }else {
                    $extension = 'png';
                }

                $fileName = Str::random(20).'.'.$extension;

                $path = public_path('assets/').$fileName;

                file_put_contents($path, $decoded);

                $datos->logo = "http://127.0.0.1:8000/assets/".$fileName;
            }
        }
    }
}
