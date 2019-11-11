<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CondicionIvaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tabla = DB::table('condicion_iva');
        $tabla->truncate();
        $tabla->insert(['denominacion'=>'Responsable Inscripto']);
        $tabla->insert(['denominacion'=>'Responsable No Inscripto']);
        $tabla->insert(['denominacion'=>'Consumidor Final']);
        $tabla->insert(['denominacion'=>'Exento']);
        $tabla->insert(['denominacion'=>'Monotributista']);
        $tabla->insert(['denominacion'=>'No Categorizado']);
        
    }
}
