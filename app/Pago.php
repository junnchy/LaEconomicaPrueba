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

    public function cargarDatos($pago){
        $this->importe = $pago->importe;
        if($pago->pesos == null){
            $this->pesos = 0;
        }else{
            $this->pesos = $pago->pesos;
        }
        $this->saldo = $this->importe;
        $this->dolares = $pago->dolares;
        $this->caja_id = 1;
        $this->ctac_id = $pago->ctac_id;
        $this->save();
    }

    public function imputarPago($ventas_id){
        foreach ($ventas_id as $id_venta) {
            if($this->saldo > 0){
                $venta = Venta::findOrFail($id_venta);
                $saldoVta = $venta->saldo;
                $venta->actualizarSaldo($this->saldo);
                if($this->saldo >= $saldoVta){
                    $this->saldo = $this->saldo - $saldoVta;
                }else{
                    $this->saldo = 0;
                }
                $this->formaDePago_id = $venta->formaDePago_id;
                $this->ventas()->attach($venta,[]);
                $this->save();
            }   
        }
    }
}
