<?php

namespace App;

use App\Categoria;
use App\Proveedor;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    public function categoria(){
        return $this->belongsTo(Categoria::class); // Muchos a muchos
    }

    public function proveedor(){
        return $this->belongsTo(Proveedor::class); // Muchos a muchos
    }
   
}
