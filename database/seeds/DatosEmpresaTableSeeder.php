<?php

use Illuminate\Database\Seeder;

use App\DatosEmpresa;

class DatosEmpresaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        DatosEmpresa::truncate();
        Schema::enableForeignKeyConstraints();
        

        $datos = new DatosEmpresa();
        $datos->nombre = 'La Economica';
        $datos->razon_social = 'KARINA MARIA DE LUJAN LEDO';
        $datos->email = 'contacto@corralonlaeconomica.com.ar';
        $datos->cuit = '27231133335';
        $datos->logo = 'http://127.0.0.1:8000/assets/Logo-Completo(1).png';
        $datos->nroIgBrutos = 212944431;
        $datos->condicion_iva_id = 1;
        $datos->inicio_actividades='2000-09-01';
        $datos->telefono= '4927575';
        $datos->direccion= 'Av. Soldado Aguirre 2895';
        $datos->localidad_id="82084310000";
        $datos->web='www.laeconomica.com.ar';
        $datos->save();
    }
}
