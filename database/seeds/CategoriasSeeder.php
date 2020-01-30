<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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

        $json = File::get('database\seeds\Json\categorias.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Categoria::create(array(
                "id" => $obj->id,
                "nombre" => Str::title($obj->nombre),
                "categoria_id" => $obj->categoria_id,
            ));
        }
        
    }
}
