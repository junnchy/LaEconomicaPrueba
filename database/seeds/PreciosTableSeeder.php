<?php

use Illuminate\Database\Seeder;

use App\Precio;

class PreciosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('precios')->delete();
        $json = File::get('database\seeds\Json\precios.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Precio::create(array(
                "id" => $obj->id,
                "producto_id"=>$obj->producto_id,
                "precioBase" => $obj->precioBase,
                "precioCosto"=> $obj->precioCosto,
                "descuentoProducto_1"=>$obj->descuentoProducto_1,
                "descuentoProducto_2"=>$obj->descuentoProducto_2,
                "descuentoProducto_3"=>$obj->descuentoProducto_3,
                "descuentoProducto_4"=>$obj->descuentoProducto_4,
                "descuentoProducto_5"=>$obj->descuentoProducto_5,
                "precioVentaSinIva"=>$obj->precioVentaSinIva,
                "rentabilidad"=>$obj->rentabilidad,
                "precioVenta"=>$obj->precioVenta,
                "iva"=>$obj->iva,
                "flete"=>$obj->flete,
            ));
        }
    }
}
