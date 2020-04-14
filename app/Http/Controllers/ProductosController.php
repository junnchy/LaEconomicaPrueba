<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use Carbon\Carbon;

use App\Proveedor;
use App\Categoria;
use App\Producto;
use App\FichaDeStock;
use App\Precio;


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
            $productos = Producto::with(['proveedor','categoria', 'fichaStock', 'precio'])
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
            $producto->precioVentaSinIva = $request->precioVenta / (($request->iva/100)+1);
            $producto->rentabilidad = $request->rentabilidad;
            $producto->proveedor_id = $request->proveedor['id'];
            $producto->categoria_id = $request->categoria['id'];
            $producto->estado = $request->estado;

            $this->agregarImagen($request, $producto);

            $producto->save();

            $this->agregarFichaStock($producto);
            $this->agregarPrecio($producto, $request);
            

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
            $producto = Producto::with(['proveedor','categoria', 'fichaStock.lineas', 'precio', 'precios'])
            ->findOrFail($id);
            $producto->precio->descuentoProducto = [
                $producto->precio->descuentoProducto_1, 
                $producto->precio->descuentoProducto_2, 
                $producto->precio->descuentoProducto_3,
                $producto->precio->descuentoProducto_4,
                $producto->precio->descuentoProducto_5
            ];
            $producto->ultStock = $producto->fichaStock->updated_at->diffForHumans(Carbon::now());
            $lineas = $producto->fichaStock->lineas;
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
            $producto->proveedor_id = $request->proveedor['id'];
            $producto->categoria_id = $request->categoria['id'];
            $producto->estado = $request->estado;

            $this->agregarImagen($request, $producto);
            $producto->precio_id = $this->actualizarPrecios($request, $producto);

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
            'proveedor_id' => 'required',
            'proveedor_id' => 'numeric|gt:0',
            'categoria_id' => 'required',
            'categoria_id' => 'numeric|gt:0'
        ]);
    }

    protected function agregarImagen(Request $request, $producto)
    {
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
    }

    protected function agregarFichaStock($producto){
        $ficha = new FichaDeStock();
        $ficha->deposito_id = 1;
        $ficha->producto_id = $producto['id'];
        $ficha->cantidadActual = 0;
        $ficha->save();
        $producto->fichaStock_id = $ficha->id;
        $producto->save();
    }

    protected function agregarPrecio($producto, $request){
        $precio = new Precio();
        $precio->producto_id = $producto['id'];
        $precio->producto_id = $request->producto_id;
        $precio->precioBase = $request->precioBase;
        $precio->descuentoProducto_1 = $request->descuentoPrecio[0];
        $precio->descuentoProducto_2 = $request->descuentoPrecio[1];
        $precio->descuentoProducto_3 = $request->descuentoPrecio[2];
        $precio->descuentoProducto_4 = $request->descuentoPrecio[3];
        $precio->descuentoProducto_5 = $request->descuentoPrecio[4];
        $precio->iva = $request->iva;
        $precio->flete = $request->flete;
        $precio->precioCosto = $request->precioCosto;
        $precio->precioVenta = $request->precioVenta;
        $precio->precioVentaSinIva = $request->precioVenta / (($request->iva/100)+1);
        $precio->rentabilidad = $request->rentabilidad;
        $precio->save();
        $producto->precio_id = $precio->id;
        $producto->save();
    }

    protected function actualizarPrecios($request, $producto){
        $precioViejo = Precio::findOrFail($producto->precio_id);
        if($precioViejo->precioVenta != $request->precioVenta){
            $precio = new Precio();
            $precio->producto_id = $producto['id'];
            $precio->precioBase = $request->precio['precioBase'];
            $precio->descuentoProducto_1 = $request->precio['descuentoProducto'][0];
            $precio->descuentoProducto_2 = $request->precio['descuentoProducto'][1];
            $precio->descuentoProducto_3 = $request->precio['descuentoProducto'][2];
            $precio->descuentoProducto_4 = $request->precio['descuentoProducto'][3];
            $precio->descuentoProducto_5 = $request->precio['descuentoProducto'][4];
            $precio->iva = $request->precio['iva'];
            $precio->flete = $request->precio['flete'];
            $precio->precioCosto = $request->precio['precioCosto'];
            $precio->precioVenta = $request->precio['precioVenta'];
            $iva = $request->precio['precioVenta'] / (($request->precio['iva']/100)+1);
            $precio->precioVentaSinIva = $iva;
            $precio->rentabilidad = $request->precio['rentabilidad'];
            $precio->save();
            return $precio->id;
        }else{
            return $precioViejo->id;
        }
    }
}


