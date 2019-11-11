<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CondicionIva extends Model
{
    protected $table = 'condicion_iva';

    public function cliente()
    {
        return $this->belongsToMany(Cliente::class);
    }
}
