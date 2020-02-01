<?php

namespace App;

use App\FichaDeStock;

use Illuminate\Database\Eloquent\Model;

class LineaFichaStock extends Model
{
    public function ficha(){
        return $this->belongsTo(FichaDeStock::class); // Muchos a muchos
    }
}
