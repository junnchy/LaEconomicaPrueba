<?php

namespace App;

use App\Categoria;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    public function categoria(){
        return $this->belongsTo(Categoria::class); // Muchos a muchos
    }

}
