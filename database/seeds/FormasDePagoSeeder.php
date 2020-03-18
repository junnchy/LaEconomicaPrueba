<?php

use Illuminate\Database\Seeder;

use App\FormaDePago;

class FormasDePagoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fdp = new FormaDePago();
        $fdp->id ="1";
        $fdp->descripcion ="Efectivo";
        $fdp->coeficiente = 1;
        $fdp->recargo = 0;
        $fdp->save();

        $fdp = new FormaDePago();
        $fdp->id ="2";
        $fdp->descripcion ="Tarjeta de Credito - 6 cuotas";
        $fdp->coeficiente = 1.25;
        $fdp->recargo = 25;
        $fdp->save();

        $fdp = new FormaDePago();
        $fdp->id ="3";
        $fdp->descripcion ="Tarjeta de Credito - 12 cuotas";
        $fdp->coeficiente = 1.30;
        $fdp->recargo = 30;
        $fdp->save();

        $fdp = new FormaDePago();
        $fdp->id ="4";
        $fdp->descripcion ="Tarjeta de Debito";
        $fdp->coeficiente = 1.02;
        $fdp->recargo = 2;
        $fdp->save();



    }
}
