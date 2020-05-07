<?php

namespace App;
use App\Venta;
use App\CuentaCliente;
use App\FormaDePago;
use App\CuponTarjeta;
use App\Cheque;

use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    public function ventas(){
        return $this->belongsToMany(Venta::class);
    }

    public function cupones(){
        return $this->hasMany(CuponTarjeta::class);
    }

    public function cheques(){
        return $this->hasMany(Cheque::class);
    }

    public function cuenta(){
        return $this->belongsTo(CuentaCliente::class, 'ctac_id');
    }

    public function fdp(){
        return $this->belongsTo(FormaDePago::class, 'formaDePago_id');
    }

    public function cargarDatos($pago, $ventas_id){
        $this->importe = $pago->importe;
        if($pago->pesos == null){
            $this->pesos = 0;
        }else{
            $this->pesos = $pago->pesos;
        }
        $acum = 0;
        foreach ($ventas_id as $venta_id) {
            $venta = Venta::findOrFail($venta_id);
            $acum = $acum + $venta->saldo;
        }
        $this->saldo = $this->importe - $acum;
        $this->dolares = $pago->dolares;
        $this->caja_id = 1;
        $this->ctac_id = $pago->ctac_id;
        $this->formaDePago_id = $venta->formaDePago_id;
    }
}
