<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\CategoriaClientes;

class CategoriaClientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        CategoriaClientes::truncate();
        CategoriaClientes::insert(['denominacion'=>'Persona']);
        CategoriaClientes::insert(['denominacion'=>'Empresa']);
        CategoriaClientes::insert(['denominacion'=>'Profesional']);
        CategoriaClientes::insert(['denominacion'=>'Organización']);
        CategoriaClientes::insert(['denominacion'=>'Responsable Inscripto']);
        Schema::enableForeignKeyConstraints(); 
    }
}
