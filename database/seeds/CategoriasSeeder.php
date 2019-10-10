<?php

use Illuminate\Database\Seeder;

use App\Categoria;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $categoria = new Categoria();
        $categoria->nombre = 'Aberturas';
        $categoria->save();

        $categoria = new Categoria();
        $categoria->nombre = 'Materiales de Construccion';
        $categoria->save();

        $categoria = new Categoria();
        $categoria->nombre = 'Revestimientos';
        $categoria->save();

        $categoria = new Categoria();
        $categoria->nombre = 'Ventanas';
        $categoria->categoria_id = 1;
        $categoria->save();

        $categoria = new Categoria();
        $categoria->nombre = 'Aireadores';
        $categoria->categoria_id = 1;
        $categoria->save();

        $categoria = new Categoria();
        $categoria->nombre = 'Cementos';
        $categoria->categoria_id = 2;
        $categoria->save();
        
    }
}
