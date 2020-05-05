<?php

namespace App;
use App\Localidad;
use App\Cliente;

use Illuminate\Database\Eloquent\Model;

class Provincia extends Model
{
    public function localidades()
    {
        return $this->hasMany(Localidad::class)->orderBy('nombre');
    }

    public function clientes()
    {
        return $this->hasMany(Cliente::class);
    }
}
