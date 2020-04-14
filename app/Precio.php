<?php

namespace App;

use App\Producto;

use Illuminate\Database\Eloquent\Model;

class Precio extends Model
{
    public function producto(){
        return $this->belongsTo(Producto::class); // Muchos a muchos
    }
}
