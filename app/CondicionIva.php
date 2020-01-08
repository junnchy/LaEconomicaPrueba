<?php

namespace App;

use App\Cliente;

use Illuminate\Database\Eloquent\Model;

class CondicionIva extends Model
{
    protected $table = 'condicion_iva';

    public function clientes()
    {
        return $this->hasMany(Cliente::class);
    }
}
