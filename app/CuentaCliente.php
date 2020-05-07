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

    public function ventasConSaldo(){
        return $this->hasMany(Venta::class, 'ctac_id', 'id')->where('saldo', '>', 0)->orderBy('created_at', 'desc');
    }

    public function actualizarSaldo(){
        $this->saldo = 0;
        $ventas = 0;
        $pagos = 0;
        $this->ventas();
        $this->pagos();
        foreach ($this->ventas as $venta) {
           $ventas = $ventas + $venta->saldo; 
        }
        foreach ($this->pagos as $pago) {
            $pagos = $pagos - $pago->saldo; 
        }
        $this->saldo = $ventas + $pagos;

        $this->save();
    }
}
