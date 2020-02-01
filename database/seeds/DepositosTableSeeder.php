<?php

use Illuminate\Database\Seeder;

use App\Desposito;

class DepositosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Desposito::truncate();
        Schema::enableForeignKeyConstraints();

        $deposito = new Desposito();
        $deposito->save();
    }
}
