<?php

namespace App;

use App\CondicionIva;

use Illuminate\Database\Eloquent\Model;

class DatosEmpresa extends Model
{
    public function condicion_iva()
    {
        return $this->belongsTo(CondicionIva::class);
    }
    
    public function localidad()
    {
        return $this->belongsTo(Localidad::class);
    }
}
