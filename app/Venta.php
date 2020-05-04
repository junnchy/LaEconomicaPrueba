<?php

namespace App;
use App\FormaDePago;
use App\CuentaCliente;
use App\Pago;
use App\Vendedor;
use App\LineaDeVenta;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    public function fdp()
    {
        return $this->belongsTo(FormaDePago::class, 'formaDePago_id', 'id');
    }

    public function cuenta()
    {
        return $this->belongsTo(CuentaCliente::class, 'ctac_id', 'id');
    }

    public function pago(){
        return $this->belongsToMany(Pago::class);
    }

    public function vendedor(){
        return $this->belongsTo(Vendedor::class, 'vendedor_id', 'id');
    }

    public function lineas(){
        return $this->hasMany(LineaDeVenta::class);
    }
}
