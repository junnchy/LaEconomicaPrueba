<?php

namespace App;

use App\Cliente;

use Illuminate\Database\Eloquent\Model;

class CategoriaClientes extends Model
{
    public function clientes()
    {
        return $this->hasMany(Cliente::class, 'id');
    }
}
