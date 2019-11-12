<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $this->call(CondicionIvaTableSeeder::class);
        $this->call(RubroProveedoresTableSeeder::class);
        $this->call(CategoriaClientesTableSeeder::class);
        $this->call(LocalidadesTableSeeder::class);
        $this->call(CategoriasSeeder::class);
        $this->call(ProveedorTableSeeder::class);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        
      
    }
}
