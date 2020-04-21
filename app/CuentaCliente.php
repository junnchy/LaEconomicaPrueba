<?php

namespace App;
use App\Venta;

use Illuminate\Database\Eloquent\Model;

class CuentaCliente extends Model
{
    public function ventas()
    {   
        return $ventas = $this->hasMany(Venta::class, 'ctac_id', 'id');
    }
}
