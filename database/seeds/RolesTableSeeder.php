<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Role::truncate();
        DB::table('model_has_permissions')->truncate();
        DB::table('model_has_roles')->truncate();
        DB::table('role_has_permissions')->truncate();
        Schema::enableForeignKeyConstraints();
        
        $role = Role::create([
            'name' => 'admin']);
        $role->givePermissionTo(['crear-vendedor', 'editar-vendedor', 'editar-usuario']);
        Role::create([
            'name' => 'vend']);
        
    }
}
