<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Str;

use App\Proveedor;

class ProveedorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('proveedors')->delete();
        $json = File::get('database\seeds\Json\proveedores.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Proveedor::create(array(
                "id" => $obj->id,
                "nombre" => Str::title($obj->nombre),
                "cuit" => $obj->cuit,
                "email"=> $obj->email,
                "telefono"=>$obj->telefono,
                "direccion"=>$obj->direccion,
                "condicion_iva_id"=>$obj->condicion_iva_id,
                "localidad_id"=>$obj->localidad_id,
            ));
        }
    }
}
