<?php

namespace App;
use App\Producto;

use Illuminate\Database\Eloquent\Model;

class LineaDeVenta extends Model
{
    public function producto(){
        return $this->hasOne(Producto::class, 'id');
    }
}
