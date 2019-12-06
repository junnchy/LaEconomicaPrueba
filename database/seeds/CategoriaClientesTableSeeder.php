<?php

use Illuminate\Database\Seeder;
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
        CategoriaClientes::truncate();
        CategoriaClientes::insert(['denominacion'=>'Consumidor Final']);
        CategoriaClientes::insert(['denominacion'=>'Empresa']);
        CategoriaClientes::insert(['denominacion'=>'Profesional']);
        CategoriaClientes::insert(['denominacion'=>'Organización']);
        CategoriaClientes::insert(['denominacion'=>'Responsable Inscripto']);
    }
}
