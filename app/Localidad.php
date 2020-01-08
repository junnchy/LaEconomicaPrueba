<?php

namespace App;

use App\Cliente;

use Illuminate\Database\Eloquent\Model;

class Localidad extends Model

{
    protected $table = 'localidades';
    
    public function clientes()
    {
        return $this->hasMany(Cliente::class);
    }
}
