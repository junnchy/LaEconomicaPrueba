<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Pago;
use App\CarteraCupone;
use App\carteraCheque;
use Carbon\Carbon;
use App\TransfereciaCaja;

class Caja extends Model
{
    public function pagos()
    {       
        return $this->hasMany(Pago::class)->orderBy('created_at', 'desc');
    }

    public function carteraCupones()
    {
        return $this->hasOne(CarteraCupone::class);
    }

    public function carteraCheques()
    {
        return $this->hasOne(CarteraCheque::class);
    }

    public function transferenciasE()
    {
        $transferencias = $this->hasMany(TransfereciaCaja::class, 'caja_emisora');
        foreach ($transferencias as $transferencia) {
            $transferencia->tipo = 'Enviada';
        }
        return $transferencias;
    }

    public function transferenciasR()
    {
        $transferencias = $this->hasMany(TransfereciaCaja::class, 'caja_receptora');
        foreach ($transferencias as $transferencia) {
            $transferencia->tipo = 'Recibida';
        }
        return $transferencias;
    }

    public function restarPesos($cantidad)
    {
        if($this->pesos > $cantidad){
            $this->pesos = $this->pesos - $cantidad;
            $this->save();
        }
    }

    public function sumarPesos($cantidad)
    {
        $this->pesos = $this->pesos + $cantidad;
        $this->save();
    }

    public function restarDolares($cantidad)
    {
        if($this->dolares > $cantidad){
            $this->dolares = $this->dolares - $cantidad;
            $this->save();
        }
    }

    public function sumarDolares($cantidad)
    {
        $this->dolares = $this->dolares + $cantidad;
        $this->save();
    }


}
