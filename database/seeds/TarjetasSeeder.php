<?php

use Illuminate\Database\Seeder;
use App\Tarjeta;

class TarjetasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tarjetas')->delete();
        $json = File::get('database\seeds\Json\tarjetas.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Tarjeta::create(array(
                "id" => $obj->id,
                "nombre"=>$obj->nombre,
                "icono"=>$obj->icono,
                "estado"=>$obj->estado
            ));
        }
    }
}
