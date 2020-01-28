<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::truncate();
        Permission::create([
            'name' => 'crear-vendedor']);
        Permission::create([
            'name' => 'editar-vendedor']);
        Permission::create([
            'name' => 'editar-usuario']);
    }
}
