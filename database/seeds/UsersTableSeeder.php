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
        User::truncate();
        $user = new User();
        $user->name = 'Administrador';
        $user->email = 'admin@gmail.com';
        $user->password = '12345678';
        $user->save();
        $user->assignRole(Role::where('name', 'admin')->first());
    }
}
