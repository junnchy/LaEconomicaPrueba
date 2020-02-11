<?php

namespace App;

use App\LineaPresupuesto;
use App\Cliente;

use Illuminate\Database\Eloquent\Model;

class Presupuesto extends Model
{
    public function lineas()
    {
        return $this->hasMany(LineaPresupuesto::class, 'prespuesto_id', 'id');
    }

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }


}
