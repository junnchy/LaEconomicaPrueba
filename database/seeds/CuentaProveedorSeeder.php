<?php

use Illuminate\Database\Seeder;
use App\CuentaProveedor;

class CuentaProveedorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cuenta_proveedors')->delete();
        $json = File::get('database\seeds\Json\cuentasProveedores.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            CuentaProveedor::create(array(
                "id" => $obj->id,
                "saldo" => $obj->saldo,
                "proveedor_id" => $obj->proveedor_id,
            ));
        }
    }
}
