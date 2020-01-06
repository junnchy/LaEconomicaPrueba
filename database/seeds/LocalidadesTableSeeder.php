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
            'provincia' => 'Santa Fe']);
        Localidad::insert(
            ['cod_postal' => 2124,
            'localidad' => 'Villa Gobernador Galvez',
            'provincia' => 'Santa Fe']);
        Localidad::insert(
            ['cod_postal' => 2126,
            'localidad' => 'Alvear',
            'provincia' => 'Santa Fe']);
        Localidad::insert(
            ['cod_postal' => 2126,
            'localidad' => 'Pueblo Esther',
            'provincia' => 'Santa Fe']);
        Localidad::insert(
            ['cod_postal' => 2132,
            'localidad' => 'Funes',
            'provincia' => 'Santa Fe']);    
        Schema::enableForeignKeyConstraints();
    }
}
