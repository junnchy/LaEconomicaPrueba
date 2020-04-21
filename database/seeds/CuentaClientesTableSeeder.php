<?php

use Illuminate\Database\Seeder;
use App\CuentaCliente;

class CuentaClientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cuenta_clientes')->delete();
        $json = File::get('database\seeds\Json\cuentasClientes.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            CuentaCliente::create(array(
                "id" => $obj->id,
                "saldo" => $obj->saldo,
                "cliente_id" => $obj->cliente_id,
            ));
        }
    }
}
