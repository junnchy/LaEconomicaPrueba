<?php

namespace App;
use APP\Localidad;

use Illuminate\Database\Eloquent\Model;

class Provincia extends Model
{
    public function localidades()
    {
        return $this->hasMany(Localidad::class);
    }
}
