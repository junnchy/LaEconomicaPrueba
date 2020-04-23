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
        

        Schema::disableForeignKeyConstraints();
        Permission::truncate();
        Schema::enableForeignKeyConstraints();

        $json = File::get('database\seeds\permisos.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Permission::create(array(
                "name" => ($obj->name)
            ));
        }
    }
}
