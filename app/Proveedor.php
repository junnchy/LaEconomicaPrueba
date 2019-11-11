<?php

namespace App;

use App\Categoria;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    public function categorias(){
        return $this->belongsToMany(Categoria::class)->withPivot('descuento'); // Muchos a muchos
    }
    
}

