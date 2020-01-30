<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use App\Producto;

class ProductosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('productos')->delete();
        $json = File::get('database\seeds\Json\productos.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Producto::create(array(
                "id" => $obj->id,
                "nombre" => Str::title($obj->nombre),
                "precioBase" => $obj->precioBase,
                "precioCosto"=> $obj->precioCosto,
                "descripcion"=>$obj->descripcion,
                "proveedor_id"=>$obj->proveedor_id,
                "categoria_id"=>$obj->categoria_id,
                "descuentoProducto_1"=>$obj->descuentoProducto_1,
                "descuentoProducto_2"=>$obj->descuentoProducto_2,
                "descuentoProducto_3"=>$obj->descuentoProducto_3,
                "descuentoProducto_4"=>$obj->descuentoProducto_4,
                "descuentoProducto_5"=>$obj->descuentoProducto_5,
                "rentabilidad"=>$obj->rentabilidad,
                "precioVenta"=>$obj->precioVenta,
                "iva"=>$obj->iva,
                "flete"=>$obj->flete,
                "imagen"=>$obj->imagen,
            ));
        }
    }
}
