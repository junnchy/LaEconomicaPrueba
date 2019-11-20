<?php

use Illuminate\Database\Seeder;
use App\Rol;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rol::truncate();
        Rol::insert([
            'rol' => 'admin',
            'nombre_rol' => 'Administrador',
            'descripcion' => 'Administrador general de la aplicación']);
        Rol::insert([
            'rol' => 'vend',
            'nombre_rol' => 'Vendedor',
            'descripcion' => 'Vendedor']);
    }
}
