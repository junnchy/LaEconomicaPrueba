<?php

namespace App;

use App\FichaDeStock;

use Illuminate\Database\Eloquent\Model;

class Desposito extends Model
{
    public function fichas()
    {
        return $this->hasMany(FichaDeStock::class);
    }

    
}
