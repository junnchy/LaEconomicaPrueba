<?php

namespace App;
use App\Venta;
use App\CuentaCliente;
use App\FormaDePago;

use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    public function ventas(){
        return $this->belongsToMany(Venta::class);
    }

    public function cuenta(){
        return $this->belongsTo(CuentaCliente::class, 'ctac_id');
    }

    public function fdp(){
        return $this->belongsTo(FormaDePago::class, 'formaDePago_id');
    }
}
