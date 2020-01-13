<?php

use Illuminate\Database\Seeder;
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
        Schema::disableForeignKeyConstraints();
        Localidad::truncate();
        $tabla = DB::table('localidades');
        Localidad::insert(
            ['cod_postal' => 2000,
            'localidad' => 'Rosario',
            'provincia_id' => 82]);
        Localidad::insert(
            ['cod_postal' => 2124,
            'localidad' => 'Villa Gobernador Galvez',
            'provincia_id' => 82]);
        Localidad::insert(
            ['cod_postal' => 2126,
            'localidad' => 'Alvear',
            'provincia_id' => 82]);
        Localidad::insert(
            ['cod_postal' => 2126,
            'localidad' => 'Pueblo Esther',
            'provincia_id' => 82]);
        Localidad::insert(
            ['cod_postal' => 2132,
            'localidad' => 'Funes',
            'provincia_id' => 82]);    
        Schema::enableForeignKeyConstraints();
    }
}
