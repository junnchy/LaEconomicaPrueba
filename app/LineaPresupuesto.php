<?php

namespace App;

use App\Presupuesto;

use Illuminate\Database\Eloquent\Model;

class LineaPresupuesto extends Model
{
    public function presupuesto(){
        return $this->belongsTo(Presupuesto::class); // Muchos a muchos
    }

    public function producto(){
        return $this->hasOne(producto::class, 'id', 'producto_id');
    }
}
