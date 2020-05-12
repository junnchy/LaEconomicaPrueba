<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cheque extends Model
{
    public function cuenta(){
        return $this->belongsTo(CuentaCliente::class, 'ctac_id');
    }

    public function cargarDatos($cheque){
        $this->fecha_emision = $cheque['fecha_emision'];
        $this->fecha_pago = $cheque['fecha_pago'];
        $this->nro_cheque = $cheque['nro_cheque'];
        $this->importe = $cheque['importe'];
        $this->propio = $cheque['propio'];  
        if($cheque['propio'] == 1){
            $this->cuit_emisor = $cheque['cliente']['cuit'];
        }else{
            $this->cuit_emisor = $cheque['cuit_emisor'];
        }
        $this->librador_id = $cheque['cliente']['id'];
        $this->banco_id = $cheque['banco']['id'];
        
        $this->save();
    }
}
