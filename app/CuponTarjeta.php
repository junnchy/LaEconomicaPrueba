<?php

namespace App;
use App\Pago;
use App\Tarjeta;

use Illuminate\Database\Eloquent\Model;

class CuponTarjeta extends Model
{
    public function pago(){
        return $this->belongsTo(Pago::class);
    }

    public function tarjeta(){
        return $this->belongsTo(Tarjeta::class);
    }
    
}
        