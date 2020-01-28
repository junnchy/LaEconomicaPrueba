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
        Schema::disableForeignKeyConstraints();
       
        CondicionIva::truncate();

        CondicionIva::insert(['denominacion'=>'Responsable Inscripto']);
        CondicionIva::insert(['denominacion'=>'Responsable No Inscripto']);
        CondicionIva::insert(['denominacion'=>'Consumidor Final']);
        CondicionIva::insert(['denominacion'=>'Exento']);
        CondicionIva::insert(['denominacion'=>'Monotributista']);
        CondicionIva::insert(['denominacion'=>'No Categorizado']);
        Schema::enableForeignKeyConstraints();

        
    }
}
