<?php

namespace App;
use App\Venta;
use App\Cliente;
use App\Pago;
use App\CuponTarjeta;
use App\Cheque;

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

    public function cupones()
    {   
        return $cupones = $this->hasMany(CuponTarjeta::class, 'ctac_id', 'id')->orderBy('created_at', 'desc');
    }

    public function cheques()
    {   
        return $cupones = $this->hasMany(Cheque::class, 'ctac_id', 'id')->orderBy('created_at', 'desc');
    }

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
