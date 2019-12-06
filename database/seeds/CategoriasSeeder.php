<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Categoria;
use App\Proveedor;
use App\Producto;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        Schema::disableForeignKeyConstraints();
       
        DB::table('categoria_proveedor')->truncate();
        DB::table('productos')->truncate();
        Categoria::truncate();
        Proveedor::truncate();
        Producto::truncate();

        Schema::enableForeignKeyConstraints();
        

        

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
