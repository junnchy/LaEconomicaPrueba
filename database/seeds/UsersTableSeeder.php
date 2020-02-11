<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Vendedor;
use Spatie\Permission\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        User::truncate();
        Schema::enableForeignKeyConstraints();
        

        $user = new User();
        $user->name = 'Administrador';
        $user->email = 'admin@gmail.com';
        $user->password = '12345678';
        $user->imagen = 'http://127.0.0.1:8000/assets/users/juanjr.jpg';
        $user->save();
        $user->assignRole(Role::where('name', 'admin')->first());

        $user2 = new User();
        $user2->name = "Juan Fortuna";
        $user2->email = "juanichacho@gmail.com";
        $user2->password = "12345678";
        $user2->imagen = "http://127.0.0.1:8000/assets/users/juanjr.jpg"; 
        $user2->save();
        $user2->assignRole(Role::where('name', 'admin')->first());

        $vendedor = new Vendedor();
        $vendedor->id ="2";
        $vendedor->nombre ="Juan Fortuna";
        $vendedor->dni = "39246898";
        $vendedor->cuil = "2039246898";
        $vendedor->telefono = "3413409712";
        $vendedor->celular = "3413409712";
        $vendedor->email = "juanichacho@gmail.com";
        $vendedor->direccion = "Fornieles 449";
        $vendedor->puesto = "12";
        $vendedor->localidad_id = "2028010004";
        $vendedor->user_id = "2";
        $vendedor->save();

    }
}
