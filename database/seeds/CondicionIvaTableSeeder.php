<?php

use Illuminate\Database\Seeder;
use App\CondicionIva;


class CondicionIvaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        CondicionIva::truncate();
        CondicionIva::create(['denominacion'=>'Responsable Inscripto']);
        CondicionIva::create(['denominacion'=>'Responsable No Inscripto']);
        CondicionIva::create(['denominacion'=>'Consumidor Final']);
        CondicionIva::create(['denominacion'=>'Exento']);
        CondicionIva::create(['denominacion'=>'Monotributista']);
        CondicionIva::create(['denominacion'=>'No Categorizado']);
        
    }
}
