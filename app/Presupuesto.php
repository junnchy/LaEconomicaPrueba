<?php

namespace App;

use App\LineaPrespuesto;
use App\Cliente;

use Illuminate\Database\Eloquent\Model;

class Presupuesto extends Model
{
    public function lineas()
    {
        return $this->hasMany(LineaPrespuesto::class);
    }

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }


}
