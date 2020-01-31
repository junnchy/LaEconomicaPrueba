<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use App\Localidad;

class LocalidadesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('localidades')->delete();
        $json = File::get('database\seeds\Json\localidades2.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Localidad::create(array(
                "id" => $obj->id,
                "nombre" => Str::title($obj->nombre),
                "provincia_id" => $obj->provincia->id,
            ));
        }

    }
}
