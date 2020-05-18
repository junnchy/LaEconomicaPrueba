<?php

namespace App;
use App\CategoriaGasto;

use Illuminate\Database\Eloquent\Model;

class CategoriaGasto extends Model
{
    public function padre()
    { 
        return $this->belongsTo(self::class, 'cat_id');
    }

    public function hijos()
    {
        return $this->hasMany(CategoriaGasto::class, 'cat_id');
    }
}
