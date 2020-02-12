<?php

namespace App;

use App\LineaPresupuesto;
use App\Cliente;
use App\Vendedor;

use Illuminate\Database\Eloquent\Model;

class Presupuesto extends Model
{
    public function lineas()
    {
        return $this->hasMany(LineaPresupuesto::class, 'presupuesto_id', 'id');
    }

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }

    public function vendedor()
    {
        return $this->belongsTo(Vendedor::class);
    }


}
