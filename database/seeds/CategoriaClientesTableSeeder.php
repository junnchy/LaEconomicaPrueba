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
        CategoriaClientes::create(['denominacion'=>'Consumidor Final']);
        CategoriaClientes::create(['denominacion'=>'Empresa']);
        CategoriaClientes::create(['denominacion'=>'Profesional']);
        CategoriaClientes::create(['denominacion'=>'Organización']);
        CategoriaClientes::create(['denominacion'=>'Responsable Inscripto']);
    }
}
