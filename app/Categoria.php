<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public function padre()
    { //$libro->categoria->nombre
        return $this->belongsTo(self::class, 'categoria_id');
    }

    public function children()
    {
        return $this->hasMany(Categoria::class, 'id');
    }
}
