<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    public function categoria()
    {
        return $this->belongsTo(CategoriaClientes::class);
    }

    public function condicion_iva()
    {
        return $this->belongsTo(CondicionIva::class);
    }
}
