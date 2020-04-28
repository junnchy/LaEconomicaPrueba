<?php

namespace App;
use App\Venta;

use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    public function ventas(){
        return $this->belongsToMany(Venta::class);
    }
}
