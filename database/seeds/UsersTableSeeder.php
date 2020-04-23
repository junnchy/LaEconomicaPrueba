<?php

use Illuminate\Database\Seeder;
use App\User;
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
        $user->nombre = 'Nazarena Alesandroni';
        $user->email = 'nazarenalesandroni@laeconomica.com.ar';
        $user->password = '123456789';
        $user->dni = '39105984';
        $user->cuil = '27-39105984-0';
        $user->celular = '3416059722';
        $user->direccion = 'España 1447';
        $user->save();
        //$user->assignRole(Role::where('name', 'admin')->first());
    }
}
