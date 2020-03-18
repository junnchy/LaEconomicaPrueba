<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        $this->call(CategoriasSeeder::class);
        

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $this->call(CondicionIvaTableSeeder::class);
        $this->call(EstadosPresupuestoTableSeeder::class);
        $this->call(RubroProveedoresTableSeeder::class);
        $this->call(CategoriaClientesTableSeeder::class);
        $this->call(ProvinciasTableSeeder::class);
        $this->call(LocalidadesTableSeeder::class);
        $this->call(ProveedorTableSeeder::class);
        $this->call(PermissionsTableSeeder::class);
        $this->call(RolesTableSeeder::class);        
        $this->call(UsersTableSeeder::class);
        $this->call(ClientesTableSeeder::class);
        $this->call(ProductosTableSeeder::class);
        $this->call(DepositosTableSeeder::class);
        $this->call(FichaDeStockSeeder::class);
        $this->call(DatosEmpresaTableSeeder::class);
        $this->call(FormasDePagoSeeder::class);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');        
    }
}
