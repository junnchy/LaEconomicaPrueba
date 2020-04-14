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
                "descripcion"=>$obj->descripcion,
                "proveedor_id"=>$obj->proveedor_id,
                "categoria_id"=>$obj->categoria_id,
                "imagen"=>$obj->imagen,
            ));
        }
    }
}
