<?php

namespace App;
use App\Venta;
use App\Cliente;
use App\Pago;

use Illuminate\Database\Eloquent\Model;

class CuentaCliente extends Model
{
    public function ventas()
    {   
        return $ventas = $this->hasMany(Venta::class, 'ctac_id', 'id')->orderBy('created_at', 'desc');
    }

    public function pagos()
    {   
        return $pagos = $this->hasMany(Pago::class, 'ctac_id', 'id')->orderBy('created_at', 'desc');
    }

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
