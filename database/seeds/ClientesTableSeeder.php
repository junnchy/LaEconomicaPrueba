<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use App\Cliente;

class ClientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clientes')->delete();
        $json = File::get('database\seeds\Json\clientes.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Cliente::create(array(
                "id" => $obj->id,
                "nombre" => Str::title($obj->nombre),
                "cuit" => $obj->cuit,
                "email"=> $obj->email,
                "telefono"=>$obj->telefono,
                "celular"=>$obj->celular,
                "direccion"=>$obj->direccion,
                "condicion_iva_id"=>$obj->condicion_iva_id,
                "cat_clientes_id"=>$obj->cat_clientes_id,
                "localidad_id"=>$obj->localidad_id,
            ));
        }
    }
}
