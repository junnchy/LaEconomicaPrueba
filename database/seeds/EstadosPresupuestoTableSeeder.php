<?php

use Illuminate\Database\Seeder;
use App\EstadoPresupuesto;

class EstadosPresupuestoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $estado = new EstadoPresupuesto();
        $estado->id = 1;
        $estado->nombre = 'En Espera';
        $estado->clase = 'badge badge-primary';
        $estado->save();

        $estado = new EstadoPresupuesto();
        $estado->id = 2;
        $estado->nombre = 'En Seguimiento';
        $estado->clase = 'badge badge-warning';
        $estado->save();

        $estado = new EstadoPresupuesto();
        $estado->id = 3;
        $estado->nombre = 'Confirmado';
        $estado->clase = 'badge badge-success';
        $estado->save();


        $estado = new EstadoPresupuesto();
        $estado->id = 4;
        $estado->nombre = 'Rechazado';
        $estado->clase = 'badge badge-danger';
        $estado->save();
    }
}
