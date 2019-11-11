<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Localidad extends Model

{
    protected $table = 'localidades';
    
    public function clientes()
    {
        return $this->belongsToMany(Cliente::class);
    }
}
