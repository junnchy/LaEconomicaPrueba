<?php

use Illuminate\Database\Seeder;

use App\Proveedor;

class ProveedorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $proveedor = new Proveedor();
        $proveedor->nombre = 'Holcim';
        $proveedor->cuit = 22342242;
        $proveedor->telefono ='213213123';
        $proveedor->direccion ='direccion 123';
        $proveedor->condicion_iva_id = 1;
        $proveedor->localidad_id =1;
        $proveedor->save();

        $proveedor = new Proveedor();
        $proveedor->nombre = 'Benitez';
        $proveedor->cuit = 265456456;
        $proveedor->telefono ='34534532';
        $proveedor->direccion ='direccion 123';
        $proveedor->condicion_iva_id = 1;
        $proveedor->localidad_id =1;
        $proveedor->save();

        $proveedor = new Proveedor();
        $proveedor->nombre = 'Cortines';
        $proveedor->cuit = 345435346;
        $proveedor->telefono ='433455654';
        $proveedor->direccion ='direccion 123';
        $proveedor->condicion_iva_id = 1;
        $proveedor->localidad_id =1;
        $proveedor->save();
    }
}
