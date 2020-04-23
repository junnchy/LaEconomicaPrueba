<?php

use Illuminate\Database\Seeder;
use App\Provincia;

class ProvinciasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('provincias')->delete();
        Schema::enableForeignKeyConstraints();
        
        $json = File::get('database\seeds\provincias.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Provincia::create(array(
                "nombre_completo" => $obj->nombre_completo,
                "iso_id" => $obj->iso_id,
                "nombre" => $obj->nombre,
                "id" => $obj->id,
                "categoria" => $obj->categoria,
                "iso_nombre" => $obj->iso_nombre,
                "lat" => $obj->lat,
                "lng" => $obj->lng,
            ));
        }
    }
}
