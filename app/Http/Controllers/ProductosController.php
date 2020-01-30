<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Proveedor;
use App\Categoria;
use App\Producto;


class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {    
        if($request->ajax()){
            $productos = Producto::with(['proveedor','categoria'])
            ->orderBy('nombre')
            ->get();
            return response()->json($productos);
        } else {
            $productos = Producto::all();
            return view('productos.productos', compact('productos'));
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categorias = Categoria::all();
        $proveedores = Proveedor::all();
        return view('productos.agregarProducto', compact('proveedores', 'categorias'));
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
            
            $this->validateProducto($request);

            $producto = new Producto();

            if ($request->id != null) {
                $producto->id = $request->id;
            }
            $producto->nombre = $request->nombre;
            $producto->precioBase = $request->precioBase;
            $producto->descuentoProducto_1 = $request->descuentoProducto[0];
            $producto->descuentoProducto_2 = $request->descuentoProducto[1];
            $producto->descuentoProducto_3 = $request->descuentoProducto[2];
            $producto->descuentoProducto_4 = $request->descuentoProducto[3];
            $producto->descuentoProducto_5 = $request->descuentoProducto[4];
            if($request->descripcion != ""){
                $producto->descripcion = $request->descripcion;
            }else {
                $producto->descripcion = "<p> Sin Descripcion </p>";
            };
            $producto->iva = $request->iva;
            $producto->flete = $request->flete;
            $producto->precioCosto = $request->precioCosto;
            $producto->precioVenta = $request->precioVenta;
            $producto->rentabilidad = $request->rentabilidad;
            $producto->proveedor_id = $request->proveedor['id'];
            $producto->categoria_id = $request->categoria['id'];

            if ($request->imagen) {
                if (Str::contains($request->imagen, 'http')){
                    $producto->imagen = $request->imagen;
                }else {
                    $exploded = explode(',', $request->imagen);
                    $decoded = base64_decode($exploded[1]);
                        
                    if(Str::contains($exploded[0], 'jpeg')){
                        $extension = 'jpg';
                    }else {
                        $extension = 'png';
                    }

                    $fileName = Str::random(20).'.'.$extension;

                    $path = public_path('assets/productos/').$fileName;

                    file_put_contents($path, $decoded);

                    $producto->imagen = "http://127.0.0.1:8000/assets/productos/".$fileName;
                }
                
            }else {
                $producto->imagen = "http://127.0.0.1:8000/assets/4fxp8923.bmp";
            }

            $producto->save();
            

            return response()->json([
                'producto' => $producto,
                'message' => 'Producto Agregado'
            ], 200);

        }else {
            if ($request->id != null) {
                    $producto->id = $request->id;
            }

            $producto->nombre = $request->nombre;
            $producto->precioBase = $request->precioBase;
            $producto->descuentoProducto = $request->descuentoProducto;
            $producto->proveedor_id = $request->proveedor_id;
            $producto->categoria_id = $request->categoria_id;
            // Se debe validad que exista una relacion entre la categoia y el proveedor, ver si en la vista solo mostrar aquellos proveedores y categorias que tengan un descuento 
            // o bien poder crear uno en el momento
            $producto->save();

            return back()->with('mensaje', 'Producto Agregado');
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
            $producto = Producto::with(['proveedor','categoria'])->findOrFail($id);
            $producto->descuentoProducto = [
                $producto->descuentoProducto_1, 
                $producto->descuentoProducto_2, 
                $producto->descuentoProducto_3,
                $producto->descuentoProducto_4,
                $producto->descuentoProducto_5
            ];
            return response()->json($producto);
        }
        else {
            $producto = App\Producto::findOrFail($id);
            return view('productos.detalleProducto', compact('producto'));
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

            $this->validateProducto($request);

            $producto = Producto::findOrFail($id);
            $producto->nombre = $request->nombre;
            $producto->precioBase = $request->precioBase;
            $producto->descuentoProducto_1 = $request->descuentoProducto[0];
            $producto->descuentoProducto_2 = $request->descuentoProducto[1];
            $producto->descuentoProducto_3 = $request->descuentoProducto[2];
            $producto->descuentoProducto_4 = $request->descuentoProducto[3];
            $producto->descuentoProducto_5 = $request->descuentoProducto[4];
            $producto->descripcion = $request->descripcion;
            $producto->iva = $request->iva;
            $producto->flete = $request->flete;
            $producto->precioCosto = $request->precioCosto;
            $producto->precioVenta = $request->precioVenta;
            $producto->rentabilidad = $request->rentabilidad;
            $producto->proveedor_id = $request->proveedor['id'];
            $producto->categoria_id = $request->categoria['id'];

            if ($request->imagen != $producto->imagen) {
                if ($request->imagen === 'http://127.0.0.1:8000/assets/4fxp8923.bmp') {
                    $producto->imagen = 'http://127.0.0.1:8000/assets/4fxp8923.bmp';
                }else {
                $exploded = explode(',', $request->imagen);
                $decoded = base64_decode($exploded[1]);
                    
                if(Str::contains($exploded[0], 'jpeg')){
                    $extension = 'jpg';
                }else {
                    $extension = 'png';
                }

                $fileName = Str::random(20).'.'.$extension;

                $path = public_path('assets/productos/').$fileName;

                file_put_contents($path, $decoded);

                $producto->imagen = "http://127.0.0.1:8000/assets/productos/".$fileName;
                }  
            }

            $producto->save();

            return response()->json([
                'producto' => $producto,
                'message' => 'Producto Actualizado'
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

    protected function validateProducto(Request $request)
    {
        $this->validate($request, [
            'nombre' => 'required',
            'precioBase' => 'required|numeric',
            'precioBase' => 'numeric|gt:0',
            'iva' => 'required|numeric',
            'iva' => 'numeric|gt:0',
            'rentabilidad' => 'required|numeric',
            'rentabilidad' => 'numeric|gt:0',
            'proveedor_id' => 'required',
            'proveedor_id' => 'numeric|gt:0',
            'categoria_id' => 'required',
            'categoria_id' => 'numeric|gt:0'
        ]);
    }
}


